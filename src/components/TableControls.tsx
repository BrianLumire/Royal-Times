// components/TableControls.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface TableControlsProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onFilterClick: (filter: any) => void;
  onSortClick: (column: string) => void;
  selectedButton: string;
}

const TableControls: React.FC<TableControlsProps> = ({
  searchTerm,
  onSearchChange,
  onFilterClick,
  onSortClick,
  selectedButton,
}) => {
  const [isFilterDropdownOpen, setFilterDropdownOpen] = useState(false);
  const [isSortDropdownOpen, setSortDropdownOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);

  // Define filterable tables and their filter options
  const filterableTables: Record<string, string[]> = {
    Occupied: ["Deliveries", "Rides"],
    Free: ["Deliveries", "Rides"],
    "Un-approved": ["Electrical", "Fuel"],
    Inactive: ["Due commission", "At rest"],
    Blocked: ["suspended", "declined application"],
  };

  // Define sortable columns for each table
  const sortableColumns: Record<string, string[]> = {
    Occupied: ["name", "completed rides", "rating"],
    Free: ["name", "completed rides", "rating"],
    Offline: ["name", "completed rides", "rating"],
    "Un-approved": ["name", "age"],
    Inactive: ["name", "completed rides", "rating"],
    Deleted: ["completed rides", "rating"],
    Blocked: ["completed rides", "rating"],
  };

  // Check if the current table is filterable
  const isFilterable = Object.keys(filterableTables).includes(selectedButton);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setFilterDropdownOpen(false);
      }
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setSortDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex items-center gap-2">
      {/* Search input */}
      <div className="flex items-center bg-[#FFFFFF] border border-gray-300 rounded-[10px] px-3 py-2 justify-between">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="outline-none text-xs md:text-sm font-sans bg-transparent text-black placeholder:text-gray-500 w-full"
        />
        <Image src="/search-icon.svg" alt="Search" width={10} height={10} />
      </div>

      {/* Filter icon and dropdown */}
      {isFilterable && (
        <div className="relative" ref={filterRef}>
          <button
            onClick={() => setFilterDropdownOpen(!isFilterDropdownOpen)}
            className="p-3 rounded-[10px] bg-[#FFFFFF] border border-gray-300"
          >
            <Image src="/filter-icon.svg" alt="Filter" width={12} height={12} />
          </button>
          {isFilterDropdownOpen && (
            <div className="absolute bg-white border border-gray-300 rounded-md mt-2 py-2 w-36 shadow-lg z-10">
              {filterableTables[selectedButton].map((option) => (
                <div
                  key={option}
                  onClick={() => {
                    onFilterClick({ status: option }); // Pass the selected filter
                    setFilterDropdownOpen(false); // Close the dropdown
                  }}
                  className="px-4 py-2 text-[#313131] hover:bg-[#d6efe3] cursor-pointer text-sm"
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Sort icon and dropdown */}
      <div className="relative" ref={sortRef}>
        <button
          onClick={() => setSortDropdownOpen(!isSortDropdownOpen)}
          className="p-[12px] rounded-[10px] bg-[#FFFFFF] border border-gray-300"
        >
          <Image src="/sort-icon.svg" alt="Sort" width={10} height={10} />
        </button>
        {isSortDropdownOpen && (
          <div className="absolute bg-white border border-gray-300 rounded-md mt-2 py-2 w-36 shadow-lg z-10">
            {sortableColumns[selectedButton].map((column) => (
              <div
                key={column}
                onClick={() => {
                  onSortClick(column); // Pass the selected column
                  setSortDropdownOpen(false); // Close the dropdown
                }}
                className="px-4 py-2 text-[#313131] hover:bg-[#d6efe3] cursor-pointer text-sm"
              >
                {column}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TableControls;