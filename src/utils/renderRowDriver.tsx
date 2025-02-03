// utils/renderRow.tsx
import Image from "next/image";
import React from "react";

interface DriverItem {
  id: string | number;
  photo: string;
  name: string;
  completedrides: number;
  ratingphoto: string;
  rating: number;
  commissiondue: number;
  pendingpayout: number;
  vehicle: string;
  availablefor?: string[]; // Optional, used in "Free" case
  currentorder?: string[]; // Optional, used in "Occupied" case
  lastseen?: string; // Optional, used in "Offline" and "Inactive" cases
  vehicleclass?: string; // Optional, used in "Un-approved" case
  propulsion?: string; // Optional, used in "Un-approved" case
  age?: string; // Optional, used in "Un-approved" case
  location?: string; // Optional, used in "Un-approved" case
  date?: string; // Optional, used in "Un-approved" and "Deleted" cases
  reason?: string; // Optional, used in "Inactive" and "Deleted" cases
  Status?: string; // Optional, used in "Blocked" case
}

export const renderRowDriver = (item: DriverItem, selectedButton: string) => {
  switch (selectedButton) {

    case "Free":
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
          <td className="font-sans text text-sm font-medium whitespace-nowrap sm:whitespace-normal text-[#1E1E1E]">
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
            {item.commissiondue}
          </td>
          <td className="font-sans  pl-3 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
            {item.pendingpayout}
          </td>
          <td className="font-sans text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
            {item.vehicle}
          </td>
          <td className="font-sans text-sm whitespace-nowrap font-medium sm:whitespace-normal">
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
              {item.commissiondue}
            </td>
            <td className="font-sans  pl-3 text-sm whitespace-nowrap font-medium sm:whitespace-normal text-[#1E1E1E]">
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
      

    case "Offline":
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

    case "Un-approved":
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
            {item.vehicleclass}
          </td>
          <td className="font-sans pl-2  text-sm font-medium whitespace-nowrap sm:whitespace-normal text-[#1E1E1E]">
            {item.propulsion}
          </td>
          <td className="font-sans pl-2 text-sm font-medium whitespace-nowrap sm:whitespace-normal text-[#1E1E1E]">
            {item.age}
          </td>
          <td className="font-sans pl-3 text-sm font-medium whitespace-nowrap sm:whitespace-normal text-[#1E1E1E]">
            {item.location}
          </td>
          <td className="font-sans pl-1  text-sm font-medium whitespace-nowrap sm:whitespace-normal text-[#1E1E1E]">
            {item.date}
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
          <td className="flex items-center  gap-3 font-medium cursor-pointer ml-2 py-3 whitespace-nowrap sm:whitespace-normal">
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
          <td className="font-sans pl-3  text-sm font-medium whitespace-nowrap sm:whitespace-normal text-[#1E1E1E]">
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
