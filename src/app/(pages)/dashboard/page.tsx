import CardDashboard2 from "../../../components/CardDashboard-Two";
import DashboardCard1 from "../../../components/DashboardCard-One";

const DashboardPage = () => {
  return (
    <div className="mx-2">
      {/* Cards sections */}
      <div className="flex flex-col md:flex-row gap-3">
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
    </div>
  );
};

export default DashboardPage;
