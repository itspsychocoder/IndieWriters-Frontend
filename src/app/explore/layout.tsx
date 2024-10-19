import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Explore - IndieWriters",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    {children} 
    </>
  );
}