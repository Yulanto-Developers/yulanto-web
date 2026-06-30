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
  title: "Yulanto Web Creation",
  description: "Web Design and Development Company",
  icons:'/assets/img/logo/favicon.png'
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
