"use client";
import Image from "next/image";
import React, { useState, ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { storeVehicleImages } from "@/app/actions";
import { createClient } from "@/utils/supabase/client";
import { toast } from "react-toastify";

// Define the schema for validation
const schema = z.object({
  frontViewImage: z
    .any()
    .refine((file) => file, { message: "Front View Image is required" }),
  backViewImage: z
    .any()
    .refine((file) => file, { message: "Back View Image is required" }),
  sideViewImage: z
    .any()
    .refine((file) => file, { message: "Side View Image is required" }),
  otherViewImage: z
    .any()
    .refine((file) => file, { message: "Other View Image is required" }),
});

// Infer the form data type from the schema
type FormData = z.infer<typeof schema>;

const AddCarImagesPage = () => {
  const router = useRouter();
  const {
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [disabled, setDisabled] = useState(false);

  const [frontViewImage, setFrontViewImage] = useState<string | null>(null);
  const [backViewImage, setBackViewImage] = useState<string | null>(null);
  const [sideViewImage, setSideViewImage] = useState<string | null>(null);
  const [otherViewImage, setOtherViewImage] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    setDisabled(true);
    const supabase = await createClient();
    const driverData = new FormData();
    const user_id = localStorage.getItem("user_id") as string;

    driverData.append("vehicle_front_view", data.frontViewImage);
    driverData.append("vehicle_back_view", data.backViewImage);
    driverData.append("vehicle_left_side_view", data.sideViewImage);
    driverData.append("vehicle_right_side_view", data.otherViewImage);
    driverData.append("user_id", user_id);

    const storeVehicleImagesResponse = await storeVehicleImages(driverData);

    if (storeVehicleImagesResponse.success) {
      const { error: approve_driver_error } = await supabase
        .from("drivers")
        .update({ verification_status: "approved" })
        .eq("user_id", user_id);

      if (!approve_driver_error) {
        toast.success("Driver created and approved.");
        router.push("/driver");
      } else toast.error("An error occured.");
    }
  };

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      const imageUrl = URL.createObjectURL(file);

      // Determine which container to assign the image to
      if (!frontViewImage) {
        setFrontViewImage(imageUrl);
        setValue("frontViewImage", file);
      } else if (!backViewImage) {
        setBackViewImage(imageUrl);
        setValue("backViewImage", file);
      } else if (!sideViewImage) {
        setSideViewImage(imageUrl);
        setValue("sideViewImage", file);
      } else if (!otherViewImage) {
        setOtherViewImage(imageUrl);
        setValue("otherViewImage", file);
      }
    } else {
      alert("Please upload a valid image file (JPG or PNG).");
    }
  };

  return (
    <div className="h-screen flex justify-center">
      <div className="w-full md:w-[80%]">
        <div className="flex items-center p-4 border-b border-gray-300 justify-between">
          <div className="flex items-center gap-2">
            <button
              className="p-2 md:p-3 border border-gray-300 rounded-full"
              onClick={() => router.back()}
            >
              <Image
                src="/driver-arrow.svg"
                alt="Driver Arrow"
                width={16}
                height={16}
              />
            </button>
            <span className="font-sans font-semibold text-[18px] md:text-xl">
              Add Vehicle Information
            </span>
          </div>
          <button
            className="font-sans flex items-center text-gray-700 text-lg font-semibold px-6 rounded-[10px] py-[3px] bg-[#F5F5F5]"
            onClick={() => router.push("/driver")}
          >
            X
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Top Section */}
          <div className="flex flex-col p-4 md:flex-row gap-3 md:gap-8">
            {/* Upload Image Div */}
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
                  onChange={handleImageUpload}
                />
                <label
                  htmlFor="file-upload"
                  className="text-white px-4 py-3 rounded-[14px] text-sm shadow-lg shadow-[#F58735] bg-[#F58735] cursor-pointer"
                >
                  Browse File
                </label>
              </div>
              {errors.frontViewImage && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.frontViewImage.message as string}
                </p>
              )}
            </div>

            {/* Vehicle Views Section */}
            <div className="w-full flex flex-col mb-5">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Front View */}
                  <div className="flex flex-col gap-4 w-full">
                    <div className="rounded-xl flex items-center border-2 border-dashed shadow-lg h-48 w-full relative">
                      {frontViewImage ? (
                        <Image
                          src={frontViewImage}
                          alt="Front View"
                          fill
                          className="object-cover rounded-xl"
                        />
                      ) : (
                        <Image
                          src="/hugeicons_file-upload.svg"
                          alt="Front View placeholder"
                          width={30}
                          height={30}
                          className="m-auto"
                        />
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      <Image
                        src="/ic_round-plus.svg"
                        alt="Plus Icon"
                        width={17}
                        height={17}
                      />
                      <span className="font-sans text-base">Front View</span>
                    </div>
                    {errors.frontViewImage && (
                      <p className="text-red-500 text-sm">
                        {errors.frontViewImage.message as string}
                      </p>
                    )}
                  </div>

                  {/* Back View */}
                  <div className="flex flex-col gap-4 w-full">
                    <div className="rounded-xl flex items-center border-2 border-dashed shadow-lg h-48 w-full relative">
                      {backViewImage ? (
                        <Image
                          src={backViewImage}
                          alt="Back View"
                          fill
                          className="object-cover rounded-xl"
                        />
                      ) : (
                        <Image
                          src="/hugeicons_file-upload.svg"
                          alt="Back View placeholder"
                          width={30}
                          height={30}
                          className="m-auto"
                        />
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      <Image
                        src="/ic_round-plus.svg"
                        alt="Plus Icon"
                        width={17}
                        height={17}
                      />
                      <span className="font-sans text-base">Back View</span>
                    </div>
                    {errors.backViewImage && (
                      <p className="text-red-500 text-sm">
                        {errors.backViewImage.message as string}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                  {/* Side View */}
                  <div className="flex flex-col gap-4 w-full">
                    <div className="rounded-xl flex items-center border-2 border-dashed shadow-lg h-48 w-full relative">
                      {sideViewImage ? (
                        <Image
                          src={sideViewImage}
                          alt="Side View"
                          fill
                          className="object-cover rounded-xl"
                        />
                      ) : (
                        <Image
                          src="/hugeicons_file-upload.svg"
                          alt="Side View placeholder"
                          width={30}
                          height={30}
                          className="m-auto"
                        />
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      <Image
                        src="/ic_round-plus.svg"
                        alt="Plus Icon"
                        width={17}
                        height={17}
                      />
                      <span className="font-sans text-base">Side View</span>
                    </div>
                    {errors.sideViewImage && (
                      <p className="text-red-500 text-sm">
                        {errors.sideViewImage.message as string}
                      </p>
                    )}
                  </div>

                  {/* Other View */}
                  <div className="flex flex-col gap-4 w-full">
                    <div className="rounded-xl flex items-center border-2 border-dashed shadow-lg h-48 w-full relative">
                      {otherViewImage ? (
                        <Image
                          src={otherViewImage}
                          alt="Other View"
                          fill
                          className="object-cover rounded-xl"
                        />
                      ) : (
                        <Image
                          src="/hugeicons_file-upload.svg"
                          alt="Other View placeholder"
                          width={30}
                          height={30}
                          className="m-auto"
                        />
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      <Image
                        src="/ic_round-plus.svg"
                        alt="Plus Icon"
                        width={17}
                        height={17}
                      />
                      <span className="font-sans text-base">Side View</span>
                    </div>
                    {errors.otherViewImage && (
                      <p className="text-red-500 text-sm">
                        {errors.otherViewImage.message as string}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-4 mt-4 md:mt-7">
                <button
                  type="button"
                  className="px-12 py-3 font-sans font-medium text-base border border-[#F58735] bg-white rounded-xl text-[#F58735]"
                  onClick={() => router.push("/driver")}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={disabled}
                  className="px-16 py-[13px] font-sans font-medium text-base bg-[#F58735] rounded-xl text-white"
                >
                  {disabled === true ? "Saving..." : "Complete"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCarImagesPage;
