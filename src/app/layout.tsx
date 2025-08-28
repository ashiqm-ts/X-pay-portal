import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import AppProviders from "../AppProvider";
import "./globals.css";
import Sidebar from "@/layout-components/sidebar/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "X-Pay",
  description: "X-Pay",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex ">
        <main className=" w-full min-h-screen bg-primary.main">
          {children}
        </main>
      </body>
    </html>
  );
}
