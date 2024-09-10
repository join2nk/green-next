"use client"
import Image from "next/image"
import { Mail, MenuIcon, Phone } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import logoImage from '../../../public/logo.png'
export function NavBar() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="px-5 border py-2 flex justify-between items-center">
        <div className=" max-w-7xl mx-auto flex justify-between w-full items-center">

          {/* <img src="/logo.png" alt="Logo" className="w-64" /> */}
          <Image src={logoImage} alt="Logo" className="w-56"
          // width={200} height={100} 
          />
          <div className=" gap-2 text-slate-500 hidden sm:flex flex-col *:justify-end">
            <div className="flex gap-2 items-center">
              greenagricorp@gmail.com
              <Mail size={20} />
            </div>
            <div className="flex gap-2 items-center">
              +91 971488521
              <div className="rotate-45">
                <Phone size={20} className="rotate-90" />
              </div>
            </div>
          </div>
          <div className="gap-2 text-slate-500 flex sm:hidden">
            <MenuIcon size={40} className=""
              onClick={() => setOpen(!open)}
            />
          </div>
        </div>
      </div>
      <div className="sm:flex hidden  gap-5 bg-gray-200 text-slate-700  py-3 border-black border-b-1 tracking-wide ">
        <div className="max-w-7xl mx-auto  gap-5 xl:px-0 px-5 flex w-full">
          <Link className="font-bold hover:underline underline-offset-4  transition-all " href={"/"}>Home</Link>
          <Link className="font-bold hover:underline underline-offset-4  transition-all " href={"/about-us"}>About Us</Link>
          <Link className="font-bold hover:underline underline-offset-4  transition-all " href={"/business"}>Business</Link>
          <Link className="font-bold hover:underline underline-offset-4  transition-all " href={"/products"}>Products</Link>
          <Link className="font-bold hover:underline underline-offset-4  transition-all " href={"/"}>Contact Us</Link>
        </div>
      </div>
      <div className="relative">
        {open && <>
          <div className="px-5 sm:hidden flex flex-col gap-2 bg-gray-200/90 text-slate-700 py-3 border-black border-b-2 absolute right-0 left-0 z-20 overflow-clip transition-all" >
            <div className="space-y-5 flex flex-col" data-aos="fade-down" >
              {/* {
                ["Home", "Business", "Contact Us", "Products"].map((x, i) =>
                  <div key={i} className="font-bold hover:underline underline-offset-4  transition-all ">
                    <span>{x}</span>
                  </div>)
              } */}
              <Link onClick={() => { setOpen(false) }} className="font-bold hover:underline underline-offset-4  transition-all " href={"/"}>Home</Link>
              <Link onClick={() => { setOpen(false) }} className="font-bold hover:underline underline-offset-4  transition-all " href={"/about-us"}>About Us</Link>
              <Link onClick={() => { setOpen(false) }} className="font-bold hover:underline underline-offset-4  transition-all " href={"/business"}>Business</Link>
              <Link onClick={() => { setOpen(false) }} className="font-bold hover:underline underline-offset-4  transition-all " href={"/products"}>Products</Link>
              <Link onClick={() => { setOpen(false) }} className="font-bold hover:underline underline-offset-4  transition-all " href={"/"}>Contact Us</Link>
            </div>
          </div>
          <div className="fixed top-0 left-0 right-0 bottom-0 z-10" onClick={() => setOpen(false)}>
          </div>
        </>
        }
      </div>
    </>
  )
}