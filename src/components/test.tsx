// app/driver/page.tsx
"use client";

import MainCard from "@/components/MainCard";
import DriversTable from "@/components/DriverTable";
import TableControls from "@/components/TableControls";
import { renderRow } from "@/utils/renderRow";
import { filterData } from "@/utils/filterData";
import { sortData } from "@/utils/sortData";
import { useState } from "react";
import {
  onlineDrivers,
  offlineDrivers,
  unapprovedDrivers,
  inactiveDrivers,
  deletedDrivers,
  blockedDrivers,
  onlineColumns,
  offlineColumns,
  unapprovedColumns,
  inactiveColumns,
  deletedColumns,
  blockedColumns,
} from "@/mockdata/data";
import Image from "next/image";

const DriverPage = () => {
  const [selectedButton, setSelectedButton] = useState("Online");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [filters, setFilters] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const buttons = ["Online", "Offline", "Un-approved", "Inactive", "Deleted", "Blocked"];

    const getTableData = () => {
      switch (selectedButton) {
        case "Online":
          return { data: onlineDrivers, columns: onlineColumns };
        case "Offline":
          return { data: offlineDrivers, columns: offlineColumns };
        case "Un-approved":
          return { data: unapprovedDrivers, columns: unapprovedColumns };
        case "Inactive":
          return { data: inactiveDrivers, columns: inactiveColumns };
        case "Deleted":
          return { data: deletedDrivers, columns: deletedColumns };
        case "Blocked":
          return { data: blockedDrivers, columns: blockedColumns };
        default:
          return { data: [], columns: [] };
      }
    };
  
    const { data, columns } = getTableData();

  // Filter and sort data
  const filteredData = filterData(data, searchTerm, filters);
  const sortedData = sortData(filteredData, sortColumn, sortOrder);

  const handleButtonClick = (button: string) => {
    setLoading(true);
    setSelectedButton(button);
    setTimeout(() => setLoading(false), 300);
  };

  const handleSortClick = (column: string) => {
    const order = sortColumn === column && sortOrder === "desc" ? "asc" : "desc";
    setSortColumn(column);
    setSortOrder(order);
  };

  const handleFilterClick = (filter: any) => {
    setFilters(filter);
  };

  const resetFilters = () => {
    setSearchTerm("");
    setSortColumn(null);
    setSortOrder("asc");
    setFilters({});
  };

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
      <div className="mb-5">
        {/* Buttons and Add Driver button */}
        <div className="flex flex-col mb-4 md:flex-row justify-between items-center gap-3">
          {/* Scrollable buttons container */}
          <div className="bg-[#F5F5F5] flex gap-3 lg:gap-6 items-center px-3 lg:px-5 py-2 rounded-[10px] overflow-x-auto w-full md:w-auto">
            {buttons.map((button) => (
              <button
                key={button}
                onClick={() => handleButtonClick(button)}
                className={`text-xs md:text-sm font-sans font-medium rounded-[10px] px-3 hover:bg-[#FFF8F5] py-2 whitespace-nowrap ${
                  selectedButton === button ? "bg-white text-[#F58735]" : "text-black"
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

        {/* Loading State or DriversTable Component */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#F58735]"></div>
          </div>
        ) : (
          <DriversTable
            key={selectedButton}
            columns={columns}
            data={sortedData}
            renderRow={(item) => renderRow(item, selectedButton)}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            onFilterClick={handleFilterClick}
            onSortClick={handleSortClick}
            selectedButton={selectedButton}
          />
        )}
      </div>
    </div>
  );
};

export default DriverPage;