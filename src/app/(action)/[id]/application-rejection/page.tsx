"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { toast } from "react-toastify";

interface ApplicationRejectionPageProps {
  params: {
    id: string;
  };
}

const ApplicationRejectionPage = ({
  params,
}: ApplicationRejectionPageProps) => {
  const { id } = params;
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<string>("");

  // Define an active style for selected option:
  const activeBorder = "border-[#F58735]";
  const activeText = "text-[#F58735]";

  //add rejection reason
  async function rejectionReason() {
    const supabase = createClient();

    if (selectedOption !== "") {
      const { error } = await supabase
        .from("application_rejections")
        .upsert(
          { reason: selectedOption, driver_id: id },
          { onConflict: "driver_id" }
        );
      if (error) {
        console.log(error);
        toast.error("An error occured. Please try again.");
      } else {
        toast.success("Rejection reason saved.");
        router.push("/driver");
      }
    } else toast.warning("Select an option.")
  }

  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-[95%] sm:w-[60%] lg:w-[40%] bg-white flex flex-col p-3 rounded-xl shadow-md border border-gray-200">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-gray-300">
          <div className="flex items-center gap-2">
            {/* Back arrow navigates back to Approval Choice */}
            <button
              onClick={() => router.push(`/action/${id}/approval-choice`)}
            >
              <Image
                src="/driver-arrow.svg"
                alt="Back Arrow"
                width={13}
                height={13}
              />
            </button>
            <span className="font-sans font-medium text-[13px] md:text-sm">
              Application Rejection
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
        {/* Rejection Options */}
        <button
          onClick={() => setSelectedOption("Wrong document")}
          className={`p-2 mt-3 rounded-[12px] flex border ${
            selectedOption === "Wrong document"
              ? activeBorder
              : "border-gray-300"
          }`}
        >
          <span
            className={`font-sans text-sm font-medium ${
              selectedOption === "Wrong document" ? activeText : ""
            }`}
          >
            Wrong document
          </span>
        </button>
        <button
          onClick={() => setSelectedOption("Vehicle propulsion")}
          className={`p-2 mt-3 rounded-[12px] flex border ${
            selectedOption === "Vehicle propulsion"
              ? activeBorder
              : "border-gray-300"
          }`}
        >
          <span
            className={`font-sans text-sm font-medium ${
              selectedOption === "Vehicle propulsion" ? activeText : ""
            }`}
          >
            Vehicle propulsion
          </span>
        </button>
        <button
          onClick={() => setSelectedOption("License Plate")}
          className={`p-2 mt-3 rounded-[12px] flex border ${
            selectedOption === "License Plate"
              ? activeBorder
              : "border-gray-300"
          }`}
        >
          <span
            className={`font-sans text-sm font-medium ${
              selectedOption === "License Plate" ? activeText : ""
            }`}
          >
            License Plate
          </span>
        </button>
        <button
          onClick={() => setSelectedOption("Brand")}
          className={`p-2 mt-3 rounded-[12px] flex border ${
            selectedOption === "Brand" ? activeBorder : "border-gray-300"
          }`}
        >
          <span
            className={`font-sans text-sm font-medium ${
              selectedOption === "Brand" ? activeText : ""
            }`}
          >
            Brand
          </span>
        </button>
        {/* Footer Buttons */}
        <div className="flex items-center mt-10 gap-2 justify-center md:justify-end">
          {/* Back to Review navigates back to Approval Choice */}
          <button
            className="text-[#F58735] border border-[#F58735] px-4 py-2 font-sans font-medium rounded-[11px] text-sm"
            onClick={() => router.push(`/${id}/approval-choice`)}
          >
            Back to Review
          </button>
          {/* Confirm navigates to /driver */}
          <button
            className="text-white bg-[#F58735] font-sans px-6 py-2 rounded-[11px] font-medium text-sm"
            onClick={rejectionReason}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationRejectionPage;
