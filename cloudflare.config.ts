import { bindings, defineConfig, defineWorker } from "cf/config";

type PearTreeEnvironment = "local" | "preview" | "staging" | "production";

function resolveEnvironment(mode: string | undefined, isPreview: boolean): PearTreeEnvironment {
  if (isPreview || mode === "preview") return "preview";
  if (mode === "staging") return "staging";
  if (mode === "production") return "production";
  return "local";
}

export default defineConfig(({ mode, isPreview }) => {
  const environment = resolveEnvironment(mode, isPreview);

  return {
    worker: defineWorker({
      name: `peartree-${environment}`,
      entrypoint: "vinext/server/fetch-handler",
      compatibilityDate: "2026-10-24",
      compatibilityFlags: ["nodejs_compat"],
      domains: environment === "production" ? ["peartree.pro", "www.peartree.pro"] : undefined,
      assets: {
        htmlHandling: "none",
        notFoundHandling: "none",
        runWorkerFirst: ["/*", "!/_next/static/*", "!/*/_next/static/*"],
      },
      observability: {
        enabled: environment !== "local",
        headSamplingRate: environment === "production" ? 0.1 : 1,
        redactQueryString: true,
        logs: {
          enabled: environment !== "local",
          invocationLogs: true,
          headSamplingRate: environment === "production" ? 0.1 : 1,
        },
      },
      env: {
        ASSETS: bindings.assets(),
        IMAGES: bindings.images(),
        APP_ENV: bindings.text(environment),
      },
    }),
  };
});
