import "@/styles/globals.css";
import { Roboto } from "next/font/google";
import type { Metadata } from "next";
import Client from "@/components/Client";

const roboto = Roboto({ subsets: ["cyrillic"], weight: "300" });

export const metadata: Metadata = {
  title: "Joshua Daniel Lawsin",
  description: "Joshua Daniel Lawsin's Portfolio",
  icons: {
    icon: ["/favicon/favicon.ico?v=4"],
    apple: ["/favicon/apple-touch-icon.png?v=4"],
    shortcut: ["/favicon/apple-touch-icon.png"],
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" id="#main">
      <body className={roboto.className}>
        <Client>{children}</Client>
      </body>
    </html>
  );
}
