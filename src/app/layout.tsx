import type { Metadata } from "next";
// import localFont from "next/font/local";
// const geistSans = localFont({ src: "./fonts/GeistVF.woff", variable: "--font-geist-sans", weight: "100 900"});
// const geistMono = localFont({ src: "./fonts/GeistMonoVF.woff", variable: "--font-geist-mono", weight: "100 900" });
import { Inter } from 'next/font/google';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "./globals.css";

import TopNavBar from "@/app/components/TopNavBar"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Cheer Tournament Manager",
  description: "Setup your cheer tournament with ease",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
        <body className={`${inter.className} antialiased`}>
            <TopNavBar />
            <div className="container mx-auto max-w-6xl">
                {children}
            </div>
      </body>
    </html>
  );
}
