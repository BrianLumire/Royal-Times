"use client";

import SinglePageCards from "@/components/SinglePageCards";
import LoadingAnimation from "@/components/LoadingAnimation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { toast } from "sonner";

// Import updated types
import { 
  DriverData, 
  UserData, 
  VehicleData, 
} from "@/types/DriverTypes";

// Helper function to format dates as "Jan 06, 2000"
function formatDate(dateStr: string): string {
  if (!dateStr) return "N/A";
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const { id } = useParams();
  // Ensure we have a string id (if it's an array, take the first)
  const driverId: string = typeof id === "string" ? id : id[0];
  const supabase = createClient();

  // State for driver, user and vehicle data
  const [driver, setDriver] = useState<DriverData | null>(null);
  const [user, setUser] = useState<UserData | null>(null);
  const [vehicle, setVehicle] = useState<VehicleData | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSuspended, setIsSuspended] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch driver data
        const { data: driverData, error: driverError } = await supabase
          .from("drivers")
          .select("*")
          .eq("id", driverId)
          .single();

        if (driverError) throw driverError;
        // Cast driverData to our type (note: user_id may be null per our type)
        setDriver(driverData as DriverData);
        setIsSuspended(driverData.verification_status === "suspended");

        // Fetch user data – use non-null assertion since we expect driverData.user_id to be present
        const { data: userData, error: userError } = await supabase
          .from("user_accounts")
          .select("*")
          .eq("id", driverData.user_id!)
          .single();

        if (userError) throw userError;
        setUser(userData as UserData);

        // Fetch vehicle data – updated query to select both id and name from vehicle_classes
        const { data: vehicleData, error: vehicleError } = await supabase
          .from("vehicles")
          .select(`*, vehicle_classes (id, name)`)
          .eq("driver_id", driverData.id)
          .single();

        if (vehicleError) throw vehicleError;
        setVehicle(vehicleData as VehicleData);

        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        toast.error("Failed to fetch data. Please try again.");
        setLoading(false);
      }
    }

    if (id) fetchData();
  }, [id, supabase]);

  const handleSuspendDriver = async () => {
    try {
      const newStatus = isSuspended ? "approved" : "suspended";
      const { error: updateError } = await supabase
        .from("drivers")
        .update({ verification_status: newStatus })
        .eq("id", driverId);

      if (updateError) throw updateError;

      // Update driver state with a callback to preserve other fields
      setDriver((prev) => (prev ? { ...prev, verification_status: newStatus } : prev));
      setIsSuspended(!isSuspended);
      toast.success(
        `Driver ${newStatus === "suspended" ? "suspended" : "unsuspended"} successfully!`
      );
    } catch (error) {
      console.error("Error updating driver status:", error);
      toast.error("Failed to update driver status. Please try again.");
    }
  };

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <div className="flex flex-col md:flex-row gap-3">
      {/* Sidebar */}
      <div className="md:w-1/5 flex flex-col gap-2 pb-3 border p-2 border-gray-300 rounded-xl">
        {/* Profile & Status */}
        <div className="border p-2 border-gray-300 rounded-xl">
          <div className="flex justify-end">
            <div
              className={`px-2 py-1 flex items-center justify-center rounded-2xl ${
                driver?.is_online ? "bg-[#CAE3CE]" : "bg-gray-300"
              }`}
            >
              <span
                className={`text-xs font-sans font-medium ${
                  driver?.is_online ? "text-[#007C0C]" : "text-black"
                }`}
              >
                {driver?.is_online ? "Online" : "Offline"}
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={user?.avatar_url || "/driverpic.svg"}
              alt="Driver profile picture"
              width={50}
              height={50}
              className="object-cover w-20 h-20 rounded-full mb-2"
            />
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm md:text-[16px] font-sans font-medium">
                {user?.full_name || "Unknown"}
              </span>
              <Image src="/photo-5.svg" alt="Verified badge" width={21} height={21} />
            </div>
            <div className="flex items-center gap-1 pr-2">
              <Image src="/rating.svg" alt="Rating" width={15} height={15} />
              <span className="font-sans text-xs">
                {driver?.rating ? driver.rating.toFixed(1) : "N/A"}
              </span>
              <span className="font-sans text-xs underline">50 Reviews</span>
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="pb-4">
          <h2 className="font-sans mb-2 pb-1 border-b border-gray-300 md:text-sm">
            Personal Information
          </h2>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Image src="/gender.svg" alt="Gender" width={15} height={15} />
              <span className="font-sans text-sm md:text-xs">Gender</span>
            </div>
            <span className="font-sans text-sm md:text-xs">
              {driver?.sex || "Not specified"}
            </span>
          </div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Image src="/date.svg" alt="DOB" width={15} height={15} />
              <span className="font-sans text-sm md:text-xs">Date of Birth</span>
            </div>
            <span className="font-sans text-sm md:text-xs">
              {formatDate(driver?.date_of_birth || "")}
            </span>
          </div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Image src="/date.svg" alt="Registered On" width={15} height={15} />
              <span className="font-sans text-sm md:text-xs">Registered On</span>
            </div>
            <span className="font-sans text-sm md:text-xs">
              {formatDate(user?.created_at || "")}
            </span>
          </div>
        </div>

        {/* Contact Information */}
        <div className="pb-4">
          <h2 className="font-sans mb-2 pb-1 border-b border-gray-300 md:text-sm">
            Contact Information
          </h2>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Image src="/mobile.svg" alt="Mobile" width={17} height={17} />
              <span className="font-sans text-sm md:text-xs">Mobile</span>
            </div>
            <span className="font-sans text-sm md:text-xs">
              {user?.phone || "N/A"}
            </span>
          </div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Image src="/e-mail.svg" alt="E-mail" width={17} height={17} />
              <span className="font-sans text-sm md:text-xs">E-mail</span>
            </div>
            <span className="font-sans text-sm md:text-xs">
              {user?.email || "N/A"}
            </span>
          </div>
        </div>

        {/* Vehicle Information */}
        <div className="pb-4">
          <h2 className="font-sans mb-2 pb-1 border-b border-gray-300 md:text-sm">
            Vehicle Information
          </h2>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Image src="/class.svg" alt="Class" width={17} height={17} />
              <span className="font-sans text-sm md:text-xs">Class</span>
            </div>
            <span className="font-sans text-sm md:text-xs">
              {vehicle?.vehicle_classes?.name || "N/A"}
            </span>
          </div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Image src="/make.svg" alt="Make" width={17} height={17} />
              <span className="font-sans text-sm md:text-xs">Make</span>
            </div>
            <span className="font-sans text-sm md:text-xs">
              {vehicle?.make || "N/A"}
            </span>
          </div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Image src="/plate.svg" alt="L.Plate" width={17} height={17} />
              <span className="font-sans text-sm md:text-xs">L.Plate</span>
            </div>
            <span className="font-sans text-sm md:text-xs">
              {vehicle?.license_plate || "N/A"}
            </span>
          </div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Image src="/vehicle.svg" alt="Propulsion" width={17} height={17} />
              <span className="font-sans text-sm md:text-xs">Vehicle Propulsion</span>
            </div>
            <span className="font-sans text-sm md:text-xs">
              {vehicle?.propulsion || "N/A"}
            </span>
          </div>
        </div>

        {/* Suspend/Unsuspend Button */}
        <button
          className={`px-3 py-1 w-full flex items-center justify-between hover:bg-red-100 border ${
            isSuspended ? "border-green-500" : "border-[#B80000]"
          } rounded-xl`}
          onClick={handleSuspendDriver}
          disabled={loading}
          aria-label={isSuspended ? "Unsuspend Driver" : "Suspend Driver"}
        >
          <span
            className={`text-xs font-medium font-sans ${
              isSuspended ? "text-green-500" : "text-[#B80000]"
            }`}
          >
            {isSuspended ? "Unsuspend Driver" : "Suspend Driver"}
          </span>
          <Image
            src="/suspend.svg"
            alt="Suspend icon"
            width={23}
            height={23}
            className={`${isSuspended && "invert"}`}
          />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex gap-2 flex-col md:w-4/5">
        <div>
          {/* Top section with Cards */}
          <div className="flex flex-col md:flex-row gap-4 md:justify-between mb-6">
            <SinglePageCards
              title="Cumulative Earnings"
              value="Ksh 406"
              imageSrc="/photo 1.svg"
              imageBgColor="#E5E4FF"
            />
            <SinglePageCards
              title="Total Trips Requests"
              value="Ksh 200"
              imageSrc="/photo 2.svg"
              imageBgColor="#FFF3D6"
            />
            <SinglePageCards
              title="Due Commission"
              value={`Ksh ${driver?.comission_due ?? 0}`}
              imageSrc="/photo 3.svg"
              imageBgColor="#D9F7E8"
            />
            <SinglePageCards
              title="Pending Payouts"
              value="Ksh 2000"
              imageSrc="/photo 4.svg"
              imageBgColor="#FFDED0"
            />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
