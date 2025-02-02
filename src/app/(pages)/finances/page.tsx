import React from 'react';
import MainCard from "@/components/MainCard";

const FinancePage = () => {
  return (
    <div className="mx-2">
      {/* Top section with Cards */}
      <div className="flex flex-col md:flex-row gap-4 md:justify-between mb-6">
        <MainCard title="Cumulative Income" value="12,500,000" imageSrc="/live-parcel2.svg" imageBgColor="#FFF3D6"  />
        <MainCard title="Cumulative Driver Revenue" value="2,000,000" imageSrc="/total-trips.svg" imageBgColor="#E5E4FF" />
        <MainCard title="Pending Payouts " value="10,000,000" imageSrc="/total-rides2.svg" imageBgColor="#D9F7E8" />
        <MainCard title="Expected Commission Income" value="55,000,000" imageSrc="/total-cancelled.svg" imageBgColor="#FFDED1" />
      </div>
      {/* Bottom section with Cards  */}
      <div className="flex flex-col md:flex-row gap-4 md:justify-between mb-6">
        <MainCard title="Spent On Promotions" value="2,000,000" imageSrc="/total-trips.svg" imageBgColor="#E5E4FF" />
        <MainCard title="Total Rides Income" value="1,500,000" imageSrc="/live-parcel2.svg" imageBgColor="#FFF3D6" />
        <MainCard title="Total Parcel Income " value="10,000,000" imageSrc="/total-rides2.svg" imageBgColor="#D9F7E8" />
        <div className="hidden md:block w-[calc(25%-1rem)]"></div> 
      </div>
    </div>
  );
}

export default FinancePage;
