"use client";

import SinglePageCards from "@/components/SinglePageCards";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return(
    <div className="flex flex-col md:flex-row gap-3 ">
        {/* Sidecomponent  */}
        <div className="md:w-1/5 flex flex-col gap-2 pb-3 border p-2 border-gray-300 rounded-xl">
        {/*section 1 */}
        <div className="border p-2 border-gray-300 rounded-xl">
           <div className="flex justify-end ">
            <div className="px-2 py-1 flex items-center justify-center rounded-2xl bg-[#CAE3CE]">
            <span className="text-xs font-sans font-medium text-[#007C0C]">Online</span>
            </div>
           </div>
           <div className="flex flex-col items-center">
            <Image src="/driverpic.svg" alt="" width={50} height={50} className="object-cover w-20 h-20 rounded-full mb-2"/>
            <div className="flex items-center gap-2 mb-2">
                <span className="text-sm md:text-[16px] font-sans font-medium">Peter Njenga</span>
                <Image src="/photo-5.svg" alt="" width={21} height={21} />
            </div>
            <div className="flex items-center gap-1 pr-2 ">
            <Image src="/rating.svg" alt="" width={15} height={15} />
            <span className="font-sans text-xs">4.5</span>
            <span className="font-sans text-xs underline">50 Reviews</span>
            </div>
           </div>
        </div>
        {/*section 2 */}
        <div className=" pb-4">
            <h2 className="font-sans mb-2 pb-1 border-b border-gray-300 md:text-sm">Personal Information</h2>
            <div className="flex items-center justify-between mb-3">
                <div className="flex  items-center gap-2">
                <Image src="/gender.svg" alt="" width={15} height={15} />
                <span className="font-sans text-sm md:text-xs ">Registered On</span>  
                </div>
                <span className="font-sans text-sm md:text-xs ">Jan 06 2000</span>
            </div>
        </div>
        {/*section 3 */}
        <div className=" pb-4">
            <h2 className="font-sans mb-2 pb-1 border-b border-gray-300 md:text-sm">Contact Information</h2>
            <div className="flex items-center justify-between mb-3">
                <div className="flex  items-center gap-2">
                <Image src="/mobile.svg" alt="" width={17} height={17} />
                <span className="font-sans text-sm md:text-xs ">Mobile</span>  
                </div>
                <span className="font-sans text-sm md:text-xs ">+254 14434243</span>
            </div>
            <div className="flex items-center justify-between mb-3">
                <div className="flex  items-center gap-2">
                <Image src="/e-mail.svg" alt="" width={17} height={17} />
                <span className="font-sans text-sm md:text-xs ">E-mail</span>  
                </div>
                <span className="font-sans text-sm md:text-xs ">richard@gmail.com</span>
            </div>
        </div>
        <div className="">
            <button className=" px-3 py-1 w-full flex items-center justify-between border border-[#B80000] rounded-xl ">
                <span className="text-xs font-medium font-sans text-[#B80000]">Suspend Driver</span>
                <Image src="/suspend.svg" alt="" width={23} height={23} />
            </button>
        </div>
        </div>

        <div className="flex  gap-2 flex-col md:w-4/5 ">
        <div className="">
            {/* Top section with Cards */}
      <div className="flex flex-col md:flex-row gap-4 md:justify-between mb-6">
        <SinglePageCards title="Total Amount Spent" value="Ksh 2000" imageSrc="/photo 1.svg" imageBgColor="#E5E4FF" />
        <SinglePageCards title="Total Trips & Deliveries Booked" value="Ksh 200" imageSrc="/photo 2.svg" imageBgColor="#FFF3D6" />
        <SinglePageCards title="Discount Given" value="Ksh 200" imageSrc="/photo 3.svg" imageBgColor="#D9F7E8" />
        <SinglePageCards title="Cancelled Trips" value="Ksh 20" imageSrc="/photo 4.svg" imageBgColor="#FFDED0" />
      </div>
        </div> 
        {children}
        </div>
       
    </div>
  )
  
  ;
}
