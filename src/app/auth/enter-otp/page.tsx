"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { createClient } from "../../../utils/supabase/client";

// Main content of the Enter OTP page
function EnterOtpContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]); // OTP state
  const [canResend, setCanResend] = useState(true);
  const [timer, setTimer] = useState(0);

  // Retrieve the email from the query parameters
  const email = searchParams.get("email") || "";

  const handleBack = () => {
    router.push("/auth/confirm-email"); // Navigate back to the confirm-email page
  };

  const handleContinue = async (e: React.FormEvent) => {
    e.preventDefault();
    const enteredOtp = otp.join(""); // Combine OTP digits into a single string

    const supabase = await createClient();
    // Retrieve email from localStorage (as saved on the previous page)
    const emailFromLocal = localStorage.getItem("email") as string;
    const { error } = await supabase.auth.verifyOtp({
      email: emailFromLocal,
      token: enteredOtp,
      type: "email",
    });

    if (error) {
      alert(error.message);
    }
    // Optionally, navigate to the next page upon successful verification
  };

  const handleOtpChange = (index: number, value: string) => {
    if (/^\d*$/.test(value) && value.length <= 1) {
      // Allow only digits and limit to 1 character per box
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus the next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  // Get timer from localStorage (if present)
  useEffect(() => {
    const savedTime = localStorage.getItem("otpResendTime");
    if (savedTime) {
      const remainingTime = Math.max(
        0,
        Math.floor((parseInt(savedTime) - Date.now()) / 1000)
      );
      if (remainingTime > 0) {
        setTimer(remainingTime);
        setCanResend(false);
      }
    }
  }, []);

  // Start the countdown timer
  useEffect(() => {
    let interval: ReturnType<typeof setTimeout>;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            setCanResend(true);
            localStorage.removeItem("otpResendTime");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const resendCode = async () => {
    if (!canResend) return;

    try {
      setCanResend(false);
      const cooldownTime = 30; // Cooldown in seconds
      setTimer(cooldownTime);
      const expiration = Date.now() + cooldownTime * 1000;

      localStorage.setItem("otpResendTime", expiration.toString());
      const emailFromLocal = localStorage.getItem("email");

      if (emailFromLocal == null) {
        router.push("/auth/confirm-email");
      }

      const supabase = createClient();
      const { error } = await supabase.auth.signInWithOtp({
        email: emailFromLocal as string,
      });

      if (error) {
        alert(error.message);
      } else {
        alert("OTP sent.");
      }
      alert("OTP resent successfully!");
    } catch (error) {
      console.error("Error resending OTP:", error);
      setCanResend(true); // Allow retry if failed
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
            <Image src="/back-arrow icon.svg" alt="Back" width={20} height={20} />
          </button>

          {/* Heading */}
          <div className="text-center mb-6">
            <h1 className="mb-1 font-sans text-2xl font-semibold">
              Enter Verification Code
            </h1>
            <p className="font-sans text-xs text-[#202224]">
              Enter the code sent to{" "}
              <span className="font-semibold">{email}</span>
            </p>
          </div>

          {/* OTP Input */}
          <div className="mb-2">
            <label className="font-sans text-base font-semibold">
              Enter Code:
            </label>
            <div className="flex gap-2 mt-1">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  className="w-12 h-12 p-2 border border-gray-300 text-center font-sans text-lg rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#F58735BF]"
                  maxLength={1}
                  inputMode="numeric"
                />
              ))}
            </div>
          </div>

          {/* Request Code Link */}
          <div className="mb-48">
            <p className="font-sans text-xs text-[#202224]">
              Didn&apos;t get the code?{" "}
              <button
                onClick={resendCode}
                disabled={!canResend}
                className="text-[#F58735BF] font-semibold hover:underline cursor-pointer"
              >
                {canResend ? "Request Code" : `Wait for ${timer}s`}
              </button>
            </p>
          </div>

          {/* Continue Button */}
          <div className="flex items-center justify-center">
            <button
              onClick={handleContinue}
              className="w-[80%] bg-[#F58735BF] text-white py-2 rounded-[8px] font-sans font-semibold hover:bg-[#e0762e] transition-colors"
            >
              Continue
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
}

// Default export wrapped in a Suspense boundary
export default function EnterOtpPageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EnterOtpContent />
    </Suspense>
  );
}
