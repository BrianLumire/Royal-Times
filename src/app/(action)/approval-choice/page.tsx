import Image from 'next/image'
import React from 'react'

const ApprovalChoicePage = () => {
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
          <div className="w-1/2 h-[4px] bg-[#F58735] rounded-xl"></div>
        </div>
        
        <div className="flex items-center gap-2 mt-3 pb-3 border-b border-gray-300 justify-center md:justify-start">
            <div className="bg-[#E6D37CBF] px-3 py-1 flex items-center rounded-xl">
            <span className='font-sans font-medium text-xs  text-[#B68E00]'>Pending</span>
            </div>
            <div className="">
                <span className='font-sans font-medium text-xs'>Richard Kyuli</span>
            </div>
        </div>
            
     
      </div>
    </div>
  )
}

export default ApprovalChoicePage
