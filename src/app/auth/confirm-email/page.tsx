"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { createClient } from "@/utils/supabase/client";
import { toast } from "sonner";


// Create a component with your page content.
function ConfirmEmailContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [canResend, setCanResend] = useState(true);
  const [timer, setTimer] = useState(0);

  // Retrieve the email from the query parameters
  useEffect(() => {
    const emailFromQuery = searchParams.get("email");
    if (emailFromQuery) {
      setEmail(decodeURIComponent(emailFromQuery)); // Pre-fill the email input
    }
  }, [searchParams]);

  // Get timer from localStorage
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

  // Start countdown
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

  const handleConfirmEmail = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!email) {
      toast.error("Please enter a valid email address.");
      return; // Stop execution if no email is entered
    }
  
    if (!canResend) {
      toast.warning("Please wait before resending OTP.");
      return; // Prevent spamming the resend button
    }
  
    setCanResend(false);
    const cooldownTime = 30; // Cooldown in seconds
    setTimer(cooldownTime);
    const expiration = Date.now() + cooldownTime * 1000;
    const supabase = await createClient();
  
    const { data, error } = await supabase.auth.signInWithOtp({
      email: email,
    });
  
    localStorage.setItem("otpResendTime", expiration.toString());
    localStorage.setItem("email", email);
  
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("OTP has been sent! Check your email.");
      router.push("/auth/enter-otp");
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
            onClick={() => router.push("/")}
            className="self-start mb-12 text-sm font-sans font-semibold text-[#F58735BF] hover:underline"
          >
            <Image src="/back-arrow icon.svg" alt="Back" width={20} height={20} />
          </button>

          {/* Heading */}
          <div className="text-center mb-6">
            <h1 className="mb-4 font-sans text-2xl font-semibold">
              Confirm Your Email
            </h1>
            <p className="font-sans text-xs text-[#202224]">
              Confirm that this address is the one registered as platform admin.
            </p>
          </div>

          {/* Email Input */}
          <div className="mb-52">
            <label className="font-sans text-base font-semibold">
              Email address:
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mt-1 border border-gray-300 text-sm font-sans font-normal rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#F58735BF]"
              required
            />
          </div>

          {/* Confirm Button */}
          <div className="flex items-center justify-center">
            <button
              onClick={handleConfirmEmail}
              className="w-[80%] bg-[#F58735BF] text-white py-2 rounded-[8px] font-sans font-semibold hover:bg-[#e0762e] transition-colors"
            >
              Confirm
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

// Wrap ConfirmEmailContent in a Suspense boundary for useSearchParams
export default function ConfirmEmailPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ConfirmEmailContent />
    </Suspense>
  );
}
