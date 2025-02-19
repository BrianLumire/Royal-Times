"use client";

import MainCard from "@/components/MainCard";
import { DeliveriesTable } from "@/components/reusable-tables/DeliveriesTable"; 
import { renderRowDeliveries } from "@/utils/renderRow-functions/renderRowDeliveries";
import { filterData, FilterCriteria } from "@/utils/filterData";
import { sortData } from "@/utils/sortData";
import { useState } from "react";
import {
  liveDeliveries,
  completedDeliveries,
  cancelledDeliveries,
  liveDeliveriesColumns,
  completedDeliveriesColumns,
  cancelledDeliveriesColumns,
  
} from "@/mockdata/data";


const DeliveriesPage = () => {
  const [selectedButton, setSelectedButton] = useState("Live Deliveries");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [filters, setFilters] = useState<FilterCriteria>({});
  const [loading, setLoading] = useState(false);

  const buttons = ["Live Deliveries", "Completed Deliveries", "Cancelled Deliveries"];

  const getTableData = () => {
    switch (selectedButton) {
      case "Live Deliveries":
        return { data: liveDeliveries, columns: liveDeliveriesColumns };
      case "Completed Deliveries":
        return { data: completedDeliveries, columns: completedDeliveriesColumns };
      case "Cancelled Deliveries":
        return { data: cancelledDeliveries, columns: cancelledDeliveriesColumns };
      default:
        return { data: [], columns: [] };
    }
  };

  const { data, columns } = getTableData();

  // Filter and sort data
  const filteredData = filterData<typeof data[number]>(data, searchTerm, filters);
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

   // Use FilterCriteria here so that the type matches the utility function
   const handleFilterClick = (filter: FilterCriteria) => {
    setFilters(filter);
  };

  // Ensure that isAnyFilterApplied is strictly a boolean
  const isAnyFilterApplied = Boolean(searchTerm || sortColumn || Object.keys(filters).length > 0);

  return (
           <div className="mx-2">
           {/* Top section with Cards */}
       <div className="flex flex-col md:flex-row gap-4 md:justify-between mb-6">
       {/* Card 1: Total Drivers */}
       <MainCard title="Total Parcel Deliveries" value="10,000" imageSrc="/total-trips.svg" imageBgColor="#E5E4FF" />       
       {/* Card 2: Total Driver Earnings */}
       <MainCard title="Live Parcel Deliveries" value="200" imageSrc="/live-parcel2.svg" imageBgColor="#FFF3D6" />       
       {/* Card 3: Total Deliveries */}
       <MainCard title="Completed Deliveries " value="100,000" imageSrc="/third-icon.svg" imageBgColor="#D9F7E8" />       
       {/* Card 4: Served Customers */}
       <MainCard title="Total Cancelled Deliveries" value="1,500" imageSrc="/total-cancelled.svg" imageBgColor="#FFDED1" />
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
        </div>

        {/* Loading State or DeliveriesTable Component */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#F58735]"></div>
          </div>
        ) : (
          <DeliveriesTable
            key={selectedButton}
            columns={columns}
            data={sortedData}
            renderRowDeliveries={(item) => renderRowDeliveries(item, selectedButton)}
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
            isAnyFilterApplied={isAnyFilterApplied} // Pass the boolean value
          />
        )}
      </div>

     
    </div>
  );
};

export default DeliveriesPage;
