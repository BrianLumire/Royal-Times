"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // Initialize the router

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Mock authentication function
  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form submission

    // Mock credentials (replace with actual backend logic later)
    const mockEmail = 'admin@example.com';
    const mockPassword = 'password123';

    if (email === mockEmail && password === mockPassword) {
      // Redirect to the dashboard on successful login
      router.push('/dashboard');
    } else {
      alert('Invalid email or password'); // Show error for invalid credentials
    }
  };

  return (
    <div className="h-screen flex">
      {/* Left side */}
      <div className="relative w-full md:w-1/2 bg-[#F58735BF] flex flex-col items-center justify-center">
        {/* White Login Form */}
        <form onSubmit={handleSignIn} className="rounded-xl bg-white flex flex-col p-8 pb-12 w-[90%] max-w-md">
          <div className="text-center mb-6">
            <h1 className="mb-4 font-sans text-2xl font-semibold">Login As Admin</h1>
            <p className="font-sans text-sm text-[#202224]">
              Please enter your email and password to continue
            </p>
          </div>

          {/* Email Input */}
          <div className="mb-4">
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

          {/* Password Input */}
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <label className="font-sans text-base font-semibold">Password:</label>
              <p
  className="font-sans text-sm font-normal text-[#F58735] hover:underline cursor-pointer"
  onClick={() => router.push(`/auth/confirm-email?email=${encodeURIComponent(email)}`)}
>
  Forgot Password ?
</p>
            </div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 mt-1 border border-gray-300 text-sm font-sans font-normal rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#F58735BF]"
                required
              />
              <button
                type="button" // Prevent form submission
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
          <div className="flex items-center mb-8">
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
          <div className="flex items-center justify-center pb-10">
            <button
              type="submit"
              className="w-[80%] bg-[#F58735BF] text-white py-2 rounded-[8px] font-sans font-semibold hover:bg-[#e0762e] transition-colors"
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Footer Text */}
        <div className="absolute bottom-4 w-full text-center">
          <p className="font-sans text-white text-xs">@2025.Royal Times</p>
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