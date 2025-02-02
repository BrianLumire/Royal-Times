import ActivityPieChart from "@/components/ActivityPieChart";
import AverageGraph from "@/components/AverageGraph";
import CustomerSatisfactionGraph from "@/components/CustomerSatisfactionGraph";
import DriverGraphSatisfaction from "@/components/DriverGraphSatisfaction";
import IncomePieChart from "@/components/IncomePieChart";
import MainCard from "@/components/MainCard";
import RevenueOverviewGraph from "@/components/RevenueOverviewGraph";
import Image from "next/image";

const AnalyticsPage = () => {
  return (
    <div className="mx-2">
     {/* Top section with Cards */}
     <div className="flex flex-col md:flex-row gap-4 md:justify-between mb-6">
        <MainCard title="Total Deliveries Revenue" value="2,000,000" imageSrc="/cumulative.svg" imageBgColor="#E5E4FF" />
        <MainCard title="Total Driver Payouts" value="Ksh 1,500,000" imageSrc="/analytic-icon-2.svg" imageBgColor="#FFF3D6" />
        <MainCard title="Total Profit" value="10,000,000" imageSrc="/analytic-icon-3.svg" imageBgColor="#D9F7E8" />
        <MainCard title="Total Commission Submitted" value="5,000,000" imageSrc="/analytic-icon-4.svg" imageBgColor="#FFDED1" />
      </div>
      <div className="flex items-center justify-end gap-2 mb-3">
            <button className="flex items-center gap-3 px-3  py-2 border border-[#F58735] rounded-xl">
              <Image src="/calender-icon.svg" alt="" width={14} height={14}/>
              <span className="font-sans font-medium text-sm text-[#F58735]">2025</span>
             </button>
             <button className="flex items-center gap-3 px-3  py-2 border border-[#F58735] rounded-xl">
              <Image src="/export-icon.svg" alt="" width={14} height={14}/>
              <span className="font-sans font-medium text-sm text-[#F58735]">Export</span>
             </button>
            </div>
            {/*Div 1 */}
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="w-full md:w-1/2 shadow-lg rounded-xl border border-gray-200 p-4">
                  <div className="flex flex-col md:flex-row  items-center justify-between">
                            <h1 className="font-sans font-bold text-base md:text-lg mb-3 ">Revenue overview (KES)</h1>
                            <div className="flex ">
                              <button className="flex items-center gap-3 px-4 py-1 border border-[#F58735] rounded-xl">
                              <span className="font-sans font-medium text-sm text-[#F58735]">Deliveries</span>
                              <Image src="/drop-icon-color.svg" alt="" width={12} height={12}/>
                              </button>
                            </div>
                          </div>
                          <RevenueOverviewGraph/>
              </div>
              <div className="w-full md:w-1/2 shadow-lg rounded-xl border border-gray-200 p-4">
                  <h1 className="font-sans font-bold text-base md:text-lg mb-3">Activity Statistics</h1> 
                 <div className="flex items-center justify-center">
                 <ActivityPieChart/>
                 </div>
                 
              </div>
            </div>
             {/*Div 2 */}
            <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="w-full md:w-1/2 shadow-lg rounded-xl border border-gray-200 p-4">
            <div className="flex flex-col md:flex-row  items-center justify-between">
                <h1 className="font-sans font-bold text-base md:text-lg mb-3 ">Average Working Hours</h1>
             </div>
             
             <AverageGraph/>
            </div>
            <div className="w-full md:w-1/2 shadow-lg rounded-xl border border-gray-200 p-4">
            <div className="flex flex-col md:flex-row  items-center justify-between">
                    <h1 className="font-sans font-bold text-base md:text-lg mb-3 ">Income by Payment Method</h1>
                    <div className="flex ">
                    <button className="flex items-center gap-3 px-3 py-1 border border-[#F58735] rounded-xl">
                     <span className="font-sans font-medium text-sm text-[#F58735]">June</span>
                   <Image src="/drop-icon-color.svg" alt="" width={12} height={12}/>
                    </button>
                   </div> 
              </div>
              <div className="">
             <IncomePieChart/>
             </div>
            </div>
            
             </div>
              {/*Div 3 */}
           <div className="flex flex-col md:flex-row gap-4 mb-4">
           <div className="w-full md:w-1/2 shadow-lg rounded-xl border border-gray-200 p-4">
           <div className="flex flex-col md:flex-row  items-center justify-between">
                     <h1 className="font-sans font-bold text-lg mb-3 ">Customer Satisfaction</h1>
                     <div className="flex items-center gap-3">
                       <button className="flex items-center gap-3 px-3 py-1 border border-[#F58735] rounded-xl">
                         <span className="font-sans font-medium text-sm text-[#F58735]">Parcel</span>
                         <Image src="/drop-icon-color.svg" alt="" width={12} height={12}/>
                       </button>
                       <button className="flex items-center gap-3 px-4 py-1 border border-[#F58735] rounded-xl">
                       <span className="font-sans font-medium text-sm text-[#F58735]">June</span>
                       <Image src="/drop-icon-color.svg" alt="" width={12} height={12}/>
                       </button>
                     </div>
                   </div>

           <CustomerSatisfactionGraph/>
           </div>
           <div className="w-full md:w-1/2 shadow-lg rounded-xl border border-gray-200 p-4">
           <div className="flex flex-col md:flex-row  items-center justify-between">
                     <h1 className="font-sans font-bold text-lg mb-3 ">Driver Satisfaction</h1>
                     <div className="flex items-center gap-3">
                       <button className="flex items-center gap-3 px-3 py-1 border border-[#F58735] rounded-xl">
                         <span className="font-sans font-medium text-sm text-[#F58735]">Parcel</span>
                         <Image src="/drop-icon-color.svg" alt="" width={12} height={12}/>
                       </button>
                       <button className="flex items-center gap-3 px-4 py-1 border border-[#F58735] rounded-xl">
                       <span className="font-sans font-medium text-sm text-[#F58735]">June</span>
                       <Image src="/drop-icon-color.svg" alt="" width={12} height={12}/>
                       </button>
                     </div>
                   </div>

           <DriverGraphSatisfaction/>
           </div>
            </div>
   </div>
  )
}

export default AnalyticsPage
