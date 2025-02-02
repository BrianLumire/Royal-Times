import Image from "next/image";
import React from "react";

// Define props interface
interface DashboardCard1Props {
  mainValue: string; // e.g., "KES 43,635"
  description: string; // e.g., "Cumulative Revenue"
  items: {
    iconSrc: string; // e.g., "/from-rides.svg"
    label: string; // e.g., "From Rides"
    value: string; // e.g., "896"
  }[];
}

const DashboardCard1: React.FC<DashboardCard1Props> = ({
  mainValue,
  description,
  items,
}) => {
  return (
    <div className="flex flex-col shadow-lg border border-gray-100  rounded-xl p-4 h-full">
      {/* Main Value */}
      <div className="flex pt-3 justify-center mb-3">
        <p className="font-sans text-3xl font-bold">{mainValue}</p>
      </div>

      {/* Description */}
      <div className="flex justify-center mb-5">
        <p className="font-sans text-[15px] font-normal">{description}</p>
      </div>

      {/* Dynamic List Items */}
      <div className="flex flex-col gap-3">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex justify-between items-center ${
              index === items.length - 1
                ? "pb-3 bg-[#FAFAFA] py-2 rounded-[10px]"
                : ""
            }`}
          >
            <div className="flex gap-2 items-center">
              <Image src={item.iconSrc} alt={item.label} width={17} height={17} />
              <span className="text-[14px] font-medium font-sans">{item.label}</span>
            </div>
            <span className="text-[14px] font-medium font-sans">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardCard1;
