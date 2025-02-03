"use client";

import React from "react";
import TableControlsCustomer from "./TableControlsCustomer"; // Import TableControlsCustomer
import { FilterCriteria } from "@/utils/filterData"; // Import the type
interface Column {
  header: string;
  accessor: string;
}

// Updated Customer interface
interface Customer {
  id: number;
  name: string;
  completedrides: number;
  photo: string;
  rating: string;
  ratingphoto: string;
  completeddeliveries?: number; // Optional
  inaride?: string; // Optional
  reason?: string; // Optional
  lastseen?: string; // Optional
  date?: string; // Optional
}


interface CustomerTableProps {
  columns: Column[];
  data: Customer[]; // Use the updated Customer interface
  renderRowCustomer: (item: Customer) => React.ReactNode;
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onFilterClick: (filter: FilterCriteria) => void; // Use FilterCriteria here
  onSortClick: (column: string) => void;
  selectedButton: string;
  resetFilters: () => void;
  isAnyFilterApplied: boolean;
}

export const CustomerTable: React.FC<CustomerTableProps> = ({
  columns,
  data,
  renderRowCustomer,
  searchTerm,
  onSearchChange,
  onFilterClick,
  onSortClick,
  selectedButton,
  resetFilters,
  isAnyFilterApplied,
}) => {
  return (
    <div className="rounded-lg bg-white dark:bg-[#1E1E1E] shadow-lg">
      {/* Table title and search input */}
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between bg-[#F5F5F5] dark:bg-[#2A2A2A] rounded-[10px] px-2 py-3 mb-4">
        <p className="pl-4 font-sans font-semibold text-sm md:text-base text-black dark:text-white">
          {selectedButton} Customers
        </p>
        {isAnyFilterApplied && (
          <button
            onClick={resetFilters}
            className="px-4 py-1 text-sm bg-[#F58735] text-white rounded-[10px]"
          >
            Clear filters
          </button>
        )}
        <TableControlsCustomer
          searchTerm={searchTerm}
          onSearchChange={onSearchChange}
          onFilterClick={onFilterClick}
          onSortClick={onSortClick}
          selectedButton={selectedButton}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[730px] md:min-w-[400px]">
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
          <tbody>
            {data.length > 0 ? (
              data.map((item) => renderRowCustomer(item))
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