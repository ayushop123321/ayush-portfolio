import type { Metadata } from "next";
import { Poppins, Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/contexts/AuthContext";

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  weight: ['400', '500', '600', '700', '800'],
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ayush Sonkar | Portfolio",
  description: "Portfolio of Ayush Sonkar - Experienced Web Developer, Discord Bot Developer and Minecraft Plugin Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${orbitron.variable} antialiased`}
      >
        <AuthProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
