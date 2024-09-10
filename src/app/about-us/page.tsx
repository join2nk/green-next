import { ChevronRightIcon, HomeIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function AboutUsPage() {
  return (
    <>
      <div className="relative bg-slate-900/40 h-full overflow-hidden  ">

        <div className={`bg-[url("/IMG_1.jpg")] scale-110  transition-all absolute right-0 left-0 top-0 bottom-0 -z-10 bg-cover bg-center blur-md`}>
        </div>
        <div className="flex items-center h-full  z-10  min-h-[100px] max-w-7xl mx-auto">
          <div className="text-slate-200 gap-3 flex transition-all px-12 ">
            <Link href="/">
              <HomeIcon />
            </Link>
            <ChevronRightIcon />
            About Us
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-5 py-20 flex flex-col gap-3  ">
        <h1 className="text-4xl md:text-6xl font-serif ">Green Agri Corp Pvt Ltd</h1>
        <p className="text-2xl md:text-2xl font-thin ">Founded as a pioneer in the food industry, Green Agri Corp Private Limited bridges traditional farming methods with modern technology to deliver premium rice from India&apos;s prosperous farms.</p>
        <h2 className="text-2xl font-serif mt-5">Our commitment to excellence:</h2>
        <ul className=" *:border  *:rounded-lg *:my-2 *:p-5 *:shadow-md  gap-2 md:gap-3 grid md:grid-cols-3 grid-cols-1 ">
          <li>Quality Assurance: We rigorously test samples at every stage of production to ensure the highest standards of health and quality.</li>
          <li>Integrated Supply Chain: Our control over raw material sourcing, manufacturing, packaging, and distribution allows us to maintain superior quality throughout the process.</li>
          <li>Customer Satisfaction: Meeting and exceeding our clients&apos; expectations is at the core of our company strategy and goals.</li>
        </ul>
        <p className="text-2xl md:text-2xl font-thin mt-5">At Green Agri Corp, we combine time-honored agricultural practices with innovative techniques to meet our customers&apos; evolving needs. Our state-of-the-art infrastructure and dedication to quality position us as a leader in providing exceptional rice products to the global market.</p>

      </div>
    </>
  )
}
