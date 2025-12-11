// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ClickSpark from "@/components/ClickSpark";
import LiquidEther from "@/components/LiquidEther";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anno Siregar - Portfolio",
  description: "Web & Mobile Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <ClickSpark>
          {/* LiquidEther — Hanya di halaman utama & halaman lain */}
          <div className="fixed inset-0 -z-10 pointer-events-none">
            <LiquidEther
              colors={["#5227FF", "#0046FF", "#B19EEF", "#8B5CF6"]}
              mouseForce={20}
              cursorSize={100}
              resolution={0.6}
              autoDemo={true}
              autoIntensity={3.5}
            />
          </div>

          <Navbar />
          <main className="pt-24">
            {children}
          </main>
        </ClickSpark>
      </body>
    </html>
  );
}