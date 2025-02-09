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
        ) : (
          // Display table when not loading
          <Table
            columns={columns}
            data={data}
            renderRow={(item) => renderRowSingleDriver(item, selectedButton)}
            title={selectedButton} // Pass the selectedButton as the title
          />
        )}
      </div>

      {/* Pagination */}
      <Pagination />

      {/* Uploaded Documents Section */}
      <div className="mb-5">
        {/* We'll render the uploaded documents here */}
      </div>
    </div>
  );
};

export default SingleDriverPage;