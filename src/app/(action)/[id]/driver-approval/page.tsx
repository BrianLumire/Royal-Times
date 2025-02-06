"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

interface DriverApprovalPageProps {
  params: {
    id: string;
  };
}

const DriverApprovalPage = ({ params }: DriverApprovalPageProps) => {
  const { id } = params;
  const router = useRouter();

  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-[95%] sm:w-[60%] lg:w-[40%] bg-white flex flex-col p-3 rounded-xl shadow-md border border-gray-200">
        {/* Header */}
        <div className="flex items-center justify-between">
          {/* Back Arrow navigates to /driver */}
          <div className="flex items-center gap-2">
            <button onClick={() => router.push("/driver")}>
              <Image src="/driver-arrow.svg" alt="Back Arrow" width={13} height={13} />
            </button>
            <span className="font-sans font-medium text-[13px] md:text-sm">
              Driver Application Approval - ID: {id}
            </span>
          </div>
          {/* X button navigates to /driver */}
          <button
            onClick={() => router.push("/driver")}
            className="font-sans flex items-center text-gray-700 text-sm font-semibold px-4 rounded-lg py-[3px] bg-[#F5F5F5]"
          >
            X
          </button>
        </div>
        {/* Progress bar */}
        <div className="flex items-center gap-2 mt-4">
          <div className="w-1/2 h-[4px] bg-[#F58735] rounded-xl"></div>
          <div className="w-1/2 h-[4px] bg-[#D9D9D9] rounded-xl"></div>
        </div>
        {/* Details Section */}
        <div className="flex items-center gap-2 mt-3 pb-3 border-b border-gray-300 justify-center md:justify-start">
          <div className="bg-[#E6D37CBF] px-3 py-1 flex items-center rounded-xl">
            <span className="font-sans font-medium text-xs text-[#B68E00]">Pending</span>
          </div>
          <div>
            <span className="font-sans font-medium text-xs">Richard Kyuli</span>
          </div>
        </div>
        <div className="p-2 mt-3 rounded-[12px] flex justify-between border border-gray-300">
          <span className="font-sans text-sm font-medium">Application made on:</span>
          <span className="font-sans text-sm font-normal">Dec 30, 2019 05:18</span>
        </div>
        <div className="p-2 mt-3 rounded-[12px] flex justify-between border border-gray-300">
          <span className="font-sans text-sm font-medium">License Plate:</span>
          <span className="font-sans text-sm font-normal">KCB 012T</span>
        </div>
        <div className="p-2 mt-3 rounded-[12px] flex justify-between border border-gray-300">
          <span className="font-sans text-sm font-medium">Driver License:</span>
          <span className="font-sans text-sm font-normal">A34AR5-24</span>
        </div>
        <div className="p-2 mt-3 rounded-[12px] flex justify-between border border-gray-300">
          <span className="font-sans text-sm font-medium">PSV Number:</span>
          <span className="font-sans text-sm font-normal">A34AR5-24</span>
        </div>
        <div className="p-2 mt-3 rounded-[12px] flex justify-between border border-gray-300">
          <span className="font-sans text-sm font-medium">Vehicle Propulsion:</span>
          <span className="font-sans text-sm font-normal">Fuel</span>
        </div>
        <div className="p-2 mt-3 rounded-[12px] flex justify-between border border-gray-300">
          <span className="font-sans text-sm font-medium">Vehicle Class:</span>
          <span className="font-sans text-sm font-normal">Car</span>
        </div>
        <div className="p-2 mt-3 mb-2 rounded-[12px] flex justify-between border border-gray-300">
          <span className="font-sans text-sm font-medium">Brand:</span>
          <span className="font-sans text-sm font-normal">Toyota</span>
        </div>
        {/* Footer Buttons */}
        <div className="flex items-center gap-4 justify-end mt-4">
          {/* Cancel button navigates to /driver */}
          <button
            type="button"
            className="px-12 py-3 font-sans font-medium text-base border border-[#F58735] bg-white rounded-xl text-[#F58735]"
            onClick={() => router.push("/driver")}
          >
            Cancel
          </button>
          {/* Continue button navigates to the next page: approval-choice */}
          <button
            type="button"
            className="px-16 py-[13px] font-sans font-medium text-base bg-[#F58735] rounded-xl text-white"
            onClick={() => router.push(`/${id}/approval-choice`)}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default DriverApprovalPage;
