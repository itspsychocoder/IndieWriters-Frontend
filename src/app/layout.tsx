import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Navbar} from "@/components/Navbar"
import { Lato } from "next/font/google"
import {Toaster} from "react-hot-toast";
const lato = Lato({ subsets:["latin"],weight: ['400', '700'] });
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Welcome to IndieWriters",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${lato.className} antialiased`}
      >
        <Toaster/>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
