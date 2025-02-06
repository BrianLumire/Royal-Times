"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

interface ApprovalChoicePageProps {
  params: {
    id: string;
  };
}

const ApprovalChoicePage = ({ params }: ApprovalChoicePageProps) => {
  const { id } = params;
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-[95%] sm:w-[60%] lg:w-[40%] bg-white flex flex-col p-6 rounded-xl shadow-md border border-gray-200">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Back arrow navigates back to Driver Approval */}
            <button onClick={() => router.push(`/action/${id}/driver-approval`)}>
              <Image src="/driver-arrow.svg" alt="Back Arrow" width={16} height={16} />
            </button>
            <span className="font-sans font-medium text-[14px] md:text-base">
              Driver Application Approval - ID: {id}
            </span>
          </div>
          {/* X button navigates to /driver */}
          <button
            onClick={() => router.push("/driver")}
            className="font-sans flex items-center text-gray-700 text-sm font-semibold px-4 rounded-lg py-1 bg-[#F5F5F5]"
          >
            X
          </button>
        </div>
        {/* Progress bar */}
        <div className="flex items-center gap-2 mt-4">
          <div className="w-1/2 h-[4px] bg-[#F58735] rounded-xl"></div>
          <div className="w-1/2 h-[4px] bg-[#F58735] rounded-xl"></div>
        </div>
        {/* Status and Driver Info */}
        <div className="flex items-center gap-2 mt-3 pb-3 border-b border-gray-300 justify-center md:justify-start">
          <div className="bg-[#E6D37CBF] px-3 py-1 flex items-center rounded-xl">
            <span className="font-sans font-medium text-xs text-[#B68E00]">Pending</span>
          </div>
          <div>
            <span className="font-sans font-medium text-xs">Richard Kyuli</span>
          </div>
        </div>
        {/* Document Images Section */}
        {/* Section 1 - National ID */}
        <div className="flex flex-col md:flex-row gap-4 bg-[#F6F6F6] p-3 rounded-xl mt-4">
          <div className="flex flex-col gap-2 md:w-1/2">
            <p className="font-sans font-medium text-sm mb-1">National ID</p>
            <div className="relative rounded-xl border-2 border-gray-300 h-48 w-full overflow-hidden">
              <Image src="/Rectangle 1040.png" alt="National ID" fill className="object-cover" />
            </div>
            <p className="font-sans font-medium text-sm text-center">Back Side</p>
          </div>
          <div className="flex flex-col gap-2 md:w-1/2 md:mt-8">
            <div className="relative rounded-xl border-2 border-gray-300 h-48 w-full overflow-hidden">
              <Image src="/Rectangle 1040.png" alt="National ID" fill className="object-cover" />
            </div>
            <p className="font-sans font-medium text-sm text-center">Front Side</p>
          </div>
        </div>
        {/* Section 2 - Driver License */}
        <div className="flex flex-col md:flex-row gap-4 mt-4 bg-[#F6F6F6] p-3 rounded-xl">
          <div className="flex flex-col gap-2 md:w-1/2">
            <p className="font-sans font-medium text-sm mb-1">Driver License</p>
            <div className="relative rounded-xl border-2 border-gray-300 h-48 w-full overflow-hidden">
              <Image src="/Rectangle 1040.png" alt="Driver License" fill className="object-cover" />
            </div>
            <p className="font-sans font-medium text-sm text-center">Back Side</p>
          </div>
          <div className="flex flex-col gap-2 md:w-1/2 md:mt-8">
            <div className="relative rounded-xl border-2 border-gray-300 h-48 w-full overflow-hidden">
              <Image src="/Rectangle 1040.png" alt="Driver License" fill className="object-cover" />
            </div>
            <p className="font-sans font-medium text-sm text-center">Front Side</p>
          </div>
        </div>
        {/* Section 3 - Additional Documents */}
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex flex-col gap-2 md:w-1/2">
            <div className="relative rounded-xl border-2 border-gray-300 h-48 w-full overflow-hidden">
              <Image src="/Rectangle 1040.png" alt="Proof of Insurance" fill className="object-cover" />
            </div>
            <p className="font-sans font-medium text-sm text-center">Proof of Insurance</p>
          </div>
          <div className="flex flex-col gap-2 md:w-1/2">
            <div className="relative rounded-xl border-2 border-gray-300 h-48 w-full overflow-hidden">
              <Image src="/Rectangle 1040.png" alt="License Plate" fill className="object-cover" />
            </div>
            <p className="font-sans font-medium text-sm text-center">License Plate</p>
          </div>
          <div className="flex flex-col gap-2 md:w-1/2">
            <div className="relative rounded-xl border-2 border-gray-300 h-48 w-full overflow-hidden">
              <Image src="/Rectangle 1040.png" alt="PSV Badge" fill className="object-cover" />
            </div>
            <p className="font-sans font-medium text-sm text-center">PSV Badge</p>
          </div>
        </div>
        {/* Footer Buttons */}
        <div className="flex items-center mt-8 gap-4 justify-center md:justify-end">
          {/* Reject Application navigates to Application Rejection page */}
          <button
            className="text-[#F58735] border border-[#F58735] rounded-xl px-4 py-2 font-sans font-medium text-sm hover:bg-[#F58735] hover:text-white transition-colors"
            onClick={() => router.push(`/${id}/application-rejection`)}
          >
            Reject Application
          </button>
          {/* Approve navigates directly to /driver */}
          <button
            className="text-white bg-[#F58735] font-sans px-6 py-2 rounded-xl font-medium text-sm hover:bg-[#e76e20] transition-colors"
            onClick={() => router.push("/driver")}
          >
            Approve
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApprovalChoicePage;
