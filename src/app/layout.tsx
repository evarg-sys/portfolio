import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChatbotWidget } from "@/components/ChatbotWidget";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Eric Varghese | Data Science @ UIC",
  description: "Data science student. AI • Quant • Systems • Research — Portfolio, projects, and research.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#0a0a0a]">
      <body className="min-h-screen antialiased text-white bg-[#0a0a0a]">
        <PageIntro />
        <Navbar />
        {children}
        <Footer />
        <ChatbotWidget />
      </body>
    </html>
  );
}
