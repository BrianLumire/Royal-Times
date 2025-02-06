"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { useQuery } from "@supabase-cache-helpers/postgrest-swr";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "react-toastify";

interface ApprovalChoicePageProps {
  params: {
    id: string;
  };
}

interface signedImageUrls {
  error: null | unknown;
  path: string;
  signedURL: string;
  signedUrl: string;
}

const ApprovalChoicePage = ({ params }: ApprovalChoicePageProps) => {
  const { id } = params;
  const router = useRouter();

  const [imageData, setImageData] = React.useState<signedImageUrls[]>();

  const supabase = createClient();

  const {
    data: driver_data,
    isLoading: driver_data_loading,
    // error,
  } = useQuery(
    supabase
      .from("drivers")
      .select(
        `
          user_id,
          verification_status,
          user_accounts (
            full_name
          )
        `
      )
      .eq("id", id)
  );
  const driver = driver_data?.[0];

  async function getSignedImageUrls() {
    const { data, error } = await supabase.functions.invoke(
      "get_driver_approval_images",
      {
        body: { driver_user_id: driver?.user_id },
      }
    );

    if (data) {
      setImageData(data);
    } else if (error) toast.error("An error occured while getting images.");
  }

  React.useEffect(() => {
    if (!driver_data_loading) {
      getSignedImageUrls();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [driver_data_loading]);

  //approve driver
  async function approveDriver() {
    const { error } = await supabase
      .from("drivers")
      .update({
        verification_status: "approved",
      })
      .eq("id", id)
      .neq("verification_status", "approved");

    if (error) {
      toast.error("An error occured. Please try again.");
    } else {
      toast.success("Driver approved.");
      router.push("/driver");
    }
  }

  //reject application
  async function rejectrDriver() {
    const { error } = await supabase
      .from("drivers")
      .update({
        verification_status: "rejected",
      })
      .eq("id", id)
      .neq("verification_status", "rejected");

    if (error) {
      toast.error("An error occured. Please try again.");
    } else {
      toast.success("Driver rejected.");
      router.push(`/${id}/application-rejection`);
    }
  }

  if (driver_data_loading) {
    return <Skeleton className="h-[125px] w-[250px] rounded-xl" />;
  } else
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="w-[95%] sm:w-[60%] lg:w-[40%] bg-white flex flex-col p-6 rounded-xl shadow-md border border-gray-200">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {/* Back arrow navigates back to Driver Approval */}
              <button
                onClick={() => router.push(`/action/${id}/driver-approval`)}
              >
                <Image
                  src="/driver-arrow.svg"
                  alt="Back Arrow"
                  width={16}
                  height={16}
                />
              </button>
              <span className="font-sans font-medium text-[14px] md:text-base">
                Driver Application Approval
              </span>
            </div>
            {/* X button navigates to /driver */}
            <button
              onClick={() => router.push("/driver")}
              className="font-sans flex items-center text-gray-700 text-sm font-semibold px-4 rounded-lg py-1 bg-[#F5F5F5]"
            >
              X
            </button>
          </div>
          {/* Progress bar */}
          <div className="flex items-center gap-2 mt-4">
            <div className="w-1/2 h-[4px] bg-[#F58735] rounded-xl"></div>
            <div className="w-1/2 h-[4px] bg-[#F58735] rounded-xl"></div>
          </div>
          {/* Status and Driver Info */}
          <div className="flex items-center gap-2 mt-3 pb-3 border-b border-gray-300 justify-center md:justify-start">
            <div className="bg-[#E6D37CBF] px-3 py-1 flex items-center rounded-xl">
              <span className="font-sans font-medium text-xs text-[#B68E00]">
                {driver?.verification_status}
              </span>
            </div>
            <div>
              <span className="font-sans font-medium text-xs">
                {driver?.user_accounts?.full_name}
              </span>
            </div>
          </div>
          {/* Document Images Section */}
          {/* Section 1 - National ID */}
          <div className="flex flex-col md:flex-row gap-4 bg-[#F6F6F6] p-3 rounded-xl mt-4">
            <div className="flex flex-col gap-2 md:w-1/2">
              <p className="font-sans font-medium text-sm mb-1">National ID</p>
              <div className="relative rounded-xl border-2 border-gray-300 h-48 w-full overflow-hidden">
                <Image
                  src={imageData?.[0].signedUrl as string}
                  alt="National ID"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="font-sans font-medium text-sm text-center">
                Back Side
              </p>
            </div>
            <div className="flex flex-col gap-2 md:w-1/2 md:mt-8">
              <div className="relative rounded-xl border-2 border-gray-300 h-48 w-full overflow-hidden">
                <Image
                  src={imageData?.[1].signedUrl as string}
                  alt="National ID"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="font-sans font-medium text-sm text-center">
                Front Side
              </p>
            </div>
          </div>
          {/* Section 2 - Driver License */}
          <div className="flex flex-col md:flex-row gap-4 mt-4 bg-[#F6F6F6] p-3 rounded-xl">
            <div className="flex flex-col gap-2 md:w-1/2">
              <p className="font-sans font-medium text-sm mb-1">
                Driver License
              </p>
              <div className="relative rounded-xl border-2 border-gray-300 h-48 w-full overflow-hidden">
                <Image
                  src={imageData?.[2].signedUrl as string}
                  alt="Driver License"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="font-sans font-medium text-sm text-center">
                Back Side
              </p>
            </div>
            <div className="flex flex-col gap-2 md:w-1/2 md:mt-8">
              <div className="relative rounded-xl border-2 border-gray-300 h-48 w-full overflow-hidden">
                <Image
                  src={imageData?.[3].signedUrl as string}
                  alt="Driver License"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="font-sans font-medium text-sm text-center">
                Front Side
              </p>
            </div>
          </div>
          {/* Section 3 - Additional Documents */}
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex flex-col gap-2 md:w-1/2">
              <div className="relative rounded-xl border-2 border-gray-300 h-48 w-full overflow-hidden">
                <Image
                  src={imageData?.[4].signedUrl as string}
                  alt="Proof of Insurance"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="font-sans font-medium text-sm text-center">
                Proof of Insurance
              </p>
            </div>
            <div className="flex flex-col gap-2 md:w-1/2">
              <div className="relative rounded-xl border-2 border-gray-300 h-48 w-full overflow-hidden">
                <Image
                  src={imageData?.[5].signedUrl as string}
                  alt="License Plate"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="font-sans font-medium text-sm text-center">
                License Plate
              </p>
            </div>
            <div className="flex flex-col gap-2 md:w-1/2">
              <div className="relative rounded-xl border-2 border-gray-300 h-48 w-full overflow-hidden">
                <Image
                  src={imageData?.[6].signedUrl as string}
                  alt="PSV Badge"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="font-sans font-medium text-sm text-center">
                PSV Badge
              </p>
            </div>
          </div>
          {/* Footer Buttons */}
          <div className="flex items-center mt-8 gap-4 justify-center md:justify-end">
            {/* Reject Application navigates to Application Rejection page */}
            <button
              className="text-[#F58735] border border-[#F58735] rounded-xl px-4 py-2 font-sans font-medium text-sm hover:bg-[#F58735] hover:text-white transition-colors"
              onClick={rejectrDriver}
            >
              Reject Application
            </button>
            {/* Approve navigates directly to /driver */}
            <button
              className="text-white bg-[#F58735] font-sans px-6 py-2 rounded-xl font-medium text-sm hover:bg-[#e76e20] transition-colors"
              onClick={approveDriver}
            >
              Approve
            </button>
          </div>
        </div>
      </div>
    );
};

export default ApprovalChoicePage;
