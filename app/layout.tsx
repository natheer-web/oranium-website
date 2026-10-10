import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google";
import "./globals.css";

const cairo = Cairo({ subsets: ["arabic", "latin"], variable: "--font-cairo", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "ORANIUM | حلول برمجية وأمن سيبراني",
  description: "ORANIUM شركة ناشئة للحلول البرمجية والأمن السيبراني وأتمتة الأنظمة.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${inter.variable}`}>
      <body className="bg-obsidian font-sans text-slate-200 antialiased">{children}</body>
    </html>
  );
}
