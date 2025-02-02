// utils/renderRow.tsx
import Image from "next/image";
import React from "react";

export const renderRowCustomer = (item: any, selectedButton: string) => {
  switch (selectedButton) {

    case "Online":
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
              {item.name}
            </span>
          </td>
          <td className="font-sans text pl-3 text-sm font-medium whitespace-nowrap sm:whitespace-normal text-[#1E1E1E]">
            {item.completedrides}
          </td>
          <td className="font-sans pl-3 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
            {item.completeddeliveries}
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
          <td className="font-sans  pl-3 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
            {item.inaride}
          </td>
        </tr>
      );

      case "Inactive":
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
                {item.name}
              </span>
            </td>
            <td className="font-sans pl-3 text-sm font-medium whitespace-nowrap sm:whitespace-normal text-[#1E1E1E]">
              {item.completedrides}
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
            <td className="font-sans pl-3 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
              {item.lastseen}
            </td>
            <td className="font-sans  pl-3 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
              {item.reason}
            </td>
          </tr>
        );
      

    case "Deleted":
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
              {item.name}
            </span>
          </td>
          <td className="font-sans pl-3 text-sm font-medium whitespace-nowrap sm:whitespace-normal text-[#1E1E1E]">
            {item.completedrides}
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
          <td className="font-sans pl-3 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
            {item.date}
          </td>
          <td className="font-sans pl-3 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
            {item.reason}
          </td>
        </tr>
      );

    case "Blocked":
      return (
        <tr
          key={item.id}
          className="border-b border-gray-300 py-3 hover:bg-[#FFF8F5]"
        >
          <td className="flex  items-center gap-3 font-medium cursor-pointer ml-2 py-3 whitespace-nowrap sm:whitespace-normal">
            <Image
              src={item.photo}
              alt={`${item.name}'s photo`}
              height={40}
              width={40}
              className="object-cover w-10 h-10 rounded-full"
            />
            <span className="font-sans text-sm font-medium text-[#1E1E1E]">
              {item.name}
            </span>
          </td>
          <td className="font-sans pl-2 text-sm font-medium whitespace-nowrap sm:whitespace-normal text-[#1E1E1E]">
            {item.completedrides}
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
          <td className="font-sans pl-2  text-sm font-medium whitespace-nowrap sm:whitespace-normal text-[#1E1E1E]">
            {item.reason}
          </td>
        </tr>
      );

    default:
      return null;
  }
};
