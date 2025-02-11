"use client";

import React, { useState } from "react";
import Image from "next/image";
import Table from "@/components/reusable-tables/SingleDriverTable";
import Pagination from "@/components/Pagination";
import { renderRowSingleDriver } from "@/utils/renderRow-functions/renderRowSingleDriver";
import {
  ridesData,
  ridesColumns,
  deliveriesData,
  deliveriesColumns,
  disputesData,
  disputesColumns,
  reviewsData,
  reviewsColumns,
  uploadedDocuments,
} from "@/mockdata/data";

const SingleDriverPage = () => {
  const [selectedButton, setSelectedButton] = useState("Rides");
  const [loading, setLoading] = useState(false); // Add loading state

  const buttons = ["Rides", "Deliveries", "Disputes", "Reviews", "Uploaded Documents"];

  // Get the data and columns for the selected table
  const getTableData = () => {
    switch (selectedButton) {
      case "Rides":
        return { data: ridesData, columns: ridesColumns };
      case "Deliveries":
        return { data: deliveriesData, columns: deliveriesColumns };
      case "Disputes":
        return { data: disputesData, columns: disputesColumns };
      case "Reviews":
        return { data: reviewsData, columns: reviewsColumns };
      default:
        return { data: [], columns: [] };
    }
  };

  const { data, columns } = getTableData();

  // Handle button click with loading state
  const handleButtonClick = (button: string) => {
    setLoading(true); // Set loading to true
    setSelectedButton(button);

    // Simulate loading delay (e.g., fetching data)
    setTimeout(() => {
      setLoading(false); // Set loading to false after a delay
    }, 300); // Adjust the delay as needed
  };

  return (
    <div className="mx-2">
      {/* Buttons and Additional Buttons */}
      <div className="flex flex-col mb-4 md:flex-row justify-between items-center gap-3">
        {/* Button Group */}
        <div className="bg-[#F5F5F5] flex gap-3 lg:gap-6 items-center px-3 lg:px-5 py-2 rounded-[10px] overflow-x-auto w-full md:w-auto">
          {buttons.map((button) => (
            <button
              key={button}
              onClick={() => handleButtonClick(button)} // Use handleButtonClick
              className={`text-xs md:text-sm font-sans font-medium rounded-[10px] px-3 hover:bg-[#FFF8F5] py-2 whitespace-nowrap ${
                selectedButton === button ? "bg-white text-[#F58735]" : "text-black"
              }`}
            >
              {button}
            </button>
          ))}
        </div>

        {/* Additional Buttons */}
        <div className="flex gap-2">
          <button className="flex items-center px-4 py-[7px] border-[#F58735] border-2 rounded-[10px] gap-3">
            <span className="font-san text-[#F58735] text-sm font-medium">Reset Password</span>
          </button>
          <button className="flex items-center px-[33px] py-[7px] border-[#F58735] border-2 rounded-[10px] gap-6">
            <Image src="/edit-image.svg" alt="Edit" width={17} height={17} />
            <span className="font-san text-[#F58735] text-sm font-medium">Edit</span>
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="mb-5">
  {loading ? (
    // Display loading spinner
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#F58735]"></div>
    </div>
  ) : selectedButton === "Uploaded Documents" ? (
    // Display uploaded documents section
    <div>
      {/* Uploaded Documents Title */}
      <h2 className="font-sans font-semibold text-sm md:text-base text-black dark:text-white mb-2">Uploaded Documents</h2>

      {/* Existing Uploaded Documents */}
      <div className="flex flex-col md:flex-row gap-4 mb-2">
        {uploadedDocuments.map((doc) => (
          <div key={doc.id} className="flex flex-col p-2 gap-2 rounded-xl border border-gray-300 md:w-1/2 md:mt-4">
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src="/Rectangle 1040.svg" // Replace with the actual image URL from doc.fileUrl if available
                alt={doc.name}
                fill
                className="object-cover"
              />
            </div>
            <p className="font-sans font-medium text-sm text-left">
              {doc.name}
            </p>
          </div>
        ))}
      </div>

      {/* National ID Section */}
      <div className="bg-gray-100 p-4 rounded-xl">
        <h3 className="text-lg font-sans font-medium mb-4">National ID</h3>
        <div className="flex flex-col md:flex-row gap-4 md:w-[70%] ">
          {/* Front Side */}
          <div className="flex flex-col p-2 gap-2 rounded-xl border border-gray-300 w-full">
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src="/Rectangle 1040.svg" // Replace with the actual image URL for the front side
                alt="Front Side"
                fill
                className="object-cover"
              />
            </div>
            <p className="font-sans font-medium text-sm text-left">
              Front Side
            </p>
          </div>

          {/* Back Side */}
          <div className="flex flex-col p-2 gap-2 rounded-xl border border-gray-300 w-full ">
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src="/Rectangle 1040.svg" // Replace with the actual image URL for the back side
                alt="Back Side"
                fill
                className="object-cover"
              />
            </div>
            <p className="font-sans font-medium text-sm text-left">
              Back Side
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
          // Display table when not loading and not in "Uploaded Documents" mode
          <Table
            columns={columns}
            data={data}
            renderRow={(item) => renderRowSingleDriver(item, selectedButton)}
            title={selectedButton} // Pass the selectedButton as the title
          />
        )}
      </div>

      {/* Pagination */}
      {selectedButton !== "Uploaded Documents" && <Pagination />}
    </div>
  );
};

export default SingleDriverPage;