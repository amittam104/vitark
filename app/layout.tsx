import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import { Diamond } from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vitark",
  description:
    "Vitark is a library of functional components. This is not a library of UI components.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased text-slate-800`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <Header />
          {/* <div className="fixed inset-0 -z-5 flex items-center justify-center">
            <Diamond className="w-screen h-screen text-slate-50 " />
          </div> */}
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
