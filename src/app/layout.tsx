import { ToastContainer } from "react-toastify";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "swiper/css/bundle";
import "./globals.scss";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pixora || Creative Portfolio Nextjs Template",
  description: "A modern creative portfolio template built with Next.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
