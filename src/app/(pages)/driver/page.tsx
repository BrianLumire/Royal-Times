// pages/DriverPage.tsx
"use client";

import MainCard from "@/components/MainCard";
import { DriversTable } from "@/components/reusable-tables/DriverTable";
import { renderRowDriver } from "@/utils/renderRow-functions/renderRowDriver";
import { filterData, FilterCriteria } from "@/utils/filterData";
import { sortData } from "@/utils/sortData";
import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Pagination from "@/components/Pagination";


// Import mockdata for other tabs
import {
  occupiedDrivers,
  freeDrivers,
  offlineDrivers,
  // unapprovedDrivers, <- no longer used for un-approved tab
  inactiveDrivers,
  deletedDrivers,
  blockedDrivers,
  occupiedColumns,
  freeColumns,
  offlineColumns,
  unapprovedColumns, // keep columns if unchanged
  inactiveColumns,
  deletedColumns,
  blockedColumns,
} from "@/mockdata/data";

// Import our new types and transformation helper
import {
  SupabaseDriver,
  UnapprovedDriver,
  transformUnapprovedDriver,
  DriverResponse,
  UnapprovedDriverParams,
  Driver, // <-- Add this import
} from "@/types/DriverTypes";


const DriverPage = () => {
  const [selectedButton, setSelectedButton] = useState("Occupied");
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [filters, setFilters] = useState<FilterCriteria>({});
  const [loading, setLoading] = useState(false);

  // New state for un-approved drivers integration
  const [unapprovedDriversData, setUnapprovedDriversData] = useState<Driver[]>([]);

  const [unapprovedTotalCount, setUnapprovedTotalCount] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(7); // Ensure this is within allowed limits

  const supabase = createClient();

  const buttons = ["Occupied", "Free", "Offline", "Un-approved", "Inactive", "Deleted", "Blocked"];

  // Fetch total drivers and rides as before
  const [totalDrivers, setTotalDrivers] = useState(0);
  const [totalRides, setTotalRides] = useState(0);

  useEffect(() => {
    async function fetchTotalDrivers() {
      const { count, error } = await supabase
        .from("drivers")
        .select("*", { count: "exact", head: true });
      if (error) {
        console.error("Error fetching total drivers:", error);
      } else {
        setTotalDrivers(count || 0);
      }
    }
    fetchTotalDrivers();
  }, [supabase]);

  useEffect(() => {
    async function fetchTotalRides() {
      const { count, error } = await supabase
        .from("rides")
        .select("*", { count: "exact", head: true });
      if (error) {
        console.error("Error fetching total rides:", error);
      } else {
        setTotalRides(count || 0);
      }
    }
    fetchTotalRides();
  }, [supabase]);

  // Fetch un-approved drivers when selectedButton is "Un-approved" or pagination changes
  useEffect(() => {
    if (selectedButton !== "Un-approved") return;
    async function fetchUnapprovedDrivers() {
      setLoading(true);
      
      const { data, error } = (await supabase.rpc("get_unapproved_drivers", {
        page_number: pageNumber,
        page_size: pageSize,
      })) as unknown as { data: DriverResponse; error: any };
      
      
      

      if (error) {
        console.error("Error fetching un-approved drivers:", error);
      } else if (data) {
        const transformed = data.drivers.map(transformUnapprovedDriver);
        setUnapprovedDriversData(transformed);
        setUnapprovedTotalCount(data.total_count);
      }
      setLoading(false);
    }
    fetchUnapprovedDrivers();
  }, [selectedButton, pageNumber, pageSize, supabase]);

  // Update getTableData to conditionally use Supabase data for un-approved drivers
  const getTableData = () => {
    switch (selectedButton) {
      case "Occupied":
        return { data: occupiedDrivers, columns: occupiedColumns };
      case "Free":
        return { data: freeDrivers, columns: freeColumns };
      case "Offline":
        return { data: offlineDrivers, columns: offlineColumns };
      case "Un-approved":
        return { data: unapprovedDriversData, columns: unapprovedColumns };
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

  // Filter and sort data as before
  const filteredData = filterData<typeof data[number]>(data, searchTerm, filters);
  const sortedData = sortData(filteredData, sortColumn, sortOrder);

  const handleButtonClick = (button: string) => {
    setLoading(true);
    setSelectedButton(button);
    // Reset pagination when switching tabs
    setPageNumber(1);
    setTimeout(() => setLoading(false), 300);
  };

  const handleSortClick = (column: string) => {
    const order = sortColumn === column && sortOrder === "desc" ? "asc" : "desc";
    setSortColumn(column);
    setSortOrder(order);
  };

  const handleFilterClick = (filter: FilterCriteria) => {
    setFilters(filter);
  };

  const isAnyFilterApplied = Boolean(searchTerm || sortColumn || Object.keys(filters).length > 0);

  const handleAddDriverClick = () => {
    router.push("/add-driver");
  };

  return (
    <div className="mx-2">
      {/* Top section with Cards */}
      <div className="flex flex-col md:flex-row gap-4 md:justify-between mb-6">
        <MainCard title="Total Drivers" value={totalDrivers.toString()} imageSrc="/total-drivers.svg" imageBgColor="#FEF9C3" />
        <MainCard title="Total Driver Earnings" value="Ksh 200,000" imageSrc="/earnings.svg" imageBgColor="#E5E4FF" />
        <MainCard title="Total Rides" value={totalRides.toString()} imageSrc="/total-rides.svg" imageBgColor="#FFF3D6" />
        <MainCard title="Served Customers" value="1000" imageSrc="/served-customers.svg" imageBgColor="#D9F7E8" />
      </div>

      {/* Bottom section */}
      <div className="mb-5">
        {/* Buttons and Add Driver button */}
        <div className="flex flex-col mb-4 md:flex-row justify-between items-center gap-3">
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

          {/* Add Driver Button */}
          <button
            className="flex items-center px-4 py-2 border-[#F58735] border-2 rounded-[10px] gap-3"
            onClick={handleAddDriverClick}
          >
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
            renderRowDriver={(item) => renderRowDriver(item, selectedButton, router)}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            onFilterClick={handleFilterClick}
            onSortClick={handleSortClick}
            selectedButton={selectedButton}
            resetFilters={() => {
              setSearchTerm("");
              setSortColumn(null);
              setSortOrder("asc");
              setFilters({});
            }}
            isAnyFilterApplied={isAnyFilterApplied}
          />
        )}
      </div>

      {/* Show pagination only for un-approved drivers */}
      {selectedButton === "Un-approved" && (
        <Pagination 
          currentPage={pageNumber}
          totalCount={unapprovedTotalCount}
          pageSize={pageSize}
          onPageChange={(newPage) => setPageNumber(newPage)}
        />
      )}
    </div>
  );
};

export default DriverPage;
