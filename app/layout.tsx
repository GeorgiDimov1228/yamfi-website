import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "YAMFI - Need For Seed | Premium Seeds Supplier",
  description: "YAMFI specializes in high-quality sunflower and pumpkin seeds. Raw and roasted seeds for retail and wholesale. GMO-free, EU certified.",
  keywords: "sunflower seeds, pumpkin seeds, roasted seeds, raw seeds, wholesale seeds, Bulgaria, need for seed",
  openGraph: {
    title: "YAMFI - Need For Seed | Premium Seeds Supplier",
    description: "High-quality sunflower and pumpkin seeds for retail and wholesale",
    url: "https://yamfi.eu",
    siteName: "YAMFI",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-gray-50`}>
        <LanguageProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
