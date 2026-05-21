import type { Metadata } from "next";
import { Poppins, VT323 } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const vt323 = VT323({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-vt323",
});

export const metadata: Metadata = {
  title: "Marvellous Ogunode | Portfolio",
  description: "Modern portfolio website for Marvellous Ogunode.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${vt323.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900">{children}</body>
    </html>
  );
}
