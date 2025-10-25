import type { Metadata } from "next";
import "./globals.css";
import "../styles/theme.css";
import { Inter, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientLenis from "@/components/ClientLenis";
import CursorEffect from "@/components/CursorEffect";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "Vaneeza Maqsood — Product Designer & Ecosystem Lead",
  description:
    "Designing experiences that connect people, community, and creativity. UX, AI tools, and marketing — with motion and microinteractions.",
  openGraph: {
    title: "Vaneeza Maqsood — Portfolio",
    description:
      "UX, AI, and community-driven design with bold motion and storytelling.",
    images: [{ url: "/og.png" }],
  },
  metadataBase: new URL("https://vaneeza.fi"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${space.variable}`}>
      <body className="min-h-dvh bg-bg text-fg font-body">
        <ClientLenis />
        <CursorEffect />
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
