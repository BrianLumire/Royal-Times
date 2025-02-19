"use client";

import React, { useState } from "react";
import Table from "@/components/reusable-tables/SingleCustomerTable";
import { renderRowSingleCustomer } from "@/utils/renderRow-functions/renderRowSingleCustomer";
import {
  singleCustomerRidesData,
  singleCustomerRidesColumns,
  singleCustomerDeliveriesData,
  singleCustomerDeliveriesColumns,
  singleCustomerTransactionsData,
  singleCustomerTransactionsColumns,
  singleCustomerReviewsData,
  singleCustomerReviewsColumns,
} from "@/mockdata/data";

const SingleCustomerPage = () => {
  const [selectedButton, setSelectedButton] = useState("Rides");
  const [loading, setLoading] = useState(false);

  const buttons = ["Rides", "Deliveries", "Transactions", "Reviews"];

  const getTableData = () => {
    switch (selectedButton) {
      case "Rides":
        return { data: singleCustomerRidesData, columns: singleCustomerRidesColumns };
      case "Deliveries":
        return { data: singleCustomerDeliveriesData, columns: singleCustomerDeliveriesColumns };
      case "Disputes":
        return { data: singleCustomerTransactionsData, columns: singleCustomerTransactionsColumns };
      case "Reviews":
        return { data: singleCustomerReviewsData, columns: singleCustomerReviewsColumns };
      default:
        return { data: [], columns: [] };
    }
  };

  const { data, columns } = getTableData();

  const handleButtonClick = (button: string) => {
    setLoading(true);
    setSelectedButton(button);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  };

  return (
    <div className="mx-2">
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

      <div className="mb-5">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#F58735]"></div>
          </div>
        ) : (
          <Table
            columns={columns}
            data={data}
            renderRow={(item) => renderRowSingleCustomer(item, selectedButton)}
            title={selectedButton}
          />
        )}
      </div>

      
    </div>
  );
};

export default SingleCustomerPage;
