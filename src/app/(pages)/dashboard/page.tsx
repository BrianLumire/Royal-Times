import CancelReasons from "@/components/CancelReasons";
import CardDashboard2 from "@/components/CardDashboard-Two";
import DashboardCard1 from "@/components/DashboardCard-One";
import FinanceOverview from "@/components/FinanceOverview";
import TripCancelGraph from "@/components/TripCancelGraph";
import TripTrendsGraph from "@/components/TripTrendsGraph";
import Image from "next/image";

const DashboardPage = () => {
  return (
    <div className="mx-2">
      <div className="flex items-center justify-end mb-3">
      <button className="flex items-center gap-3 px-4  py-1 border border-[#F58735] rounded-xl">
              <span className="font-sans font-medium text-sm text-[#F58735]">December</span>
              <Image src="/drop-icon-color.svg" alt="" width={12} height={12}/>
            </button>
      </div>
      {/* Cards sections */}
      <div className="flex flex-col md:flex-row gap-3 mb-5">
        {/* Left sections */}
        <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-3">
          {/* DashboardCard1 */}
          <div className="w-full md:w-1/2 flex flex-col">
            <DashboardCard1
              mainValue="KES 43,635"
              description="Cumulative Revenue"
              items={[
                { iconSrc: "/from-rides.svg", label: "From Rides", value: "896" },
                { iconSrc: "/tabler_bike.svg", label: "From Deliveries", value: "1,680" },
                {
                  iconSrc: "/total-profits.svg",
                  label: "Total Profit",
                  value: "KES 1,246,456",
                },
              ]}
            />
          </div>

          {/* CardDashboard2 */}
          <div className="w-full md:w-1/2 flex flex-col gap-4 h-full">
            <CardDashboard2
              iconSrc="/cumulative.svg"
              bgColor="#E5E4FF"
              title="Cumulative Drivers Revenue"
              value="5,656"
            />
            <CardDashboard2
              iconSrc="/spent.svg"
              bgColor="#FFF3D6"
              title="Spent on Promotions"
              value="2,345"
            />
          </div>
        </div>

        {/* Right sections */}
        <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-3">
          {/* CardDashboard2 */}
          <div className="flex flex-col gap-3 w-full md:w-1/2 h-full">
            <CardDashboard2
              iconSrc="/driver-all.svg"
              bgColor="#C1FFCB66"
              title="Total drivers"
              value="3,000"
            />
            <CardDashboard2
             iconSrc="/cumulative.svg"
              bgColor="#E5E4FF"
              title="Total Customers"
              value="5,000"
            />
          </div>

          {/* DashboardCard1 */}
          <div className="w-full md:w-1/2 flex flex-col h-full">
            <DashboardCard1
              mainValue="3,635"
              description="Total Trip Requests"
              items={[
                { iconSrc: "/from-rides.svg", label: "Rides", value: "2,345" },
                { iconSrc: "/tabler_bike.svg", label: "Deliveries", value: "1,200" },
                {
                  iconSrc: "/from-rides.svg",
                  label: "Completed Trips",
                  value: "3,367",
                },
              ]}
            />
          </div>
        </div>
      </div>
      {/*second section */}
      <div className="flex flex-col mb-5 md:flex-row gap-3">
        {/*Finance overview section */}
        <div className="flex flex-col border gap-3 border-gray-200 shadow-lg rounded-xl p-4 w-full md:w-1/3">
          <h1 className="font-sans font-bold text-lg mb-3">Finance Overview</h1>
          <FinanceOverview
           iconSrc="/finance-icon-1.svg"
           bgColor="#E5E4FF"
           title="Cancelled Trips Loss"
           value="KES 8,465,900"
          />
            <FinanceOverview
           iconSrc="/finance-icon-2.svg"
           bgColor="#FFDED0"
           title="Pending Payouts"
           value="KES 2,465,800"
          />
            <FinanceOverview
           iconSrc="/finance-icon-3.svg"
           bgColor="#C1FFCB66"
           title="Expected Commission Income"
          value="KES 7,325,430"
          />
        </div>
        {/*Trip request Graph */}
        <div className="shadow-lg rounded-xl border  border-gray-200  p-4 w-full md:w-2/3">
        <div className="flex flex-col md:flex-row  items-center justify-between">
          <h1 className="font-sans font-bold text-lg mb-3 ">Trips Request Trends</h1>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-3 px-3 py-1 border border-[#F58735] rounded-xl">
              <span className="font-sans font-medium text-sm text-[#F58735]">2024</span>
              <Image src="/drop-icon-color.svg" alt="" width={12} height={12}/>
            </button>
            <button className="flex items-center gap-3 px-4 py-1 border border-[#F58735] rounded-xl">
            <span className="font-sans font-medium text-sm text-[#F58735]">Deliveries</span>
            <Image src="/drop-icon-color.svg" alt="" width={12} height={12}/>
            </button>
          </div>
        </div>
        <TripTrendsGraph/>
        </div>
      </div>
       {/*bottom section */}
       <div className="flex flex-col mb-5 md:flex-row gap-2 p-3 shadow-lg rounded-xl border  border-gray-200">
        {/*Trip cancell reasons section */}
          <div className="flex flex-col gap-4 w-full md:w-1/4">
            <h1 className="font-sans text-base font-medium">Trip Cancellation Reasons</h1>
            <div className="md:border-r border-gray-300 p-1 flex flex-col gap-4 md:p-2">
              <p className="mb-4 font-sans text-sm text-center font-medium">Cancellation Reasons</p>
              <CancelReasons reasonText="Driver asked me to cancel or rider off the app" count="48,000" iconBg="bg-[#21A366]" />
              <CancelReasons reasonText="Driver took too long" count="28,000" iconBg="bg-[#022374]" />
              <CancelReasons reasonText="Requested by mistake" count="200,000" iconBg="bg-[#E0C6FD]" />
              <CancelReasons reasonText="Changed ny trip" count="350,000" iconBg="bg-[#03F0E2]" />
              <CancelReasons reasonText="Disagreement" count="250,000" iconBg="bg-[#3D42DF]" />
              <CancelReasons reasonText="Other" count="370,000" iconBg="bg-[#B68E00]" />

            </div>
          </div>
          {/*graph section */}
          <div className="w-full md:w-3/4">
          <TripCancelGraph/>
          </div>
       </div>

    </div>
  );
};

export default DashboardPage;
