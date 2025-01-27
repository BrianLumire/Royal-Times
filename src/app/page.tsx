"use client";

import Image from 'next/image';
import React, { useState } from 'react';

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="h-screen flex">
      {/* Left side */}
      <div className="w-full md:w-1/2 bg-[#F58735BF] flex flex-col items-center justify-center">
        <div className="rounded-xl bg-white mb-12 flex flex-col p-8 pb-12 w-[90%] max-w-md">
          <div className="text-center  mb-6">
            <h1 className=" mb-4 font-sans text-2xl font-semibold">Login As Admin</h1>
            <p className="font-sans text-sm text-[#202224]">
              Please enter your email and password to continue
            </p>
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label className="font-sans  text-base font-semibold">Email address:</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 mt-1 border border-gray-300 text-sm font-sans font-normal rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#F58735BF]"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="font-sans text-base font-semibold">Password:</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                className="w-full p-2 mt-1 border border-gray-300 text-sm font-sans font-normal rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#F58735BF]"
              />
              <button
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-2 flex items-center text-sm text-gray-500"
              >
                {showPassword ? (
                  <Image src="/invisible.png" alt="Hide password" width={20} height={20} />
                ) : (
                  <Image src="/View-password.svg" alt="Show password" width={20} height={20} />
                )}
              </button>
            </div>
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center mb-8 ">
            <input
              type="checkbox"
              id="rememberMe"
              className="mr-2 accent-[#F58735BF]"
            />
            <label htmlFor="rememberMe" className="font-sans font-normal text-sm text-[#202224]">
              Remember Me
            </label>
          </div>

          {/* Sign In Button */}
          <div className=" flex items-center justify-center pb-10">
          <button className="w-[80%] bg-[#F58735BF] text-white py-2 rounded-[8px] font-sans font-semibold hover:bg-[#e0762e] transition-colors">
            Sign In
          </button>
          </div>
          
        </div>
        <div className="">
          <p className='font-sans text-white text-xs'>@2025.Royal Times</p>
        </div>
      </div>

      {/* Right side */}
      <div className="hidden md:flex w-1/2 items-center justify-center">
        <div className="w-[50%] h-1/2 flex items-center justify-center">
          <Image
            src="/Computer login-rafiki 1.svg"
            alt="Login illustration"
            width={80}
            height={80}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;