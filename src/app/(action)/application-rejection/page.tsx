import Image from 'next/image'
import React from 'react'

const ApplicationRejectionPage = () => {
  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-[95%] sm:w-[60%] lg:w-[40%] bg-white flex flex-col p-3 rounded-xl shadow-md border border-gray-200">
        <div className="flex items-center justify-between pb-3 border-b border-gray-300">
          <div className="flex items-center gap-2 ">
            <Image src="/driver-arrow.svg" alt="" width={13} height={13} />
            <span className="font-sans font-medium text-[13px] md:text-sm">
               Application Rejection
            </span>
          </div>
          <button className="font-sans flex items-center text-gray-700 text-sm font-semibold px-4 rounded-lg py-[3px] bg-[#F5F5F5]">
            X
          </button>
        </div>
       
        <button className="p-2 mt-3  rounded-[12px] flex  border border-[#F58735]">
            <span className='font-sans text-sm font-medium text-[#F58735] '>Wrong document</span>
        </button>     
        <button className="p-2 mt-3  rounded-[12px] flex  border border-gray-300">
            <span className='font-sans text-sm font-medium '>Vehicle propulsion</span>
        </button> 
        <button className="p-2 mt-3  rounded-[12px] flex  border border-gray-300">
            <span className='font-sans text-sm font-medium '>License Plate</span>
        </button> 
        <button className="p-2 mt-3  rounded-[12px] flex  border border-gray-300">
            <span className='font-sans text-sm font-medium '>Brand</span>
        </button> 

        <div className="flex items-center mt-10 gap-2  justify-center md:justify-end ">
            <button className='text-[#F58735] border border-[#F58735] px-4 py-2 font-sans font-medium rounded-[11px] text-sm'>Back to Review</button>
            <button className='text-white bg-[#F58735] font-sans px-6 py-2 rounded-[11px] font-medium text-sm'>Confirm</button>
        </div>
      </div>
    </div>
  )
}

export default ApplicationRejectionPage
