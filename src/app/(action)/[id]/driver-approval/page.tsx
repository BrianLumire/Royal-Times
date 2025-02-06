"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@supabase-cache-helpers/postgrest-swr";
import { createClient } from "@/utils/supabase/client";
// import { Skeleton } from "@/components/ui/skeleton";

interface DriverApprovalPageProps {
  params: {
    id: string;
  };
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  return date.toLocaleString("en-US", options).replace(",", "");
}

const DriverApprovalPage = ({ params }: DriverApprovalPageProps) => {
  const { id } = params;
  const router = useRouter();

  const supabase = createClient();

  const {
    data,
    isLoading,
    // error: error,
  } = useQuery(
    supabase
      .from("drivers")
      .select(
        `
            applied_on,
            driver_license_number,
            verification_status,
            user_accounts (
              full_name
            ),
            vehicles (
              license_plate,
              psv_number,
              propulsion,
              make,
              vehicle_classes (
                name
              )
            )
          `
      )
      .eq("id", id)
  );

  const driver = data?.[0];

  console.log(data);

  if (isLoading) {
    return <p>Loading...</p>;
  } else
    return (
      <div className="h-screen bg-gray-100 flex items-center justify-center">
        <div className="w-[95%] sm:w-[60%] lg:w-[40%] bg-white flex flex-col p-3 rounded-xl shadow-md border border-gray-200">
          {/* Header */}
          <div className="flex items-center justify-between">
            {/* Back Arrow navigates to /driver */}
            <div className="flex items-center gap-2">
              <button onClick={() => router.push("/driver")}>
                <Image
                  src="/driver-arrow.svg"
                  alt="Back Arrow"
                  width={13}
                  height={13}
                />
              </button>
              <span className="font-sans font-medium text-[13px] md:text-sm">
                Driver Application Approval
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
              <span className="font-sans font-medium text-xs text-[#B68E00]">
                {driver?.verification_status}
              </span>
            </div>
            <div>
              <span className="font-sans font-medium text-xs">
                {driver?.user_accounts?.full_name}
              </span>
            </div>
          </div>
          <div className="p-2 mt-3 rounded-[12px] flex justify-between border border-gray-300">
            <span className="font-sans text-sm font-medium">
              Application made on:
            </span>
            <span className="font-sans text-sm font-normal">
              {formatDate(driver?.applied_on as string)}
            </span>
          </div>
          <div className="p-2 mt-3 rounded-[12px] flex justify-between border border-gray-300">
            <span className="font-sans text-sm font-medium">
              License Plate:
            </span>
            <span className="font-sans text-sm font-normal">
              {driver?.vehicles?.[0]?.license_plate}
            </span>
          </div>
          <div className="p-2 mt-3 rounded-[12px] flex justify-between border border-gray-300">
            <span className="font-sans text-sm font-medium">
              Driver License:
            </span>
            <span className="font-sans text-sm font-normal">
              {driver?.driver_license_number}
            </span>
          </div>
          <div className="p-2 mt-3 rounded-[12px] flex justify-between border border-gray-300">
            <span className="font-sans text-sm font-medium">PSV Number:</span>
            <span className="font-sans text-sm font-normal">
              {driver?.vehicles?.[0]?.psv_number}
            </span>
          </div>
          <div className="p-2 mt-3 rounded-[12px] flex justify-between border border-gray-300">
            <span className="font-sans text-sm font-medium">
              Vehicle Propulsion:
            </span>
            <span className="font-sans text-sm font-normal">
              {driver?.vehicles?.[0]?.propulsion}
            </span>
          </div>
          <div className="p-2 mt-3 rounded-[12px] flex justify-between border border-gray-300">
            <span className="font-sans text-sm font-medium">
              Vehicle Class:
            </span>
            <span className="font-sans text-sm font-normal">
              {driver?.vehicles?.[0]?.vehicle_classes?.name}
            </span>
          </div>
          <div className="p-2 mt-3 mb-2 rounded-[12px] flex justify-between border border-gray-300">
            <span className="font-sans text-sm font-medium">Brand:</span>
            <span className="font-sans text-sm font-normal">
              {driver?.vehicles?.[0]?.make}
            </span>
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
