// components/DriverTable.tsx
"use client";

import React from "react";
import Image from "next/image";
import TableControls from "@/components/TableControls"; // Import TableControls

interface Column {
  header: string;
  accessor: string;
}

interface DriversTableProps {
  columns: Column[];
  data: any[];
  renderRow: (item: any) => React.ReactNode;
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onFilterClick: (filter: any) => void;
  onSortClick: (column: string) => void;
  selectedButton: string;
}

const DriversTable: React.FC<DriversTableProps> = ({
  columns,
  data,
  renderRow,
  searchTerm,
  onSearchChange,
  onFilterClick,
  onSortClick,
  selectedButton,
}) => {
  return (
    <div className="rounded-lg bg-white dark:bg-[#1E1E1E] shadow-lg">
      {/* Table title and search input */}
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between bg-[#F5F5F5] dark:bg-[#2A2A2A] rounded-[10px] px-2 py-3 mb-4">
        {/* Dynamic Table Title */}
        <p className="pl-4 font-sans font-semibold text-sm md:text-base text-black dark:text-white">
          {selectedButton} Drivers
        </p>

        {/* Use TableControls component */}
        <TableControls
          searchTerm={searchTerm}
          onSearchChange={onSearchChange}
          onFilterClick={onFilterClick}
          onSortClick={onSortClick}
          selectedButton={selectedButton}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px]">
          {/* Table Header */}
          <thead className="bg-[#F5F5F5] dark:bg-[#2A2A2A]">
            <tr className="py-4">
              {columns.map((col) => (
                <th
                  key={col.accessor}
                  className="px-1 py-3 text-left font-sans text-sm font-medium text-black "
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {data.length > 0 ? (
              data.map((item) => renderRow(item))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-4 py-6 text-center text-red-400 dark:text-red-4000"
                >
                  No results found !
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DriversTable;