"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { createClient } from "../../../utils/supabase/client";

const EnterPasswordPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Retrieve the email from the query parameters
  const email = searchParams.get("email") || "";

  const handleBack = () => {
    router.push("/auth/enter-otp"); // Navigate back to the OTP page
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleComplete = async (e: React.FormEvent) => {
    e.preventDefault();

    const supabase = await createClient();

    // Validate passwords
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    } else {
      const { data, error } = await supabase.rpc("change_user_password_web", {
        new_plain_password: password,
      });
      console.log(data, error);
      if (error) {
        alert(error.message);
        return;
      } else if (data) {
        // TODO: Add logic to update the password (e.g., API call)
        alert("Password updated successfully!");
        router.push("/dashboard"); // Redirect to the sign-in page after successful password update
        return;
      }
    }
  };
  return (
    <div className="h-screen flex">
      {/* Left side */}
      <div className="relative w-full md:w-1/2 bg-[#F58735BF] flex flex-col items-center justify-center">
        {/* White Background Form */}
        <div className="rounded-xl bg-white flex flex-col p-8 pb-12 w-[90%] max-w-md">
          {/* Back Button */}
          <button
            onClick={handleBack}
            className="self-start mb-12 text-sm font-sans font-semibold text-[#F58735BF] hover:underline"
          >
            <Image src="/back-arrow icon.svg" alt="" width={20} height={20} />
          </button>

          {/* Heading */}
          <div className="text-center mb-6">
            <h1 className="mb-1 font-sans text-2xl font-semibold">
              Enter a New Password
            </h1>
            <p className="font-sans text-xs text-[#202224]">
              Enter and repeat a new password to use from now on
            </p>
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="font-sans text-base font-semibold">
              Password:
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 mt-1 border border-gray-300 text-sm font-sans font-normal rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#F58735BF]"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-2 flex items-center text-sm text-gray-500"
              >
                {showPassword ? (
                  <Image
                    src="/invisible.png"
                    alt="Hide password"
                    width={20}
                    height={20}
                  />
                ) : (
                  <Image
                    src="/View-password.svg"
                    alt="Show password"
                    width={20}
                    height={20}
                  />
                )}
              </button>
            </div>
          </div>

          {/* Confirm Password Input */}
          <div className="mb-20">
            <label className="font-sans text-base font-semibold">
              Confirm Password:
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-2 mt-1 border border-gray-300 text-sm font-sans font-normal rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#F58735BF]"
                required
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute inset-y-0 right-2 flex items-center text-sm text-gray-500"
              >
                {showConfirmPassword ? (
                  <Image
                    src="/invisible.png"
                    alt="Hide password"
                    width={20}
                    height={20}
                  />
                ) : (
                  <Image
                    src="/View-password.svg"
                    alt="Show password"
                    width={20}
                    height={20}
                  />
                )}
              </button>
            </div>
          </div>

          {/* Complete Button */}
          <div className="flex items-center justify-center">
            <button
              onClick={handleComplete}
              className="w-[80%] bg-[#F58735BF] text-white py-2 rounded-[8px] font-sans font-semibold hover:bg-[#e0762e] transition-colors"
            >
              Complete
            </button>
          </div>
        </div>

        {/* Footer Text */}
        <div className="absolute bottom-4 w-full text-center">
          <p className="font-sans text-white text-xs">@2025.Royal Times</p>
        </div>
      </div>

      {/* Right side */}
      <div className="hidden md:flex w-1/2 items-center justify-center">
        <div className="w-[60%] h-[60%] flex items-center justify-center">
          <Image
            src="/Two factor authentication-amico 1.svg"
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

export default EnterPasswordPage;
