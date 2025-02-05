"use client";

import React from "react";
import TableControlsRides from "../tablecontrols/TableControlsRides"; // Import TableControlsRides
import { FilterCriteria } from "@/utils/filterData"; // Import the type
interface Column {
  header: string;
  accessor: string;
}

interface Ride {
  id: number;
  photo: string;
  driver: string;
  customer: string;
  paymentmethod: string;
  tripcost: number; // Changed to number
  ratingphoto?: string;
  rating?: string;
  route: string;
  datecompleted?: string;
  date?: string;
  reason?: string;
  noofstops?: string;
  pickuptime?: string;
}

interface RideTableProps {
  columns: Column[];
  data: Ride[];
  renderRowRides: (item: Ride) => React.ReactNode;
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onFilterClick: (filter: FilterCriteria) => void; // Use FilterCriteria here
  onSortClick: (column: string) => void;
  selectedButton: string;
  resetFilters: () => void;
  isAnyFilterApplied: boolean;
}

export const RidesTable: React.FC<RideTableProps> = ({
  columns,
  data,
  renderRowRides,
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
          {selectedButton}
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
        <TableControlsRides
          searchTerm={searchTerm}
          onSearchChange={onSearchChange}
          onFilterClick={onFilterClick}
          onSortClick={onSortClick}
          selectedButton={selectedButton}
        />
      </div>

      

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[920px]  ">
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
              data.map((item) => renderRowRides(item)) // Use the renderRow function passed as a prop
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
