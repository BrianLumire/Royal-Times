// utils/renderRow.tsx
import Image from "next/image";
import React from "react";

export const renderRowDeliveries = (item: any, selectedButton: string) => {
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
              alt={`${item.name}'s photo`}
              height={40}
              width={40}
              className="object-cover w-10 h-10 rounded-full"
            />
            <span className="font-sans text-sm font-medium text-[#1E1E1E]">
              {item.driver}
            </span>
          </td>
          <td className="font-sans text pl-2 text-sm font-medium whitespace-nowrap sm:whitespace-normal text-[#1E1E1E]">
            {item.customer}
          </td>
          <td className="font-sans pl-2 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
            {item.recepient}
          </td>
          <td className="font-sans  pl-2 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
            {item.deliverycost}
          </td>
          <td className="font-sans  pl-2 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
            {item.route}
          </td>
          <td className="font-sans  pl-2 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
            {item.distance}
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
                alt={`${item.name}'s photo`}
                height={40}
                width={40}
                className="object-cover w-10 h-10 rounded-full"
              />
              <span className="font-sans text-sm font-medium text-[#1E1E1E]">
                {item.driver}
              </span>
            </td>
            <td className="font-sans pl-1 text-sm font-medium whitespace-nowrap sm:whitespace-normal text-[#1E1E1E]">
              {item.sender}
            </td>
            <td className="font-sans pl-1 text-sm font-medium whitespace-nowrap sm:whitespace-normal text-[#1E1E1E]">
              {item.recepient}
            </td>
            <td className="font-sans pl-2 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
              {item.deliverycost}
            </td>
            <td className="font-sans  pl-2 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
              {item.paymentmethod}
            </td>
            <td className="whitespace-nowrap text-sm font-sans font-medium sm:whitespace-normal">
                        <div className="flex items-center gap-2 text-[#1E1E1E] font-sans">
                          <Image
                            src={item.ratingphoto}
                            alt="Rating icon"
                            height={18}
                            width={18}
                          />
                          {item.rating}
                        </div>
                      </td>
            <td className="font-sans  pl-2 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
              {item.route}
            </td>
            <td className="font-sans  pl-2 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
              {item.distance}
            </td>
            <td className="font-sans  pl-2 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
              {item.date}
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
            {item.customer}
          </td>
          <td className="font-sans pl-2 text-sm font-medium whitespace-nowrap sm:whitespace-normal text-[#1E1E1E]">
              {item.paymentmethod}
            </td>
            <td className="font-sans pl-2 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
              {item.route}
            </td>
            <td className="font-sans  pl-2 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
              {item.date}
            </td>
            <td className="font-sans  pl-2 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
              {item.reason}
            </td>
            
        </tr>
      );
    default:
      return null;
  }
};
