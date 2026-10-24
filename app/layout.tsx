import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "PearTree.pro — platforma biznesów online",
  description: "Cloudflare-native platforma do uruchamiania i prowadzenia wertykalnych portali oraz biznesów online.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
