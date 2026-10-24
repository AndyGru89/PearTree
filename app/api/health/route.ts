import { env } from "cloudflare:workers";

export function GET() {
  return Response.json(
    {
      status: "ok",
      service: "peartree",
      environment: env.APP_ENV,
    },
    {
      headers: {
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff",
      },
    },
  );
}
