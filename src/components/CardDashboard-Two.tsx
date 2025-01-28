import Image from "next/image";
import React from "react";

// Define props interface
interface CardDashboard2Props {
  iconSrc: string; // e.g., "/cumulative.svg"
  bgColor: string; // e.g., "#E5E4FF"
  title: string; // e.g., "Cumulative Drivers Revenue"
  value: string; // e.g., "5,656"
}

const CardDashboard2: React.FC<CardDashboard2Props> = ({
  iconSrc,
  bgColor,
  title,
  value,
}) => {
  return (
    <div className="flex items-center gap-4 shadow-lg rounded-xl p-4 h-full">
      {/* Icon section */}
      <div className="flex items-center">
        <div
          className="p-4 rounded-full flex items-center justify-center"
          style={{ backgroundColor: bgColor }} // Dynamic background color
        >
          <Image src={iconSrc} alt={title} width={25} height={25} />
        </div>
      </div>

      {/* Text section */}
      <div className="flex flex-col gap-3">
        <p className="text-sm font-sans font-medium">{title}</p>
        <span className="font-bold font-sans text-xl">{value}</span>
      </div>
    </div>
  );
};

export default CardDashboard2;
