"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from 'next/navigation';

interface Driver {
  id: string;
  photo: string;
  name: string;
  completedrides?: number; // Optional
  ratingphoto?: string; // Optional
  rating?: number; // Optional
  commissiondue?: number; // Optional
  pendingpayout?: string; // Optional
  vehicle?: string; // Optional
  availablefor?: string[];
  currentorder?: string[];
  lastseen?: string;
  vehicleclass?: string;
  propulsion?: string;
  age?: number;
  location?: string;
  date?: string;
  reason?: string;
  Status?: string;
  action?: string;
}

export const renderRowDriver = (
  item: Driver,
  selectedButton: string,
  router: ReturnType<typeof useRouter> 
) => {
  switch (selectedButton) {

    case "Free":
      return (
        <tr key={item.id} className="border-b py-3 hover:bg-[#FFF8F5]">
          <button
            className="flex items-center gap-3 font-medium cursor-pointer ml-2 py-3 whitespace-nowrap sm:whitespace-normal"
            onClick={() => router.push(`/driver/${item.id}`)}
          >
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
          </button>
          <td className="font-sans text-sm pl-3 font-medium whitespace-nowrap sm:whitespace-normal text-[#1E1E1E]">
            {item.completedrides}
          </td>
          <td className="whitespace-nowrap pl-3 text-sm font-sans font-medium sm:whitespace-normal">
            <div className="flex items-center gap-2 text-[#1E1E1E] font-sans">
             
              {item.rating}
            </div>
          </td>
          <td className="font-sans text-sm font-medium pl-2 whitespace-nowrap sm:whitespace-normal text-[#1E1E1E]">
            {item.commissiondue}
          </td>
          <td className="font-sans text-sm font-medium pl-2 whitespace-nowrap sm:whitespace-normal text-[#1E1E1E]">
            {item.pendingpayout}
          </td>
          <td className="font-sans text-sm font-medium whitespace-nowrap sm:whitespace-normal text-[#1E1E1E]">
            {item.vehicle}
          </td>
          <td className="font-sans text-sm font-medium whitespace-nowrap sm:whitespace-normal">
            <div className="flex gap-2">
              {item.availablefor?.map((service: string, index: number) => (
                <span
                  key={index}
                  className={`px-3 py-[6px] text-center font-medium items-center justify-center text-white rounded-2xl ${
                    service === "Rides" ? "bg-[#FEC53D]" : "bg-[#3D42DF]"
                  }`}
                >
                  {service}
                </span>
              ))}
            </div>
          </td>
        </tr>
      );
    

      case "Occupied":
  return (
    <tr
      key={item.id}
      className="border-b border-gray-300 py-3 hover:bg-[#FFF8F5]"
    >
      <button
        className="flex items-center gap-3 font-medium cursor-pointer ml-2 py-3 whitespace-nowrap sm:whitespace-normal"
        onClick={() => router.push(`/driver/${item.id}`)}
      >
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
      </button>
      <td className="font-sans pl-3 text-sm font-medium whitespace-nowrap sm:whitespace-normal text-[#1E1E1E]">
        {item.completedrides}
      </td>
      <td className="whitespace-nowrap pl-3 text-sm font-sans font-medium sm:whitespace-normal">
        <div className="flex items-center gap-2 text-[#1E1E1E] font-sans">
        
          {item.rating}
        </div>
      </td>
      <td className="font-sans pl-3 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
        {item.commissiondue}
      </td>
      <td className="font-sans pl-3 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
        {item.pendingpayout}
      </td>
      <td className="font-sans text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
        {item.vehicle}
      </td>
      <td className="font-sans text-sm whitespace-nowrap font-medium sm:whitespace-normal">
        <div className="flex gap-2">
          {item.currentorder?.map((service: string, index: number) => (
            <span
              key={index}
              className={`px-3 py-[6px] text-center font-medium items-center justify-center text-white rounded-2xl ${
                service === "ride" ? "bg-[#FEC53D]" : "bg-[#3D42DF]"
              }`}
            >
              {service}
            </span>
          ))}
        </div>
      </td>
    </tr>
  );

      

    case "Offline":
      return (
        <tr
          key={item.id}
          className="border-b border-gray-300 py-3 hover:bg-[#FFF8F5]"
        >
          <button className="flex items-center gap-3 font-medium cursor-pointer ml-2 py-3 whitespace-nowrap sm:whitespace-normal"
          onClick={() => router.push(`/driver/${item.id}`)} 
          >
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
          </button>
          <td className="font-sans pl-3 text-sm font-medium whitespace-nowrap sm:whitespace-normal text-[#1E1E1E]">
            {item.completedrides}
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
          <td className="font-sans pl-3 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
            {item.commissiondue}
          </td>
          <td className="font-sans pl-3 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
            {item.pendingpayout}
          </td>
          <td className="font-sans text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
            {item.lastseen}
          </td>
          <td className="font-sans text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
            {item.vehicle}
          </td>
        </tr>
      );

  // In renderRowDriver.tsx, within the "Un-approved" case:
case "Un-approved":
  return (
    <tr key={item.id} className="border-b border-gray-300 py-3 hover:bg-[#FFF8F5]">
      <button
        className="flex items-center gap-3 font-medium cursor-pointer ml-2 py-3 whitespace-nowrap sm:whitespace-normal"
        onClick={() => router.push(`/driver/${item.id}`)}
      >
        <Image
          src={item.photo || "/default-avatar.svg"}
          alt={`${item.name}'s photo`}
          height={40}
          width={40}
          className="object-cover w-10 h-10 rounded-full"
        />
        <span className="font-sans text-sm font-medium text-[#1E1E1E]">{item.name}</span>
      </button>
      <td className="font-sans pl-2 text-sm font-medium whitespace-nowrap sm:whitespace-normal text-[#1E1E1E]">
        {item.vehicleclass}
      </td>
      <td className="font-sans pl-2 text-sm font-medium whitespace-nowrap sm:whitespace-normal text-[#1E1E1E]">
        {item.propulsion || "N/A"}
      </td>
      <td className="font-sans pl-2 text-sm font-medium whitespace-nowrap sm:whitespace-normal text-[#1E1E1E]">
        {item.age !== undefined ? item.age : "N/A"}
      </td>
      <td className="font-sans pl-3 text-sm font-medium whitespace-nowrap sm:whitespace-normal text-[#1E1E1E]">
        {item.location || "N/A"}
      </td>
      <td className="font-sans pl-1 text-sm font-medium whitespace-nowrap sm:whitespace-normal text-[#1E1E1E]">
        {item.date}
      </td>
      <td className="font-sans pl-2 text-sm font-medium whitespace-nowrap sm:whitespace-normal">
        <button
          className="flex items-center px-6 py-1 border-[#F58735] border-2 rounded-[12px] gap-3"
          onClick={() => router.push(`/${item.id}/driver-approval`)}
        >
          <span className="font-san text-[#F58735] text-sm font-medium">{item.action}</span>
        </button>
      </td>
    </tr>
  );

    case "Inactive":
      return (
        <tr
          key={item.id}
          className="border-b border-gray-300 py-3 hover:bg-[#FFF8F5]"
        >
          <button className="flex items-center gap-3 font-medium cursor-pointer ml-2 py-3 whitespace-nowrap sm:whitespace-normal"
          onClick={() => router.push(`/driver/${item.id}`)} 
          >
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
          </button>
          <td className="font-sans pl-3 text-sm font-medium whitespace-nowrap sm:whitespace-normal text-[#1E1E1E]">
            {item.completedrides}
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
          <td className="font-sans pl-3 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
            {item.commissiondue}
          </td>
          <td className="font-sans pl-2 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
            {item.pendingpayout}
          </td>
          <td className="font-sans pl-2 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
            {item.lastseen}
          </td>
          <td className="font-sans pl-2 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
            {item.vehicle}
          </td>
          <td className="font-sans  text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
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
          <button className="flex items-center  gap-3 font-medium cursor-pointer ml-2 py-3 whitespace-nowrap sm:whitespace-normal"
          onClick={() => router.push(`/driver/${item.id}`)} 
          >
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
          </button>
          <td className="font-sans pl-3  text-sm font-medium whitespace-nowrap sm:whitespace-normal text-[#1E1E1E]">
            {item.completedrides}
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
          <td className="font-sans pl-3  text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
            {item.commissiondue}
          </td>
          <td className="font-sans  pl-3 text-sm  whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
            {item.pendingpayout}
          </td>
          <td className="font-sans text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
            {item.date}
          </td>
          <td className="font-sans pl-2 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
            {item.vehicle}
          </td>
          <td className="font-sans pl-2  text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
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
      <button className="flex items-center gap-3 font-medium cursor-pointer ml-2 py-3 whitespace-nowrap sm:whitespace-normal"
      onClick={() => router.push(`/driver/${item.id}`)} 
      >
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
      </button>
      <td className="font-sans pl-3 text-sm font-medium whitespace-nowrap sm:whitespace-normal text-[#1E1E1E]">
        {item.completedrides}
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
      <td className="font-sans pl-3 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
        {item.commissiondue}
      </td>
      <td className="font-sans pl-3 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
        {item.pendingpayout}
      </td>
      <td className="font-sans pl-1 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
        {item.vehicle}
      </td>
      <td className="font-sans text-sm whitespace-nowrap font-medium sm:whitespace-normal">
        <div
          className={`px-3 py-[6px] w flex text-center mr-3 font-medium items-center md:w-[60%] justify-center rounded-2xl ${
            item.Status === "Suspended"
              ? "bg-[#FF00001A] text-[#FF0000]"
              : item.Status === "Declined Application"
              ? "bg-[#D1DBE8] text-[#8280FF]"
              : ""
          }`}
        >
          {item.Status}
        </div>
      </td>
      <td className="font-sans text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
        {item.reason}
      </td>
    </tr>
  );


    default:
      return null;
  }
};
