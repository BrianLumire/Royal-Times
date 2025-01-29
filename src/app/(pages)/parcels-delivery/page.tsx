import React from 'react'
import MainCard from "../../../components/MainCard";


const ParcelsDeliveryPage = () => {
  return (
    <div className="mx-2">
    {/* Top section with Cards */}
<div className="flex flex-col md:flex-row gap-4 md:justify-between mb-6">
{/* Card 1: Total Drivers */}
<MainCard title="Total Parcel Deliveries" value="10,000" imageSrc="/total-trips.svg" imageBgColor="#E5E4FF" />

{/* Card 2: Total Driver Earnings */}
<MainCard title="Live Parcel Deliveries" value="200" imageSrc="/live-parcel2.svg" imageBgColor="#FFF3D6" />

{/* Card 3: Total Rides */}
<MainCard title="Completed Deliveries " value="100,000" imageSrc="/total-rides2.svg" imageBgColor="#D9F7E8" />

{/* Card 4: Served Customers */}
<MainCard title="Total Cancelled Deliveries" value="1,500" imageSrc="/total-cancelled.svg" imageBgColor="#FFDED1" />

</div>
</div>
  )
}

export default ParcelsDeliveryPage
