import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'
import Header from "@/components/Header";
 

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Vitark",
  description: "Vitark is a library of functional components. This is not a library of UI components.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <Header/>
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}
