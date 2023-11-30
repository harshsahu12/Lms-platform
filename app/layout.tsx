import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ToastProvider from "@/components/providers/ToastProvider";
import { ConffetiProvider } from "@/components/providers/confettiProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learnhub",
  description: "userfriendly Lms platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <link rel="shortcut icon" href="logo.svg" type="image/x-icon" />
        <body className={inter.className}>
          <ConffetiProvider />
          <ToastProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
