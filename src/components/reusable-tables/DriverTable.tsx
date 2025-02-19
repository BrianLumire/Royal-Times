"use client";

import React from "react";
import TableControlsDriver from "../tablecontrols/TableControlsDriver"; // Import TableControlsDriver
import { FilterCriteria } from "@/utils/filterData"; // Import the type
interface Column {
  header: string;
  accessor: string;
}

interface Driver {
  id: string;
  photo: string;
  name: string;
  completedrides?: number; // Optional
  ratingphoto?: string; // Optional
  rating?: number; // Optional
  commissiondue?: number; // Optional
  pendingpayout?: string; // Optional
  vehicle?: string; // Optional
  availablefor?: string[];
  currentorder?: string[];
  lastseen?: string;
  vehicleclass?: string;
  propulsion?: string;
  age?: number;
  location?: string;
  date?: string;
  reason?: string;
  Status?: string;
  action?: string;
}



interface DriversTableProps {
  columns: Column[];
  data: Driver[];
  renderRowDriver: (item: Driver) => React.ReactNode;
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onFilterClick: (filter: FilterCriteria) => void; // Use FilterCriteria here
  onSortClick: (column: string) => void;
  selectedButton: string;
  resetFilters: () => void;
  isAnyFilterApplied: boolean;
}

export const DriversTable: React.FC<DriversTableProps> = ({
  columns,
  data,
  renderRowDriver,
  searchTerm,
  onSearchChange,
  onFilterClick,
  onSortClick,
  selectedButton,
  resetFilters,
  isAnyFilterApplied
}) => {
  return (
    <div className="rounded-lg bg-white dark:bg-[#1E1E1E] shadow-lg">
      {/* Table title and search input */}
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between bg-[#F5F5F5] dark:bg-[#2A2A2A] rounded-[10px] px-2 py-3 mb-4">
        {/* Dynamic Table Title */}
        <p className="pl-4 font-sans font-semibold text-sm md:text-base text-black dark:text-white">
          {selectedButton} Drivers
        </p>
        {/* Conditionally render reset button */}
      {isAnyFilterApplied && (
        <button
          onClick={resetFilters}
          className=" px-4 py-1 text-sm bg-[#F58735] text-white rounded-[10px] "
        >
          Clear filters
        </button>
      )}
        <TableControlsDriver
          searchTerm={searchTerm}
          onSearchChange={onSearchChange}
          onFilterClick={onFilterClick}
          onSortClick={onSortClick}
          selectedButton={selectedButton}
        />
      </div>

      

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[950px] ">
          {/* Table Header */}
          <thead className="bg-[#F5F5F5] dark:bg-[#2A2A2A]">
            <tr className="py-4">
              {columns.map((col) => (
                <th
                  key={col.accessor}
                  className="px-1 py-3 text-left font-sans text-sm font-medium text-black"
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {data.length > 0 ? (
              data.map((item) => renderRowDriver(item)) // Use the renderRow function passed as a prop
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-4 py-6 text-center text-red-400 dark:text-red-4000"
                >
                  No results found!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
