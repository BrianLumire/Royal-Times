"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';

// Define schema for validation
const schema = z.object({
  license: z.string().min(1, { message: 'License is required' }),
  fuelType: z.enum(['Electric', 'Fuel'], { message: 'Fuel Type is required' }),
  year: z.string().min(4, { message: 'Year is required' }),
  vehicleClass: z.string().min(1, { message: 'Vehicle Class is required' }),
  brand: z.string().min(1, { message: 'Brand is required' }),
});

// Infer form data type
type FormData = z.infer<typeof schema>;

const AddLicenseInformation = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [selectedFuel, setSelectedFuel] = useState<string | null>(null);

  const onSubmit = (data: FormData) => {
    console.log(data);
    router.push('/add-car-images'); // Navigate to next page
  };

  return (
    <div className="h-screen flex justify-center">
      <div className="w-full md:w-[80%]">
        {/* Header */}
        <div className="flex items-center p-4 border-b border-gray-300 justify-between">
          <div className="flex items-center gap-2">
            <button
              className="p-2 md:p-3 border border-gray-300 rounded-full"
              onClick={() => router.push('/add-verification')}
            >
              <Image src="/driver-arrow.svg" alt="Back" width={16} height={16} />
            </button>
            <span className="font-sans font-semibold text-[18px] md:text-xl">
              Add Driving Information
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
          {/* Form Section */}
          <div className="flex flex-col p-4 md:flex-row gap-3 md:gap-8">
            <div className="flex flex-col w-full md:w-[50%]">
              {/* License Input */}
              <div className="mb-4">
                <label className="text-[16px] md:text-base font-sans font-medium">License*</label>
                <Controller
                  name="license"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      placeholder="License Number"
                      className="border border-gray-300 p-3 text-base mt-1 w-full rounded-[10px]"
                    />
                  )}
                />
                {errors.license && <span className="text-red-500 text-sm">{errors.license.message}</span>}
              </div>

              {/* Fuel Type */}
              <div className="flex flex-col gap-2 mb-3">
                <p className="text-[16px] md:text-base font-sans font-medium">Fuel Type*</p>
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    className={`p-4 border ${selectedFuel === 'Electric' ? 'border-[#F58735]' : 'border-gray-300'} bg-[#F587351A] text-[#F58735] rounded-[24px]`}
                    onClick={() => {
                      setSelectedFuel('Electric');
                      setValue('fuelType', 'Electric');
                    }}
                  >
                    Electric
                  </button>
                  <button
                    type="button"
                    className={`py-4 px-8 border ${selectedFuel === 'Fuel' ? 'border-[#F58735]' : 'border-gray-300'} bg-[#F587351A] text-[#F58735] rounded-[24px]`}
                    onClick={() => {
                      setSelectedFuel('Fuel');
                      setValue('fuelType', 'Fuel');
                    }}
                  >
                    Fuel
                  </button>
                </div>
                {errors.fuelType && <span className="text-red-500 text-sm">{errors.fuelType.message}</span>}
              </div>

              {/* Year Input */}
              <div className="mb-4">
                <label className="text-[16px] md:text-base font-sans font-medium">Year*</label>
                <Controller
                  name="year"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      placeholder="Year"
                      className="border border-gray-300 p-3 text-base mt-1 w-full rounded-[10px]"
                    />
                  )}
                />
                {errors.year && <span className="text-red-500 text-sm">{errors.year.message}</span>}
              </div>
            </div>

            <div className="flex flex-col w-full md:w-[50%]">
              {/* Vehicle Class Input */}
              <div className="mb-4">
                <label className="text-[16px] md:text-base font-sans font-medium">Vehicle Class*</label>
                <Controller
                  name="vehicleClass"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      placeholder="Vehicle Class"
                      className="border border-gray-300 p-3 text-base mt-1 w-full rounded-[10px]"
                    />
                  )}
                />
                {errors.vehicleClass && <span className="text-red-500 text-sm">{errors.vehicleClass.message}</span>}
              </div>

              {/* Brand Input */}
              <div className="mb-4">
                <label className="text-[16px] md:text-base font-sans font-medium">Brand*</label>
                <Controller
                  name="brand"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      placeholder="Brand"
                      className="border border-gray-300 p-3 text-base mt-1 w-full rounded-[10px]"
                    />
                  )}
                />
                {errors.brand && <span className="text-red-500 text-sm">{errors.brand.message}</span>}
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4 justify-center p-4">
            <button type="button" className="px-12 md:ml-96 py-3 border border-[#F58735] bg-white rounded-xl text-[#F58735]" onClick={() => router.push('/driver')}>Cancel</button>
            <button type="submit" className="px-16 py-[13px] bg-[#F58735] rounded-xl text-white">Next</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddLicenseInformation;
