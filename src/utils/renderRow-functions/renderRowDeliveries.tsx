// utils/renderRow.tsx
import Image from "next/image";
import React from "react";

interface Delivery {
  id: number | string;
  photo: string;
  driver: string;
  customer?: string;
  recepient?: string;
  deliverycost?: number | string;
  route?: string;
  distance?: number | string;
  date?: string;
  paymentmethod?: string;
  ratingphoto?: string; // Make this optional
  rating?: number | string;
  sender?: string; // used in "Completed Deliveries"
  reason?: string;
}
export const renderRowDeliveries = (item: Delivery, selectedButton: string) => {
  switch (selectedButton) {
    case "Live Deliveries":
      return (
        <tr
          key={item.id}
          className="border-b border-gray-300 py-3 hover:bg-[#FFF8F5]"
        >
          <td className="flex items-center gap-3 font-medium cursor-pointer ml-2 py-3 whitespace-nowrap sm:whitespace-normal">
            <Image
              src={item.photo}
              alt={`${item.driver}'s photo`}
              height={40}
              width={40}
              className="object-cover w-10 h-10 rounded-full"
            />
            <span className="font-sans text-sm font-medium text-[#1E1E1E]">
              {item.driver}
            </span>
          </td>
          <td className="font-sans text pl-2 text-sm font-medium whitespace-nowrap sm:whitespace-normal text-[#1E1E1E]">
            {item.customer ?? "N/A"}
          </td>
          <td className="font-sans pl-2 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
            {item.recepient ?? "N/A"}
          </td>
          <td className="font-sans pl-2 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
            {item.deliverycost ?? "N/A"}
          </td>
          <td className="font-sans pl-2 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
            {item.route ?? "N/A"}
          </td>
          <td className="font-sans pl-2 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
            {item.distance ?? "N/A"}
          </td>
        </tr>
      );

    case "Completed Deliveries":
      return (
        <tr
          key={item.id}
          className="border-b border-gray-300 py-3 hover:bg-[#FFF8F5]"
        >
          <td className="flex items-center gap-3 font-medium cursor-pointer ml-2 py-3 whitespace-nowrap sm:whitespace-normal">
            <Image
              src={item.photo}
              alt={`${item.driver}'s photo`}
              height={40}
              width={40}
              className="object-cover w-10 h-10 rounded-full"
            />
            <span className="font-sans text-sm font-medium text-[#1E1E1E]">
              {item.driver}
            </span>
          </td>
          <td className="font-sans pl-1 text-sm font-medium whitespace-nowrap sm:whitespace-normal text-[#1E1E1E]">
            {item.sender ?? "N/A"}
          </td>
          <td className="font-sans pl-1 text-sm font-medium whitespace-nowrap sm:whitespace-normal text-[#1E1E1E]">
            {item.recepient ?? "N/A"}
          </td>
          <td className="font-sans pl-2 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
            {item.deliverycost ?? "N/A"}
          </td>
          <td className="font-sans pl-2 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
            {item.paymentmethod ?? "N/A"}
          </td>
          <td className="whitespace-nowrap text-sm font-sans font-medium sm:whitespace-normal">
            <div className="flex items-center gap-2 text-[#1E1E1E] font-sans">
            <Image
  src={item.ratingphoto || "/default-rating.svg"} // Fallback value
  alt="Rating icon"
  height={18}
  width={18}
/>
              {item.rating ?? "N/A"}
            </div>
          </td>
          <td className="font-sans pl-2 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
            {item.route ?? "N/A"}
          </td>
          <td className="font-sans pl-2 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
            {item.distance ?? "N/A"}
          </td>
          <td className="font-sans pl-2 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
            {item.date ?? "N/A"}
          </td>
        </tr>
      );

    case "Cancelled Deliveries":
      return (
        <tr
          key={item.id}
          className="border-b border-gray-300 py-3 hover:bg-[#FFF8F5]"
        >
          <td className="flex items-center gap-3 font-medium cursor-pointer ml-2 py-3 whitespace-nowrap sm:whitespace-normal">
            <Image
              src={item.photo}
              alt={`${item.driver}'s photo`}
              height={40}
              width={40}
              className="object-cover w-10 h-10 rounded-full"
            />
            <span className="font-sans text-sm font-medium text-[#1E1E1E]">
              {item.driver}
            </span>
          </td>
          <td className="font-sans pl-2 text-sm font-medium whitespace-nowrap sm:whitespace-normal text-[#1E1E1E]">
            {item.customer ?? "N/A"}
          </td>
          <td className="font-sans pl-2 text-sm font-medium whitespace-nowrap sm:whitespace-normal text-[#1E1E1E]">
            {item.paymentmethod ?? "N/A"}
          </td>
          <td className="font-sans pl-2 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
            {item.route ?? "N/A"}
          </td>
          <td className="font-sans pl-2 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
            {item.date ?? "N/A"}
          </td>
          <td className="font-sans pl-2 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
            {item.reason ?? "N/A"}
          </td>
        </tr>
      );

    default:
      return null;
  }
};