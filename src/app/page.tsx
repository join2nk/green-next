import { ArrowRight } from "lucide-react";
import Image from "next/image";

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

              <span className="ml-5 flex  gap-3 items-center">
                About us <ArrowRight size={18} />
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
