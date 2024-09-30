import type { Metadata } from "next";
import { Poppins, Cookie } from "next/font/google";
import "./globals.css";
import classes from "./page.module.css"
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({ weight: ["100", '300', "500", "700"], subsets: ['latin'] });


export const metadata: Metadata = {
  title: "Jurnal Si Udin",
  description: "Jurnal Si Udin berisi tentang hal-hal yang disukai dan menjadi wadah kreatifitas dan produktifitas milik pribadi, silahkan berkunjung",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${classes.background} text-gray-900 min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1 container mx-auto flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
