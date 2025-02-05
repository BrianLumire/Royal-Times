"use client";

import Image from 'next/image';
import React, { useState, ChangeEvent } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';

// Define the schema for validation
const schema = z.object({
  driverLicenseFront: z.any().refine((file) => file, { message: 'Driver License Front is required' }),
  driverLicenseBack: z.any().refine((file) => file, { message: 'Driver License Back is required' }),
  insuranceFile: z.any().refine((file) => file, { message: 'Proof of Insurance is required' }),
  licensePlateFile: z.any().refine((file) => file, { message: 'License Plate is required' }),
  proofOfOwnershipFile: z.any().refine((file) => file, { message: 'Proof of Ownership is required' }),
});

// Infer form data type from schema
type FormData = z.infer<typeof schema>;

const AddDriverVerificationInfoPage = () => {
  const router = useRouter();
  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  // Preview image states
  const [driverLicenseFrontImage, setDriverLicenseFrontImage] = useState<string | null>(null);
  const [driverLicenseBackImage, setDriverLicenseBackImage] = useState<string | null>(null);
  const [insuranceImage, setInsuranceImage] = useState<string | null>(null);
  const [licensePlateImage, setLicensePlateImage] = useState<string | null>(null);
  const [proofOfOwnershipImage, setProofOfOwnershipImage] = useState<string | null>(null);

  // Submit handler
  const onSubmit = (data: FormData) => {
    console.log(data);
    router.push('/add-license'); // Adjust the route as needed
  };

  // Generic handler for single file uploads
  const handleSingleImageUpload = (
    event: ChangeEvent<HTMLInputElement>,
    setImage: React.Dispatch<React.SetStateAction<string | null>>,
    fieldName: keyof FormData
  ) => {
    const file = event.target.files?.[0];
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      setValue(fieldName, file);
    } else {
      alert('Please upload a valid image file (JPG or PNG).');
    }
  };

  // For Driver License: handle two images using one input
  const handleDriverLicenseUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      const imageUrl = URL.createObjectURL(file);
      // If front image is not set, update it; otherwise update the back image
      if (!driverLicenseFrontImage) {
        setDriverLicenseFrontImage(imageUrl);
        setValue('driverLicenseFront', file);
      } else if (!driverLicenseBackImage) {
        setDriverLicenseBackImage(imageUrl);
        setValue('driverLicenseBack', file);
      } else {
        alert('Both Driver License images have already been uploaded.');
      }
    } else {
      alert('Please upload a valid image file (JPG or PNG).');
    }
  };

  return (
   <div className="h-screen flex justify-center">
    <div className="w-full md:w-[80%]">
         {/* Header */}
      <div className="flex items-center p-4 border-b border-gray-300 justify-between">
        <div className="flex items-center gap-2">
          <button
            className="p-2 md:p-3 border border-gray-300 rounded-full"
            onClick={() => router.back()}
          >
            <Image src="/driver-arrow.svg" alt="Back Arrow" width={16} height={16} />
          </button>
          <span className="font-sans font-semibold text-[18px] md:text-xl">
            Add Driver Verification Information
          </span>
        </div>
        <button
          className="font-sans flex items-center text-gray-700 text-lg font-semibold px-6 rounded-[10px] py-[3px] bg-[#F5F5F5]"
          onClick={() => router.push('/driver')}
        >
          X
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex-grow overflow-auto p-4">
        <div className="flex flex-col gap-6">
          {/* Section 1: Driver License */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 ">
            {/* Left: Upload Image Div */}
            <div className="flex flex-col w-full md:w-1/2 h-[350px] ">
            <p className="text-base mb-3 font-sans font-medium">Driver License *</p>
            <div className="flex flex-col p-5  border border-gray-300 rounded-xl">
              <div className="flex flex-col items-center mb-3">
               
                <span className="text-sm font-sans text-[#9E9E9E]">
                  File should be JPG, PNG or Raw
                </span>
              </div>
              <div className="flex flex-col gap-4 border-2 border-dashed py-14 items-center justify-center border-gray-300 rounded-xl">
                <Image src="/tabler_upload.svg" alt="Upload Icon" width={30} height={30} />
                <p className="font-sans text-sm">Drag & Drop your file or</p>
                <input
                  type="file"
                  id="driver-license-upload"
                  className="hidden"
                  onChange={handleDriverLicenseUpload}
                />
                <label
                  htmlFor="driver-license-upload"
                  className="text-white px-4 py-3 rounded-[14px] text-sm shadow-lg shadow-[#F58735] bg-[#F58735] cursor-pointer"
                >
                  Browse File
                </label>
              </div>
            </div>
            </div>
           

            {/* Right: Preview Boxes for Front & Back Page */}
            <div className="w-full md:w-1/2  flex flex-col gap-4 ">
              {/* Front Page Preview */}
              <div className="flex flex-col gap-4 md:w-1/2 md:mt-[38px]">
                <div className="rounded-xl flex items-center border-2 border-dashed shadow-lg h-48 w-full relative">
                  {driverLicenseFrontImage ? (
                    <Image
                      src={driverLicenseFrontImage}
                      alt="Driver License Front"
                      fill
                      className="object-cover rounded-xl"
                    />
                  ) : (
                    <div className="m-auto">
                      <Image
                        src="/hugeicons_file-upload.svg"
                        alt="Front placeholder"
                        width={30}
                        height={30}
                      />
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-3 w-full">
                  <Image src="/ic_round-plus.svg" alt="Plus Icon" width={17} height={17} />
                  <span
                    className={`font-sans text-base ${
                      driverLicenseFrontImage ? 'text-black' : 'text-[#F58735]'
                    }`}
                  >
                    Front Page
                  </span>
                </div>
                {errors.driverLicenseFront && (
                  <span className="text-red-500 text-sm">
                    {errors.driverLicenseFront.message?.toString()}
                  </span>
                )}
              </div>
              {/* Back Page Preview */}
              <div className="flex flex-col gap-4 md:w-1/2">
                <div className="rounded-xl flex items-center border-2 border-dashed shadow-lg h-48 w-full relative">
                  {driverLicenseBackImage ? (
                    <Image
                      src={driverLicenseBackImage}
                      alt="Driver License Back"
                      fill
                      className="object-cover rounded-xl"
                    />
                  ) : (
                    <div className="m-auto">
                      <Image
                        src="/hugeicons_file-upload.svg"
                        alt="Back placeholder"
                        width={30}
                        height={30}
                      />
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-3 w-full">
                  <Image src="/ic_round-plus.svg" alt="Plus Icon" width={17} height={17} />
                  <span
                    className={`font-sans text-base ${
                      driverLicenseBackImage ? 'text-black' : 'text-[#F58735]'
                    }`}
                  >
                    Back Page
                  </span>
                </div>
                {errors.driverLicenseBack && (
                  <span className="text-red-500 text-sm">
                    {errors.driverLicenseBack.message?.toString()}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Section 2: Proof of Insurance */}
          <div className="flex flex-col md:flex-row gap-4 mb-3 md:gap-8 ">
            <div className="flex flex-col w-full md:w-1/2 h-[350px]">
            <p className="text-base mb-4 font-sans font-medium">Proof of Insurance *</p>
            {/* Left: Upload Image Div */}
            <div className="flex flex-col p-5  border border-gray-300 rounded-xl">
              <div className="flex flex-col items-center mb-3">
                
                <span className="text-sm font-sans text-[#9E9E9E]">
                  File should be JPG, PNG or Raw
                </span>
              </div>
              <div className="flex flex-col gap-4 border-2 border-dashed py-14 items-center justify-center border-gray-300 rounded-xl">
                <Image src="/tabler_upload.svg" alt="Upload Icon" width={30} height={30} />
                <p className="font-sans text-sm">Drag & Drop your file or</p>
                <input
                  type="file"
                  id="insurance-upload"
                  className="hidden"
                  onChange={(e) =>
                    handleSingleImageUpload(e, setInsuranceImage, 'insuranceFile')
                  }
                />
                <label
                  htmlFor="insurance-upload"
                  className="text-white px-4 py-3 rounded-[14px] text-sm shadow-lg shadow-[#F58735] bg-[#F58735] cursor-pointer"
                >
                  Browse File
                </label>
              </div>
            </div>
            </div>
            
            {/* Right: Preview with +Insurance */}
            <div className="w-full md:w-1/4  flex flex-col gap-4 items-center">
              <div className="rounded-xl md:mt-10 flex items-center border-2 border-dashed shadow-lg h-48 w-full relative">
                {insuranceImage ? (
                  <Image
                    src={insuranceImage}
                    alt="Insurance"
                    fill
                    className="object-cover rounded-xl"
                  />
                ) : (
                  <div className="m-auto">
                    <Image
                      src="/hugeicons_file-upload.svg"
                      alt="Insurance placeholder"
                      width={30}
                      height={30}
                    />
                  </div>
                )}
              </div>
              <div className="flex items-center gap-3 w-full">
                <Image src="/ic_round-plus.svg" alt="Plus Icon" width={17} height={17} />
                <span
                  className={`font-sans text-base ${
                    insuranceImage ? 'text-black' : 'text-[#F58735]'
                  }`}
                >
                  Insurance
                </span>
              </div>
              {errors.insuranceFile && (
                <span className="text-red-500 text-sm">
                  {errors.insuranceFile.message?.toString()}
                </span>
              )}
            </div>
          </div>

          {/* Section 3: License Plate */}
          <div className="flex flex-col md:flex-row gap-4 mb-3 md:gap-8 ">
            <div className="flex flex-col w-full md:w-1/2 h-[350px]">
            <p className="text-base mb-6 font-sans font-medium">License Plate *</p>
            {/* Left: Upload Image Div */}
            <div className="flex flex-col p-5  border border-gray-300 rounded-xl">
              <div className="flex flex-col items-center mb-3">
                
                <span className="text-sm font-sans text-[#9E9E9E]">
                  File should be JPG, PNG or Raw
                </span>
              </div>
              <div className="flex flex-col gap-4 border-2 border-dashed py-14 items-center justify-center border-gray-300 rounded-xl">
                <Image src="/tabler_upload.svg" alt="Upload Icon" width={30} height={30} />
                <p className="font-sans text-sm">Drag & Drop your file or</p>
                <input
                  type="file"
                  id="licenseplate-upload"
                  className="hidden"
                  onChange={(e) =>
                    handleSingleImageUpload(e, setLicensePlateImage, 'licensePlateFile')
                  }
                />
                <label
                  htmlFor="licenseplate-upload"
                  className="text-white px-4 py-3 rounded-[14px] text-sm shadow-lg shadow-[#F58735] bg-[#F58735] cursor-pointer"
                >
                  Browse File
                </label>
              </div>
            </div>
            </div>
            
            {/* Right: Preview with + License Plate */}
            <div className="w-full md:w-1/4  flex flex-col gap-4 items-center">
              <div className="rounded-xl md:mt-12 flex items-center border-2 border-dashed shadow-lg h-48 w-full relative">
                {licensePlateImage ? (
                  <Image
                    src={licensePlateImage}
                    alt="License Plate"
                    fill
                    className="object-cover rounded-xl"
                  />
                ) : (
                  <div className="m-auto">
                    <Image
                      src="/hugeicons_file-upload.svg"
                      alt="License Plate placeholder"
                      width={30}
                      height={30}
                    />
                  </div>
                )}
              </div>
              <div className="flex items-center gap-3 w-full">
                <Image src="/ic_round-plus.svg" alt="Plus Icon" width={17} height={17} />
                <span
                  className={`font-sans text-base ${
                    licensePlateImage ? 'text-black' : 'text-[#F58735]'
                  }`}
                >
                   License Plate
                </span>
              </div>
              {errors.licensePlateFile && (
                <span className="text-red-500 text-sm">
                  {errors.licensePlateFile.message?.toString()}
                </span>
              )}
            </div>
          </div>

          {/* Section 4: Proof of Ownership */}
          <div className="flex flex-col md:flex-row gap-4 mb-3 md:gap-8  ">
            <div className="flex flex-col w-full md:w-1/2 h-[350px] ">
            <p className="text-base mb-1 font-sans font-medium">Proof of Ownership *</p>
            <span className="text-sm font-sans mb-3 text-[#9E9E9E]">
                  Upload a logbook or sales agreement
                </span>
            {/* Left: Upload Image Div */}
            <div className="flex flex-col p-5  border border-gray-300 rounded-xl">
              <div className="flex flex-col items-center mb-3">
                
               
              </div>
              <div className="flex flex-col gap-4 border-2 border-dashed py-14 items-center justify-center border-gray-300 rounded-xl">
                <Image src="/tabler_upload.svg" alt="Upload Icon" width={30} height={30} />
                <p className="font-sans text-sm">Drag & Drop your file or</p>
                <input
                  type="file"
                  id="ownership-upload"
                  className="hidden"
                  onChange={(e) =>
                    handleSingleImageUpload(e, setProofOfOwnershipImage, 'proofOfOwnershipFile')
                  }
                />
                <label
                  htmlFor="ownership-upload"
                  className="text-white px-4 py-3 rounded-[14px] text-sm shadow-lg shadow-[#F58735] bg-[#F58735] cursor-pointer"
                >
                  Browse File
                </label>
              </div>
            </div>
            </div>
            
            {/* Right: Preview with + Logbook */}
            <div className="w-full md:w-1/4  flex flex-col gap-4 items-center ">
              <div className="rounded-xl md:mt-[62px] flex items-center border-2 border-dashed shadow-lg h-48 w-full relative">
                {proofOfOwnershipImage ? (
                  <Image
                    src={proofOfOwnershipImage}
                    alt="Proof of Ownership"
                    fill
                    className="object-cover rounded-xl"
                  />
                ) : (
                  <div className="m-auto">
                    <Image
                      src="/hugeicons_file-upload.svg"
                      alt="Ownership placeholder"
                      width={30}
                      height={30}
                    />
                  </div>
                )}
              </div>
              <div className="flex items-center gap-3 w-full">
                <Image src="/ic_round-plus.svg" alt="Plus Icon" width={17} height={17} />
                <span
                  className={`font-sans text-base ${
                    proofOfOwnershipImage ? 'text-black' : 'text-[#F58735]'
                  }`}
                >
                  Logbook
                </span>
              </div>
              {errors.proofOfOwnershipFile && (
                <span className="text-red-500 text-sm">
                  {errors.proofOfOwnershipFile.message?.toString()}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="flex md:justify-end  gap-4 mt-6">
          <button
            type="button"
            className="px-12 py-3 font-sans font-medium text-base border border-[#F58735] bg-white rounded-xl text-[#F58735]"
            onClick={() => router.push('/driver')}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-16 py-[13px] md:mr-[360px] font-sans font-medium text-base bg-[#F58735] rounded-xl text-white"
          >
            Next
          </button>
        </div>
      </form>
    </div>
    </div>
  
  );
};

export default AddDriverVerificationInfoPage;
