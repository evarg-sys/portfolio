import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Eric Varghese | Computer Science @ UIC",
  description: "AI • Quant • Systems • Research — Portfolio, projects, and research.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#0b0b0b]">
      <body className="min-h-screen antialiased text-white bg-[#0b0b0b]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
