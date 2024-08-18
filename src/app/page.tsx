import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="relative bg-slate-900/40 h-full overflow-hidden ">

        <div className={`bg-[url("/IMG_1.jpg")] scale-110  transition-all absolute right-0 left-0 top-0 bottom-0 -z-10 bg-cover bg-center blur-sm`}>
        </div>
        <div className="flex justify-center items-center h-full  z-10  min-h-[500px]">

          <div className="text-white gap-3 flex flex-col transition-all">
            <h1 className="text-center  text-4xl md:text-6xl font-serif ">Green Agri Corp Pvt Ltd</h1>
            <p className="text-center text-3xl md:text-4xl font-thin max-w-2xl">We are a company that specializes in the production of agricultural products</p>
            <div className="flex items-center justify-center">
              <button className="text-lg border-2 font-bold border-emerald-600 text-white px-5 py-2 rounded-full flex  items-center gap-3 bg-teal-700/30 backdrop-blur-sm">Contact Us
                {/* <ArrowRight size={18} /> */}
              </button>
              <Link href="/about-us">
                <span className="ml-5 flex  gap-3 items-center">
                  About us <ArrowRight size={18} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ShortAboutUsSection />
    </div>
  );
}

function ShortAboutUsSection() {
  return <>
    <div className="container mx-auto  md:px-20 px-3">
      <div className="flex flex-col md:flex-row gap-5 py-10 [&>*]:md:max-w-[50%] items-center">
        <div className="flex-1 grow ">
          <h1 className="text-4xl font-serif ">Green Agri Corp Pvt Ltd</h1>
          <p className=" text-2xl font-thin">Founded as a pioneer in the food industry, Green Agri Corp Private Limited bridges traditional farming methods with modern technology to deliver premium rice from India's prosperous farms.</p>
          {/* find out more btn */}
          <div className="p-2"></div>
          <div className="flex items-center gap-3">
            <Link href="/about-us">

              <button className="
                p-3 px-8 flex items-center justify-center gap-3 bg-amber-400 
              ">About Us
                <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        </div>
        <div className="flex-1 md:flex justify-center items-center relative  md:p-2" >
          {/* 2 solid shadow behind the image  like cards */}
          <div className=" aspect-square object-cover rounded-lg shadow-lg relative max-w-sm " >
            <div className=" absolute top-12 left-12 right-0 bottom-0 z-[-1] rounded-lg shadow-lg scale-110 bg-slate-300 transition-all "></div>
            <Image src="/IMG_1.jpg" alt="About Us" width={500} height={500} className="object-cover h-full rounded-lg w-full" />
          </div>
        </div>
      </div>
    </div>
  </>
}