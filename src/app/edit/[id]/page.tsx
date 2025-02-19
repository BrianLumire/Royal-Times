"use client";

import Image from "next/image";
import React, { useState, ChangeEvent, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter, useParams } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { toast } from "sonner";
import { parse, format } from "date-fns";

// Define the schema for validation
const schema = z.object({
  fullName: z.string().min(1, { message: "Full Name is required" }),
  dateOfBirth: z
    .string()
    .min(1, { message: "Date of Birth is required" })
    .regex(/^\d{2}\/\d{2}\/\d{4}$/, {
      message: "Date must be in DD/MM/YYYY format",
    }),
  avatarImage: z.any().refine((file) => file, { message: "Avatar Image is required" }),
});

// Infer the form data type from the schema
type FormData = z.infer<typeof schema>;

const EditDriverPage = () => {
  const router = useRouter();
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id; // Ensure id is a string
  const supabase = createClient();
  const [avatarImage, setAvatarImage] = useState<string | null>(null);
  const [disabled, setDisabled] = useState(false);

  const { control, handleSubmit, formState: { errors }, setValue } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  // Fetch existing driver and user data to pre-populate the form
  useEffect(() => {
    const fetchDriverData = async () => {
      console.log("Fetching driver data for ID:", id);

      // Step 1: Fetch driver data from the "drivers" table
      const { data: driverData, error: driverError } = await supabase
        .from("drivers")
        .select("*")
        .eq("id", id)
        .single();

      if (driverError || !driverData) {
        toast.error("Driver not found.");
        console.error("Driver Error Details:", driverError);
        return;
      }
      console.log("Driver data fetched:", driverData);

      // Step 2: Ensure the driver record contains a non-null user_id
      if (!driverData.user_id) {
        toast.error("User id not found for this driver.");
        console.error("User id is null in driverData:", driverData);
        return;
      }

      // Step 3: Fetch user data from the "user_accounts" table using the driver’s user_id
      const { data: userData, error: userError } = await supabase
        .from("user_accounts")
        .select("*")
        .eq("id", driverData.user_id)
        .single();

      if (userError || !userData) {
        toast.error("User not found.");
        console.error("User Error Details:", userError);
        return;
      }
      console.log("User data fetched:", userData);

      // Step 4: Set the initial form values
      setValue("fullName", userData.full_name || "");
      setValue("dateOfBirth", driverData.date_of_birth || "");
      setAvatarImage(userData.avatar_url || "");
    };

    if (id) {
      fetchDriverData();
    }
  }, [id, supabase, setValue]);

  // Form submission handler
  const onSubmit = async (data: FormData) => {
    setDisabled(true);
    try {
      console.log("Submitting update for driver ID:", id);
      // Re-fetch driver data to obtain the latest user_id
      const { data: driverData, error: driverFetchError } = await supabase
        .from("drivers")
        .select("*")
        .eq("id", id)
        .single();

      if (driverFetchError || !driverData) {
        throw new Error("Driver not found.");
      }
      console.log("Driver data for update:", driverData);

      if (!driverData.user_id) {
        throw new Error("Driver's user ID is missing.");
      }

      // Convert the dateOfBirth from DD/MM/YYYY to YYYY-MM-DD format
      const parsedDate = parse(data.dateOfBirth, "dd/MM/yyyy", new Date());
      const formattedDate = format(parsedDate, "yyyy-MM-dd");

      // Update user_accounts: update full_name and avatar_url
      const { error: userError } = await supabase
        .from("user_accounts")
        .update({
          full_name: data.fullName,
          avatar_url: avatarImage,
        })
        .eq("id", driverData.user_id);

      if (userError) {
        console.error("User update error:", userError);
        throw userError;
      }
      console.log("User account updated successfully.");

      // Update drivers: update date_of_birth
      const { error: driverError } = await supabase
        .from("drivers")
        .update({
          date_of_birth: formattedDate,
        })
        .eq("id", id);

      if (driverError) {
        console.error("Driver update error:", driverError);
        throw driverError;
      }
      console.log("Driver data updated successfully.");

      toast.success("Driver details updated successfully.");
      router.push(`/driver/${id}`);
    } catch (error) {
      toast.error("An error occurred while updating driver details.");
      console.error("Submission error:", error);
    } finally {
      setDisabled(false);
    }
  };

  // Handle file uploads for the avatar image
  const handleImageUpload = (
    event: ChangeEvent<HTMLInputElement>,
    setImage: React.Dispatch<React.SetStateAction<string | null>>,
    fieldName: keyof FormData
  ) => {
    const file = event.target.files?.[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      setValue(fieldName, file); // Update react-hook-form state with the file
    } else {
      alert("Please upload a valid image file (JPG or PNG).");
    }
  };

  return (
    <div className="h-screen flex justify-center">
      <div className="w-full md:w-[80%]">
        {/* Header Section */}
        <div className="border-b border-gray-300 pb-2">
          <div className="flex items-center p-4 justify-between">
            <div className="flex items-center gap-2">
              <button
                className="p-2 md:p-3 border border-gray-300 rounded-full"
                onClick={() => router.push(`/driver/${id}`)}
              >
                <Image
                  src="/driver-arrow.svg"
                  alt="Driver Arrow"
                  width={16}
                  height={16}
                />
              </button>
              <span className="font-sans font-semibold text-[18px] md:text-xl">
                Edit User Details
              </span>
            </div>
            <button
              className="font-sans flex items-center text-gray-700 text-lg font-semibold px-6 rounded-[10px] py-[3px] bg-[#F5F5F5]"
              onClick={() => router.push(`/driver/${id}`)}
            >
              X
            </button>
          </div>
          <span className="pl-3 md:pl-1 font-sans font-normal text-[14px] md:text-[16px]">
            Update Driver Profile
          </span>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Top Section: Form Inputs */}
          <div className="flex flex-col p-4 md:flex-row gap-3 md:gap-8">
            {/* Full Name Input */}
            <div className="w-full md:w-[50%]">
              <div className="mb-4">
                <label
                  htmlFor="fullName"
                  className="text-[16px] md:text-base font-sans font-medium"
                >
                  Full Name*
                </label>
                <Controller
                  name="fullName"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      id="fullName"
                      type="text"
                      placeholder="Full Name"
                      className="border border-gray-300 p-3 text-base mt-1 w-full rounded-[10px]"
                    />
                  )}
                />
                {errors.fullName && (
                  <span className="text-red-500 text-sm">
                    {errors.fullName.message?.toString()}
                  </span>
                )}
              </div>
            </div>

            {/* Date of Birth Input */}
            <div className="w-full md:w-[50%]">
              <div className="mb-4">
                <label
                  htmlFor="dateOfBirth"
                  className="text-[16px] md:text-base font-sans font-medium"
                >
                  Date of Birth*
                </label>
                <Controller
                  name="dateOfBirth"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      id="dateOfBirth"
                      type="text"
                      placeholder="DD/MM/YYYY"
                      className="border border-gray-300 p-3 text-base mt-1 w-full rounded-[10px]"
                    />
                  )}
                />
                {errors.dateOfBirth && (
                  <span className="text-red-500 text-sm">
                    {errors.dateOfBirth.message?.toString()}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Section: Image Upload & Display */}
          <div className="flex flex-col p-4 md:flex-row gap-3 md:gap-8">
            {/* Upload Section */}
            <div className="w-full md:w-[50%]">
              <div className="flex flex-col p-5 w-full h-[350px] border border-gray-300 rounded-xl">
                <div className="flex flex-col items-center mb-3">
                  <p className="text-sm font-sans font-medium">
                    Upload Your Image
                  </p>
                  <span className="text-sm font-sans text-[#9E9E9E]">
                    File should be JPG, PNG or Raw
                  </span>
                </div>
                <div className="flex flex-col gap-4 border-2 border-dashed py-14 items-center justify-center border-gray-300 rounded-xl">
                  <Image
                    src="/tabler_upload.svg"
                    alt="Upload Icon"
                    width={30}
                    height={30}
                  />
                  <p className="font-sans text-sm">Drag & Drop your file or</p>
                  <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    onChange={(e) =>
                      handleImageUpload(e, setAvatarImage, "avatarImage")
                    }
                  />
                  <label
                    htmlFor="file-upload"
                    className="text-white px-4 py-3 rounded-[14px] text-sm shadow-lg shadow-[#F58735] bg-[#F58735] cursor-pointer"
                  >
                    Browse File
                  </label>
                </div>
              </div>
            </div>

            {/* Display Section */}
            <div className="w-full md:w-[50%]">
              <div className="rounded-xl flex items-center border-2 border-dashed shadow-lg h-48 w-full relative">
                {avatarImage ? (
                  <Image
                    src={avatarImage}
                    alt="Avatar"
                    fill
                    className="object-cover rounded-xl"
                  />
                ) : (
                  <Image
                    src="/hugeicons_file-upload.svg"
                    alt="Avatar placeholder"
                    width={30}
                    height={30}
                    className="m-auto"
                  />
                )}
              </div>
              <div className="flex items-center gap-3 mt-4">
                <Image
                  src="/ic_round-plus.svg"
                  alt="Plus Icon"
                  width={17}
                  height={17}
                />
                <span className={`font-sans text-base ${avatarImage ? "text-black" : "text-[#F58735]"}`}>
                  Avatar Image
                </span>
              </div>
            </div>
          </div>

          {/* Buttons Section */}
          <div className="flex md:justify-end items-center justify-center p-4 gap-2 md:gap-4">
            <button
              type="button"
              className="md:px-12 px-10 py-3 font-sans font-medium text-base border border-[#F58735] bg-white rounded-xl text-[#F58735]"
              onClick={() => router.push(`/driver/${id}`)}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={disabled}
              className="md:px-16 px-12 py-[13px] font-sans font-medium text-base bg-[#F58735] rounded-xl text-white"
            >
              {disabled ? "Saving..." : "Complete"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditDriverPage;
