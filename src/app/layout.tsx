import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
import { LineChart, Mail, MenuIcon } from "lucide-react"
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col overflow-hidden min-h-screen">

          <div className="px-5 border py-2 flex justify-between items-center">

            <Image src="/logo.png" alt="Logo" width={200} height={200} />
            <div className=" gap-2 text-slate-500 hidden md:flex">
              <Mail size={24} />
              greenagricorp@gmail.com
            </div>
            <div className="gap-2 text-slate-500 flex md:hidden">
              <MenuIcon size={40} className="" />
            </div>
          </div>
          <div className="px-20 md:flex hidden  gap-5 bg-emerald-600/90 text-white py-3 border-black border-b-2 ">
            {
              ["Home", "Business", "Contact Us", "Products"].map((x, i) =>
                <div key={i} className="font-bold hover:underline underline-offset-4  transition-all ">
                  <span>{x}</span>
                </div>)
            }
          </div>
          <div className="grow">
            {children}
          </div>

          <footer className="bg-emerald-600 text-white text-center py-5">
            <p>© 2021 Green Agricorp</p>
          </footer>
        </div>
      </body>
    </html>
  );
}