"use client";
import Image from 'next/image';
import React, { useState, ChangeEvent } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';

// Define the schema for validation
const schema = z.object({
  fullName: z.string().min(1, { message: 'Full Name is required' }),
  sex: z.enum(['Male', 'Female'], { message: 'Sex is required' }),
  dateOfBirth: z
    .string()
    .min(1, { message: 'Date of Birth is required' })
    .regex(/^\d{2}\/\d{2}\/\d{4}$/, { message: 'Date must be in DD/MM/YYYY format' }),
  phoneNumber: z
    .string()
    .min(10, { message: 'Phone Number must be 10 digits' })
    .max(10, { message: 'Phone Number must be 10 digits' }),
  frontPageImage: z.any().refine((file) => file, { message: 'Front Page Image is required' }),
  backPageImage: z.any().refine((file) => file, { message: 'Back Page Image is required' }),
});

// Infer the form data type from the schema
type FormData = z.infer<typeof schema>;

const AddDriverPage = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [selectedSex, setSelectedSex] = useState<string | null>(null);
  const [frontPageImage, setFrontPageImage] = useState<string | null>(null);
  const [backPageImage, setBackPageImage] = useState<string | null>(null);

  const onSubmit = (data: FormData) => {
    console.log(data);
    router.push('/add-information'); // Navigate to the next page
  };

  const handleImageUpload = (
    event: ChangeEvent<HTMLInputElement>,
    setImage: React.Dispatch<React.SetStateAction<string | null>>,
    fieldName: keyof FormData
  ) => {
    const file = event.target.files?.[0];
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      setValue(fieldName, file); // Set the file in react-hook-form
    } else {
      alert('Please upload a valid image file (JPG or PNG).');
    }
  };

  return (
    <div className="h-screen flex justify-center">
      <div className="w-full md:w-[80%]">
        <div className="flex items-center p-4 border-b border-gray-300 justify-between">
          <div className="flex items-center gap-2">
            <button
              className="p-2 md:p-3 border border-gray-300 rounded-full"
              onClick={() => router.push('/driver')}
            >
              <Image src="/driver-arrow.svg" alt="Driver Arrow" width={16} height={16} />
            </button>
            <span className="font-sans font-semibold text-[18px] md:text-xl">
              Add a Driver
            </span>
          </div>
          <button
            className="font-sans flex items-center text-gray-700 text-lg font-semibold px-6 rounded-[10px] py-[3px] bg-[#F5F5F5]"
            onClick={() => router.push('/driver')}
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
                  htmlFor="fullName"
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
              <div className="flex flex-col gap-2 mb-3">
                <p className="text-[16px] md:text-base font-sans font-medium">Sex*</p>
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    className={`p-4 border ${
                      selectedSex === 'Male' ? 'border-[#F58735]' : 'border-gray-300'
                    } bg-[#F587351A] text-[#F58735] rounded-[24px]`}
                    onClick={() => {
                      setSelectedSex('Male');
                      setValue('sex', 'Male'); // Set the value in react-hook-form
                    }}
                  >
                    Male
                  </button>
                  <button
                    type="button"
                    className={`p-4 border ${
                      selectedSex === 'Female' ? 'border-[#F58735]' : 'border-gray-300'
                    } bg-[#F587351A] text-[#F58735] rounded-[24px]`}
                    onClick={() => {
                      setSelectedSex('Female');
                      setValue('sex', 'Female'); // Set the value in react-hook-form
                    }}
                  >
                    Female
                  </button>
                </div>
                {errors.sex && (
                  <span className="text-red-500 text-sm">
                    {errors.sex.message?.toString()}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col w-full md:w-[50%]">
              <div className="mb-4">
                <label
                  className="text-[16px] md:text-base font-sans font-medium"
                  htmlFor="dateOfBirth"
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
              <div className="mb-4">
                <label
                  className="font-medium text-[16px] md:text-base font-sans"
                  htmlFor="phoneNumber"
                >
                  Phone Number*
                </label>
                <Controller
                  name="phoneNumber"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      id="phoneNumber"
                      type="text"
                      placeholder="Phone Number"
                      className="border border-gray-300 p-3 text-base mt-1 w-full rounded-[10px]"
                    />
                  )}
                />
                {errors.phoneNumber && (
                  <span className="text-red-500 text-sm">
                    {errors.phoneNumber.message?.toString()}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col p-4 md:flex-row gap-3 md:gap-8">
            {/* Upload Image Div */}
            <div className="flex flex-col p-5 w-full h-[350px] border border-gray-300 rounded-xl">
              <div className="flex flex-col items-center mb-3">
                <p className="text-sm font-sans font-medium">Upload Your Images</p>
                <span className="text-sm font-sans text-[#9E9E9E]">
                  File should be JPG, PNG or Raw
                </span>
              </div>
              <div className="flex flex-col gap-4 border-2 border-dashed py-14 items-center justify-center border-gray-300 rounded-xl  ">
                <Image src="/tabler_upload.svg" alt="Upload Icon" width={30} height={30} />
                <p className="font-sans text-sm">Drag & Drop your file or</p>
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  onChange={(e) => {
                    if (!frontPageImage) {
                      handleImageUpload(e, setFrontPageImage, 'frontPageImage');
                    } else {
                      handleImageUpload(e, setBackPageImage, 'backPageImage');
                    }
                  }}
                />
                <label
                  htmlFor="file-upload"
                  className="text-white px-4 py-3 rounded-[14px] text-sm shadow-lg shadow-[#F58735] bg-[#F58735] cursor-pointer"
                >
                  Browse File
                </label>
              </div>
            </div>

            {/* Front and Back Page Sections */}
            <div className="w-full flex flex-col mb-5">
              <div className="flex flex-col">
                {/* Front Page */}
                <div className="flex flex-col gap-4 mb-5 md:w-1/2">
                  <div className="rounded-xl flex items-center border-2 border-dashed shadow-lg h-48 w-full relative">
                    {frontPageImage ? (
                      <Image
                        src={frontPageImage}
                        alt="Front Page"
                        fill
                        className="object-cover rounded-xl"
                      />
                    ) : (
                      <Image
                        src="/hugeicons_file-upload.svg"
                        alt="Front placeholder"
                        width={30}
                        height={30}
                        className="m-auto"
                      />
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <Image src="/ic_round-plus.svg" alt="Plus Icon" width={17} height={17} />
                    <span
                      className={`font-sans text-base ${
                        frontPageImage ? 'text-black' : 'text-[#F58735]'
                      }`}
                    >
                      Front Page
                    </span>
                  </div>
                </div>

                {/* Back Page */}
                <div className="flex flex-col gap-4 mb-4 md:w-1/2">
                  <div className="rounded-xl flex items-center border-2 border-dashed shadow-lg h-48 w-full relative">
                    {backPageImage ? (
                      <Image
                        src={backPageImage}
                        alt="Back Page"
                        fill
                        className="object-cover rounded-xl"
                      />
                    ) : (
                      <Image
                        src="/hugeicons_file-upload.svg"
                        alt="Back placeholder"
                        width={30}
                        height={30}
                        className="m-auto"
                      />
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <Image src="/ic_round-plus.svg" alt="Plus Icon" width={17} height={17} />
                    <span
                      className={`font-sans text-base ${
                        backPageImage ? 'text-black' : 'text-[#F58735]'
                      }`}
                    >
                      Back Page
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className="px-12 py-3 font-sans font-medium text-base border border-[#F58735] bg-white rounded-xl text-[#F58735]"
                  onClick={() => router.push('/driver')}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-16 py-[13px] font-sans font-medium text-base bg-[#F58735] rounded-xl text-white"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDriverPage;