"use client";
import Image from "next/image";
import React, { useState, ChangeEvent } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { storePsvBadgeImage } from "@/app/actions";
import { convertToFullISO } from "@/utils/utils";
import { toast } from "sonner"


// Define the schema for validation
const schema = z.object({
  driverLicenseNumber: z
    .string()
    .min(1, { message: "Driver License Number is required" }),
  driverLicenseExpiration: z
    .string()
    .min(1, { message: "Expiration Date is required" })
    .regex(/^\d{2}\/\d{2}\/\d{4}$/, {
      message: "Date must be in DD/MM/YYYY format",
    }),
  psvNumber: z.string().min(1, { message: "PSV Number is required" }),
  psvExpiration: z
    .string()
    .min(1, { message: "Expiration Date is required" })
    .regex(/^\d{2}\/\d{2}\/\d{4}$/, {
      message: "Date must be in DD/MM/YYYY format",
    }),
  psvBadgeImage: z
    .any()
    .refine((file) => file, { message: "PSV Badge Image is required" }),
});

// Infer the form data type from the schema
type FormData = z.infer<typeof schema>;

const AddInformationPage = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [psvBadgeImage, setPsvBadgeImage] = useState<string | null>(null);
  const [disabled, setDisabled] = useState(false);

  const onSubmit = async (data: FormData) => {
    setDisabled(true);
    const supabase = createClient();
    const user_id = localStorage.getItem("user_id");

    const driverData = new FormData();

    if (user_id) {
      driverData.append("psv_badge_image", data.psvBadgeImage);
      driverData.append("user_id", user_id);
      //store psv badge image
      const storePsvBadge = await storePsvBadgeImage(driverData);

      if (storePsvBadge.success) {
        //store license info
        const { data: driver_data, error: error_adding_driver_license } =
          await supabase
            .from("drivers")
            .update({
              driver_license_number: data.driverLicenseNumber,
              license_expiration_date: convertToFullISO(
                data.driverLicenseExpiration
              ),
            })
            .eq("user_id", user_id)
            .select("id");

        //store psv badge info
        const { error: error_updating_vehicle } = await supabase
          .from("vehicles")
          .upsert(
            {
              psv_number: data.psvNumber,
              psv_expiration_date: convertToFullISO(data.psvExpiration),
              driver_id: driver_data?.[0]?.id as string,
            },
            { onConflict: "driver_id" }
          );
        toast.success("License and PSV info saved.");
        if (error_adding_driver_license || error_updating_vehicle) {
          setDisabled(false);
          toast.error("An error occured while storing driver details.");
        } else {
          setDisabled(false);
          router.push("/add-verification");
        }
      } else {
        toast.error("An error occured.");
        setDisabled(false);
      }
    } else router.push("/add-driver");
  };

  const handleImageUpload = (
    event: ChangeEvent<HTMLInputElement>,
    setImage: React.Dispatch<React.SetStateAction<string | null>>,
    fieldName: keyof FormData
  ) => {
    const file = event.target.files?.[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      setValue(fieldName, file); // Set the file in react-hook-form
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
              onClick={() => router.push("/add-driver")}
            >
              <Image
                src="/driver-arrow.svg"
                alt="Driver Arrow"
                width={16}
                height={16}
              />
            </button>
            <span className="font-sans font-semibold text-[18px] md:text-xl">
              Add Driving Information
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
            <div className="flex flex-col w-full md:w-[50%]">
              <div className="mb-4">
                <label
                  className="text-[16px] md:text-base font-sans font-medium"
                  htmlFor="driverLicenseNumber"
                >
                  Driver License Number*
                </label>
                <Controller
                  name="driverLicenseNumber"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      id="driverLicenseNumber"
                      type="text"
                      placeholder="Driver License Number"
                      className="border border-gray-300 p-3 text-base mt-1 w-full rounded-[10px]"
                    />
                  )}
                />
                {errors.driverLicenseNumber && (
                  <span className="text-red-500 text-sm">
                    {errors.driverLicenseNumber.message?.toString()}
                  </span>
                )}
              </div>
              <div className="mb-4">
                <label
                  className="text-[16px] md:text-base font-sans font-medium"
                  htmlFor="driverLicenseExpiration"
                >
                  Expiration Date*
                </label>
                <Controller
                  name="driverLicenseExpiration"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      id="driverLicenseExpiration"
                      type="text"
                      placeholder="DD/MM/YYYY"
                      className="border border-gray-300 p-3 text-base mt-1 w-full rounded-[10px]"
                    />
                  )}
                />
                {errors.driverLicenseExpiration && (
                  <span className="text-red-500 text-sm">
                    {errors.driverLicenseExpiration.message?.toString()}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col w-full md:w-[50%]">
              <div className="mb-4">
                <label
                  className="text-[16px] md:text-base font-sans font-medium"
                  htmlFor="psvNumber"
                >
                  PSV Number*
                </label>
                <Controller
                  name="psvNumber"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      id="psvNumber"
                      type="text"
                      placeholder="PSV Number"
                      className="border border-gray-300 p-3 text-base mt-1 w-full rounded-[10px]"
                    />
                  )}
                />
                {errors.psvNumber && (
                  <span className="text-red-500 text-sm">
                    {errors.psvNumber.message?.toString()}
                  </span>
                )}
              </div>
              <div className="mb-4">
                <label
                  className="text-[16px] md:text-base font-sans font-medium"
                  htmlFor="psvExpiration"
                >
                  Expiration Date*
                </label>
                <Controller
                  name="psvExpiration"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      id="psvExpiration"
                      type="text"
                      placeholder="DD/MM/YYYY"
                      className="border border-gray-300 p-3 text-base mt-1 w-full rounded-[10px]"
                    />
                  )}
                />
                {errors.psvExpiration && (
                  <span className="text-red-500 text-sm">
                    {errors.psvExpiration.message?.toString()}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col p-4 md:flex-row gap-3 md:gap-8">
            {/* Upload Image Div */}
            <div className="flex flex-col p-5 w-full h-[350px]  border border-gray-300 rounded-xl">
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
                    handleImageUpload(e, setPsvBadgeImage, "psvBadgeImage")
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

            {/* PSV Badge Section */}
            <div className="w-full flex flex-col mb-5">
              <div className="flex flex-col">
                {/* PSV Badge */}
                <div className="flex flex-col gap-4 mb-5 md:w-1/2">
                  <div className="rounded-xl flex items-center border-2 border-dashed shadow-lg h-48 w-full relative">
                    {psvBadgeImage ? (
                      <Image
                        src={psvBadgeImage}
                        alt="PSV Badge"
                        fill
                        className="object-cover rounded-xl"
                      />
                    ) : (
                      <Image
                        src="/hugeicons_file-upload.svg"
                        alt="PSV Badge placeholder"
                        width={30}
                        height={30}
                        className="m-auto"
                      />
                    )}
                  </div>
                  <div className="flex items-center gap-3 md:mb-5">
                    <Image
                      src="/ic_round-plus.svg"
                      alt="Plus Icon"
                      width={17}
                      height={17}
                    />
                    <span
                      className={`font-sans text-base ${
                        psvBadgeImage ? "text-black" : "text-[#F58735]"
                      }`}
                    >
                      PSV Badge
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 md:mt-7">
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
                  {disabled === true ? "Saving..." : "Next"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddInformationPage;
