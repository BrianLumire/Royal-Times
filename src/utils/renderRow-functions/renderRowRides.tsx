// utils/renderRowRides.tsx
import Image from "next/image";
import React from "react";

interface Ride {
  id: string;
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

export const renderRowRides = (item: Ride, selectedButton: string) => {
  switch (selectedButton) {
    case "Completed Trips":
      return (
        <tr key={item.id} className="border-b border-gray-300 py-3 hover:bg-[#FFF8F5]">
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
            {item.customer}
          </td>
          <td className="font-sans pl-2 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
            {item.paymentmethod}
          </td>
          <td className="font-sans pl-2 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
            {item.tripcost}
          </td>
          <td className="whitespace-nowrap text-sm font-sans font-medium sm:whitespace-normal">
            <div className="flex items-center gap-2 text-[#1E1E1E] font-sans">
              <Image
                src={item.ratingphoto || "/default-rating.svg"} // Fallback value
                alt="Rating icon"
                height={18}
                width={18}
              />
              {item.rating}
            </div>
          </td>
          <td className="font-sans pl-2 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
            {item.route}
          </td>
          <td className="font-sans pl-2 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
            {item.datecompleted}
          </td>
        </tr>
      );

    case "Cancelled Trips":
      return (
        <tr key={item.id} className="border-b border-gray-300 py-3 hover:bg-[#FFF8F5]">
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
            {item.customer}
          </td>
          <td className="font-sans pl-2 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
            {item.paymentmethod}
          </td>
          <td className="font-sans pl-2 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
            {item.tripcost}
          </td>
          <td className="font-sans pl-2 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
            {item.route}
          </td>
          <td className="font-sans pl-2 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
            {item.date}
          </td>
          <td className="font-sans pl-2 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
            {item.reason}
          </td>
        </tr>
      );

    case "Live Trips":
      return (
        <tr key={item.id} className="border-b border-gray-300 py-3 hover:bg-[#FFF8F5]">
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
            {item.customer}
          </td>
          <td className="font-sans pl-2 text-sm font-medium whitespace-nowrap sm:whitespace-normal text-[#1E1E1E]">
            {item.tripcost}
          </td>
          <td className="font-sans pl-2 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
            {item.noofstops}
          </td>
          <td className="font-sans pl-2 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
            {item.paymentmethod}
          </td>
          <td className="font-sans pl-2 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
            {item.pickuptime}
          </td>
          <td className="font-sans pl-2 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
            {item.route}
          </td>
        </tr>
      );

    default:
      return null;
  }
};