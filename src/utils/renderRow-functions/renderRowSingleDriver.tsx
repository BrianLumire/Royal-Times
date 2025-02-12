import React from "react";
import Image from "next/image";

interface Driver {
  id: number;
  [key: string]: any; // Allow any additional properties
}

export const renderRowSingleDriver = (
  item: Driver,
  selectedButton: string
): React.ReactNode => {
  switch (selectedButton) {
    case "Rides":
      return (
        <tr key={item.id} className="border-b py-3 hover:bg-[#FFF8F5]">
          <td className="font-sans text-sm py-5 pl-2 font-medium text-[#1E1E1E]">{item.route}</td>
          <td className="font-sans text-sm font-medium pl-2  text-[#1E1E1E]">{item.tripCost}</td>
          <td className="font-sans text-sm font-medium text-[#1E1E1E]">{item.date}</td>
          <td className="font-sans text-sm font-medium text-[#1E1E1E]">
            <div className="flex items-center gap-2">
              <Image src="/rating.svg" alt="Rating" width={18} height={18} />
              {item.rating}
            </div>
          </td>
          <td className="font-sans text-sm font-medium pl-2  text-[#1E1E1E]">{item.paymentMethod}</td>
          <td className="font-sans text-sm font-medium text-[#1E1E1E]">
            <div
              className={`px-3 py-[6px] w flex text-center mr-3 font-medium items-center md:w-[60%] justify-center rounded-2xl ${
                item.status === "Completed"
                  ? "bg-green-100 text-green-800"
                  : item.status === "Ongoing"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {item.status}
            </div>
          </td>
        </tr>
      );

    case "Deliveries":
      return (
        <tr key={item.id} className="border-b py-3 hover:bg-[#FFF8F5]">
          <td className="font-sans  py-5 text-sm pl-2 font-medium text-[#1E1E1E]">{item.route}</td>
          <td className="font-sans text-sm pl-2 font-medium text-[#1E1E1E]">{item.deliveryCost}</td>
          <td className="font-sans text-sm font-medium text-[#1E1E1E]">{item.date}</td>
          <td className="font-sans text-sm font-medium text-[#1E1E1E]">
            <div className="flex items-center gap-2">
              <Image src="/rating.svg" alt="Rating" width={18} height={18} />
              {item.rating}
            </div>
          </td>
          <td className="font-sans text-sm pl-2 font-medium text-[#1E1E1E]">{item.paymentMethod}</td>
          <td className="font-sans text-sm font-medium text-[#1E1E1E]">
            <div
              className={`px-3 py-[6px] w flex text-center mr-3 font-medium items-center md:w-[60%] justify-center rounded-2xl ${
                item.status === "Completed"
                  ? "bg-green-100 text-green-800"
                  : item.status === "Ongoing"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {item.status}
            </div>
          </td>
        </tr>
      );

    case "Disputes":
      return (
        <tr key={item.id} className="border-b py-3 hover:bg-[#FFF8F5]">
          <td className="flex items-center  gap-3 font-medium cursor-pointer ml-2 py-3 whitespace-nowrap sm:whitespace-normal">
            <Image
              src={item.customer.photo}
              alt={`${item.customer.name}'s photo`}
              height={40}
              width={40}
              className="object-cover w-10 h-10 rounded-full"
            />
            <span className="font-sans text-sm font-medium text-[#1E1E1E]">
              {item.customer.name}
            </span>
          </td>
          <td className="font-sans text-sm pl-2 font-medium text-[#1E1E1E]">{item.tripCost}</td>
          <td className="font-sans text-sm pl-2 font-medium text-[#1E1E1E]">{item.tripType}</td>
          <td className="font-sans text-sm pl-2 font-medium text-[#1E1E1E]">{item.route}</td>
          <td className="font-sans text-sm font-medium text-[#1E1E1E]">{item.date}</td>
          <td className="font-sans text-sm  pl-2 font-medium text-[#1E1E1E]">{item.comment}</td>
        </tr>
      );

    case "Reviews":
      return (
        <tr key={item.id} className="border-b py-3 hover:bg-[#FFF8F5]">
          <td className="flex items-center gap-3 font-medium cursor-pointer ml-2 py-3 whitespace-nowrap sm:whitespace-normal">
            <Image
              src={item.customer.photo}
              alt={`${item.customer.name}'s photo`}
              height={40}
              width={40}
              className="object-cover w-10 h-10 rounded-full"
            />
            <span className="font-sans text-sm font-medium text-[#1E1E1E]">
              {item.customer.name}
            </span>
          </td>
          <td className="font-sans text-sm pl-2 font-medium text-[#1E1E1E]">{item.tripCost}</td>
          <td className="font-sans text-sm pl-2 font-medium text-[#1E1E1E]">{item.date}</td>
          <td className="font-sans text-sm font-medium text-[#1E1E1E]">
            <div className="flex items-center gap-2">
              <Image src="/rating.svg" alt="Rating" width={18} height={18} />
              {item.rating}
            </div>
          </td>
          <td className="font-sans text-sm pl-2 font-medium text-[#1E1E1E]">{item.tip}</td>
          <td className="font-sans text-sm pl-2 font-medium text-[#1E1E1E]">{item.comment}</td>
        </tr>
      );

    default:
      return null;
  }
};