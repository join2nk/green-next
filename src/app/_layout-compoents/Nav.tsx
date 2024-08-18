"use client"
import Image from "next/image"
import { Mail, MenuIcon } from "lucide-react"
import { useState } from "react"
export function NavBar() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="px-5 border py-2 flex justify-between items-center">
        <Image src="/logo.png" alt="Logo" width={200} height={200} />
        <div className=" gap-2 text-slate-500 hidden sm:flex">
          <Mail size={24} />
          greenagricorp@gmail.com
        </div>
        <div className="gap-2 text-slate-500 flex sm:hidden">
          <MenuIcon size={40} className=""
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>
      <div className="px-20 sm:flex hidden  gap-5 bg-emerald-600/90 text-white py-3 border-black border-b-1">
        {
          ["Home", "Business", "Contact Us", "Products"].map((x, i) =>
            <div key={i} className="font-bold hover:underline underline-offset-4  transition-all ">
              <span>{x}</span>
            </div>)
        }
      </div>
      <div className="relative">
        {open && <>
          <div className="px-5 sm:hidden flex flex-col gap-2 bg-emerald-600/90 text-white py-3 border-black border-b-2 absolute right-0 left-0 z-20 overflow-clip transition-all " >
            <div className="space-y-5" data-aos="fade-down" >
              {
                ["Home", "Business", "Contact Us", "Products"].map((x, i) =>
                  <div key={i} className="font-bold hover:underline underline-offset-4  transition-all ">
                    <span>{x}</span>
                  </div>)
              }
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