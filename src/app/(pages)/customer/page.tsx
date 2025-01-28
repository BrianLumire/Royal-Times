import React from 'react'
import MainCard from "@/components/MainCard";


const CustomerPage = () => {
  return (
    <div className="mx-2">
          {/* Top section with Cards */}
    <div className="flex flex-col md:flex-row gap-4 md:justify-between mb-6">
   {/* Card 1: Total Drivers */}
   <MainCard title="Registered Customers" value="10,000" imageSrc="/reg-customers.svg" imageBgColor="#E5E4FF" />

{/* Card 2: Total Driver Earnings */}
<MainCard title="Active Customers" value="Ksh 200" imageSrc="/active-customers.svg" imageBgColor="#FFF3D6" />

{/* Card 3: Total Rides */}
<MainCard title="Customer Satisfaction" value="80%" imageSrc="/cus-satisfaction.svg" imageBgColor="#D9F7E8" />

{/* Card 4: Served Customers */}
<MainCard title="Total Rides Booked" value="15,000" imageSrc="/total-rides.svg" imageBgColor="#FFF3D6" />

    </div>
    </div>
  )
}

export default CustomerPage
