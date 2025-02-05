import Image from 'next/image'
import React from 'react'

const DriverApprovalPage = () => {
  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-[95%] sm:w-[60%] lg:w-[40%] bg-white flex flex-col p-3 rounded-xl shadow-md border border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/driver-arrow.svg" alt="" width={13} height={13} />
            <span className="font-sans font-medium text-[13px] md:text-sm">
              Driver Application Approval
            </span>
          </div>
          <button className="font-sans flex items-center text-gray-700 text-sm font-semibold px-4 rounded-lg py-[3px] bg-[#F5F5F5]">
            X
          </button>
        </div>
        {/* Progress bar */}
        <div className="flex items-center gap-2 mt-4">
          <div className="w-1/2 h-[4px] bg-[#F58735] rounded-xl"></div>
          <div className="w-1/2 h-[4px] bg-[#D9D9D9] rounded-xl"></div>
        </div>
        
        <div className="flex items-center gap-2 mt-3 pb-3 border-b border-gray-300 justify-center md:justify-start">
            <div className="bg-[#E6D37CBF] px-3 py-1 flex items-center rounded-xl">
            <span className='font-sans font-medium text-xs  text-[#B68E00]'>Pending</span>
            </div>
            <div className="">
                <span className='font-sans font-medium text-xs'>Richard Kyuli</span>
            </div>
        </div>
            
        <div className="p-2 mt-3  rounded-[12px] flex justify-between border border-gray-300">
            <span className='font-sans text-sm font-medium '>Application made on:</span>
            <span className='font-sans text-sm font-normal'>Dec 30,2019 05:18</span>
        </div>
        <div className="p-2 mt-3  rounded-[12px] flex justify-between border border-gray-300">
            <span className='font-sans text-sm font-medium '>License Plate:</span>
            <span className='font-sans text-sm font-normal'>KCB 012T</span>
        </div>
        <div className="p-2 mt-3  rounded-[12px] flex justify-between border border-gray-300">
            <span className='font-sans text-sm font-medium '>Driver License:</span>
            <span className='font-sans text-sm font-normal'>A34AR5-24</span>
        </div>
        <div className="p-2 mt-3  rounded-[12px] flex justify-between border border-gray-300">
            <span className='font-sans text-sm font-medium '>PSV Number:</span>
            <span className='font-sans text-sm font-normal'>A34AR5-24</span>
        </div>
        <div className="p-2 mt-3  rounded-[12px] flex justify-between border border-gray-300">
            <span className='font-sans text-sm font-medium '>Vehicle Propulsion:</span>
            <span className='font-sans text-sm font-normal'>Fuel</span>
        </div>
        <div className="p-2 mt-3  rounded-[12px] flex justify-between border border-gray-300">
            <span className='font-sans text-sm font-medium '>Vehicle Class:</span>
            <span className='font-sans text-sm font-normal'>Car</span>
        </div>
        <div className="p-2 mt-3 mb-2 rounded-[12px] flex justify-between border border-gray-300">
            <span className='font-sans text-sm font-medium '>Brand:</span>
            <span className='font-sans text-sm font-normal'>Toyota</span>
        </div>
      </div>
    </div>
  )
}

export default DriverApprovalPage
