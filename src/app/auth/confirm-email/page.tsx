"use client";

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';

const EnterEmailPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState('');
  const [initialEmail, setInitialEmail] = useState('');

  // Retrieve the email from the query parameters
  useEffect(() => {
    const emailFromQuery = searchParams.get('email');
    if (emailFromQuery) {
      setInitialEmail(decodeURIComponent(emailFromQuery));
      setEmail(decodeURIComponent(emailFromQuery)); // Pre-fill the email input
    }
  }, [searchParams]);

  const handleBack = () => {
    router.push('/'); // Navigate back to the sign-in page
  };

  const handleConfirmEmail = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate that the entered email matches the initial email
    if (email === initialEmail) {
      router.push('/auth/enter-otp'); // Navigate to the OTP page
    } else {
      alert('Please enter the email address used for sign-in.'); // Show error if emails don't match
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
            <h1 className="mb-4 font-sans text-2xl font-semibold">Confirm Your Email</h1>
            <p className="font-sans text-xs text-[#202224]">
              Confirm that this address is the one registered as platform admin.
            </p>
          </div>

          {/* Email Input */}
          <div className="mb-52">
            <label className="font-sans text-base font-semibold">Email address:</label>
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
};

export default EnterEmailPage;