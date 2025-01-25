"use client";
import MainCard from "@/components/MainCard";
import Image from "next/image";
import React, { useState } from "react";

const DriverPage = () => {
  // State to track the selected button
  const [selectedButton, setSelectedButton] = useState("Online");

  // List of buttons
  const buttons = ["Online", "Offline", "Un-approved", "Inactive", "Deleted", "Blocked"];

  return (
    <div className="mx-2">
      {/* Top section with Cards */}
      <div className="flex flex-col md:flex-row gap-4 md:justify-between mb-6">
        {/* Card 1: Driver Earnings */}
        <MainCard title="Driver Earnings/Month" value="Ksh 200,000" imageSrc="/earnings.svg" imageBgColor="#E5E4FF" />

        {/* Card 2: Total Rides */}
        <MainCard title="Total Rides" value="200" imageSrc="/total-rides.svg" imageBgColor="#FFF3D6" />

        {/* Card 3: Active Drivers */}
        <MainCard title="Served Customers" value="1000" imageSrc="/served-customers.svg" imageBgColor="#D9F7E8" />

        {/* Card 4: Customer Satisfaction */}
        <MainCard title="Total drivers" value="406" imageSrc="/total-drivers.svg" imageBgColor="#FEF9C3" />
      </div>

      {/* Bottom section */}
      <div className="">
        {/* First div */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          {/* Scrollable buttons container */}
          <div className="bg-[#F5F5F5] flex gap-3 lg:gap-6 items-center px-3 lg:px-5 py-2  rounded-[10px] overflow-x-auto w-full md:w-auto">
            {buttons.map((button) => (
              <button
                key={button}
                onClick={() => setSelectedButton(button)} // Update selected button
                className={`text-xs md:text-sm font-sans font-medium rounded-[10px] px-3 py-2 whitespace-nowrap ${
                  selectedButton === button
                    ? "bg-white text-[#F58735]" // Selected button styles
                    : "text-gray-600" // Default button styles
                }`}
              >
                {button}
              </button>
            ))}
          </div>

          {/* Add Driver button */}
          <button className="flex items-center px-4 py-2 border-[#F58735] border-2 rounded-[10px] gap-3">
            <Image src="/plus icon.svg" alt="" width={11} height={11} />
            <span className="font-san text-[#F58735] text-sm font-medium">Add Driver</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DriverPage;