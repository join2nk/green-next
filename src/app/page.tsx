import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="relative bg-slate-900/40 h-full  ">

        <div className={`bg-[url("/IMG_1.jpg")]  transition-all absolute right-0 left-0 top-0 bottom-0 -z-10 bg-cover bg-center blur-sm`}>
        </div>
        <div className="flex justify-center items-center h-full  z-10  min-h-[500px]">

          <div className="text-white text-4xl gap-3 flex flex-col ">
            <h1 className="text-center font-extrabold">Green Agri Corp</h1>
            <p className="text-center font-thin max-w-2xl">We are a company that specializes in the production of agricultural products</p>
            <div className="flex items-center justify-center">
              <button className="text-lg border-2 font-bold border-emerald-600 text-white px-5 py-2 rounded-full flex  items-center gap-3">Contact Us
                <ArrowRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
