import { ToastContainer } from "react-toastify";
import { Inter, Tenor_Sans, Figtree } from "next/font/google";
import type { Metadata } from "next";
import "swiper/css/bundle";
import "./globals.scss";

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
//   display: "swap",
// });

const figTree = Figtree({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-figtree',
  display: 'swap',
})

const tenor = Tenor_Sans({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-tenor',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Yulanto Web Creation",
  description: "Web Design and Development Company",
  icons: '/assets/img/logo/favicon.png'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${tenor.variable} ${figTree.variable}`}>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
