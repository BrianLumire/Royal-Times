import React from 'react'
import MainCard from "../../../components/MainCard";


const Ridespage = () => {
  return (
    <div className="mx-2">
    {/* Top section with Cards */}
<div className="flex flex-col md:flex-row gap-4 md:justify-between mb-6">
{/* Card 1: Total Drivers */}
<MainCard title="Total Trips Completed" value="10,000" imageSrc="/total-trips.svg" imageBgColor="#E5E4FF" />

{/* Card 2: Total Driver Earnings */}
<MainCard title="Live Trips" value="Ksh 200" imageSrc="/live-trip.svg" imageBgColor="#FFF3D6" />

{/* Card 3: Total Rides */}
<MainCard title="Total Created Rides" value="43,234" imageSrc="/total-rides2.svg" imageBgColor="#D9F7E8" />

{/* Card 4: Served Customers */}
<MainCard title="Cancelled Rides" value="150" imageSrc="/total-parcels.svg" imageBgColor="#FFDED1" />

</div>
</div>
  )
}

export default Ridespage
