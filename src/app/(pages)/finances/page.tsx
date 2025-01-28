import React from 'react';
import MainCard from "@/components/MainCard";

const FinancePage = () => {
  return (
    <div className="mx-2">
      {/* Top section with Cards */}
      <div className="flex flex-col md:flex-row gap-4 md:justify-between mb-6">
        {/* Card 1: Total Parcel Deliveries */}
        <MainCard title="Cumulative Income" value="12,500,000" imageSrc="/live-parcel2.svg" imageBgColor="#FFF3D6"  />

        {/* Card 2: Live Parcel Deliveries */}
        <MainCard title="Cumulative Driver Revenue" value="2,000,000" imageSrc="/total-trips.svg" imageBgColor="#E5E4FF" />

        {/* Card 3: Completed Deliveries */}
        <MainCard title="Pending Payouts " value="10,000,000" imageSrc="/total-rides2.svg" imageBgColor="#D9F7E8" />

        {/* Card 4: Total Cancelled Deliveries */}
        <MainCard title="Expected Commission Income" value="55,000,000" imageSrc="/total-cancelled.svg" imageBgColor="#FFDED1" />
      </div>

      {/* Bottom section with Cards (fixing layout when removing the last card) */}
      <div className="flex flex-col md:flex-row gap-4 md:justify-between mb-6">
        {/* Card 1: Total Parcel Deliveries */}
        <MainCard title="Spent On Promotions" value="2,000,000" imageSrc="/total-trips.svg" imageBgColor="#E5E4FF" />

        {/* Card 2: Live Parcel Deliveries */}
        <MainCard title="Total Rides Income" value="1,500,000" imageSrc="/live-parcel2.svg" imageBgColor="#FFF3D6" />

        {/* Card 3: Completed Deliveries */}
        <MainCard title="Total Parcel Income " value="10,000,000" imageSrc="/total-rides2.svg" imageBgColor="#D9F7E8" />

        {/* Card 4: Removed - leave space for it */}
        <div className="hidden md:block w-[calc(25%-1rem)]"></div> {/* Invisible space reserved */}
      </div>
    </div>
  );
}

export default FinancePage;
