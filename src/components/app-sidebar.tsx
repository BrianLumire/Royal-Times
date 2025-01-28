"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface SidebarProps {
  isMobileSidebarOpen: boolean;
  toggleMobileSidebar: () => void;
  isCollapsed: boolean;
}

export default function Sidebar({
  isMobileSidebarOpen,
  toggleMobileSidebar,
  isCollapsed,
}: SidebarProps) {
  const pathname = usePathname(); // Get current path using usePathname
  const [showLogoutModal, setShowLogoutModal] = useState(false); // State to control logout modal

  // Function to get the icon for a page
  const getIconForPage = (page: string) => {
    // If the page is the active one, return the active icon
    if (pathname === page) {
      switch (page) {
        case "/dashboard":
          return "/dashbord-icon w.svg"; // Active icon for Dashboard
        case "/ride":
          return "/ride-icon w.svg"; // Active icon for Ride
        case "/parcels-delivery":
          return "/parcel-icon w.svg"; // Active icon for Parcel Delivery
        case "/driver":
          return "/driver-icon w.svg"; // Active icon for Driver
        case "/customer":
          return "/customer-icon w.svg"; // Active icon for Customer
        case "/finances":
          return "/finance-icon w.svg"; // Active icon for Finances
        case "/analytics":
          return "/analytics-icon  w.svg"; // Active icon for Analytics
        case "/profiles":
          return "/profile-icon w.svg"; // Active icon for Profiles
        case "/logout":
          return "/logout-icon.svg"; // Active icon for Logout
        default:
          return "/default-active.svg"; // Fallback active icon
      }
    }

    // If the page is not active, return the default icon
    switch (page) {
      case "/dashboard":
        return "/dashboard-icon.svg";
      case "/ride":
        return "/ride-icon.svg";
      case "/parcels-delivery":
        return "/parcel-icon.svg";
      case "/driver":
        return "/driver-icon.svg";
      case "/customer":
        return "/customer-icon.svg";
      case "/finances":
        return "/finances-icon.svg";
      case "/analytics":
        return "/analytics-icon.svg";
      case "/profiles":
        return "/profile-icon.svg";
      case "/logout":
        return "/logout-icon.svg";
      default:
        return "/default.svg";
    }
  };

  // Close sidebar on mobile when a link is clicked
  const handleLinkClick = () => {
    if (isMobileSidebarOpen) {
      toggleMobileSidebar();
    }
  };

  // Handle Logout Click
  const handleLogoutClick = () => {
    setShowLogoutModal(true); // Show the logout modal
  };

  // Handle Confirm Logout
  const handleConfirmLogout = () => {
    // Clear tokens from localStorage
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    // Redirect to the login page
    window.location.href = "/"; // Redirect to the root path (or your login page)
  };

  // Handle Cancel Logout
  const handleCancelLogout = () => {
    setShowLogoutModal(false); // Hide the logout modal
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`transition-all duration-300 ${
          isCollapsed ? "w-16" : "w-48"
        } fixed md:relative h-full md:block z-40  pb-6 ${
          isMobileSidebarOpen ? "block" : "hidden"
        } bg-background text-foreground`} // Use default theme colors
      >
        {/* Sidebar Header */}
        <div className="flex justify-end p-2">
          {/* Close Button (Mobile) */}
          <button
            onClick={toggleMobileSidebar}
            className="text-foreground md:hidden focus:outline-none"
          >
            <X size={24} />
          </button>
        </div>

        {/* Logo Container - Hidden when collapsed, visible when expanded */}
        <div
          className={`flex items-center justify-center py-3 md:py-1 ${
            isCollapsed ? "hidden" : "block"
          }`}
        >
          <Image src="/main-logo.png" alt="Main Logo" width={130} height={20} />
        </div>

        {/* Sidebar Content */}
        <nav className="flex flex-col gap-5 p-4">
          {/* First Section */}
          <div className="flex flex-col space-y-2 pb-24">
            <Link href="/dashboard" onClick={handleLinkClick}>
              <div
                className={`flex items-center space-x-4 p-2 rounded-r-xl  ${
                  pathname === "/dashboard" ? "text-white bg-[#F58735]" : ""
                }`}
              >
                <Image
                  src={getIconForPage("/dashboard")}
                  alt="Dashboard"
                  width={25}
                  height={25}
                />
                {!isCollapsed && (
                  <span className="text-sm font-medium font-sans">Dashboard</span>
                )}
              </div>
            </Link>
            <Link href="/ride" onClick={handleLinkClick}>
              <div
                className={`flex items-center space-x-4 p-2 rounded-r-xl  ${
                  pathname === "/ride" ? "text-white bg-[#F58735]" : ""
                }`}
              >
                <Image src={getIconForPage("/ride")} alt="Ride" width={25} height={25} />
                {!isCollapsed && <span className="text-sm font-medium font-sans">Ride</span>}
              </div>
            </Link>
            <Link href="/parcels-delivery" onClick={handleLinkClick}>
              <div
                className={`flex items-center space-x-4 p-2 rounded-r-xl  ${
                  pathname === "/parcels-delivery" ? "text-white bg-[#F58735]" : ""
                }`}
              >
                <Image
                  src={getIconForPage("/parcels-delivery")}
                  alt="Parcel Delivery"
                  width={25}
                  height={25}
                />
                {!isCollapsed && (
                  <span className="text-sm font-medium font-sans">Parcel Delivery</span>
                )}
              </div>
            </Link>
            <Link href="/driver" onClick={handleLinkClick}>
              <div
                className={`flex items-center space-x-4 p-2 rounded-r-xl  ${
                  pathname === "/driver" ? "text-white bg-[#F58735]" : ""
                }`}
              >
                <Image src={getIconForPage("/driver")} alt="Driver" width={25} height={25} />
                {!isCollapsed && <span className="text-sm font-medium font-sans">Driver</span>}
              </div>
            </Link>
            <Link href="/customer" onClick={handleLinkClick}>
              <div
                className={`flex items-center space-x-4 p-2 rounded-r-xl  ${
                  pathname === "/customer" ? "text-white bg-[#F58735]" : ""
                }`}
              >
                <Image
                  src={getIconForPage("/customer")}
                  alt="Customer"
                  width={25}
                  height={25}
                />
                {!isCollapsed && <span className="text-sm font-medium font-sans">Customer</span>}
              </div>
            </Link>
            <Link href="/finances" onClick={handleLinkClick}>
              <div
                className={`flex items-center space-x-4 p-2 rounded-r-xl  ${
                  pathname === "/finances" ? "text-white bg-[#F58735]" : ""
                }`}
              >
                <Image
                  src={getIconForPage("/finances")}
                  alt="Finances"
                  width={25}
                  height={25}
                />
                {!isCollapsed && <span className="text-sm font-medium font-sans">Finances</span>}
              </div>
            </Link>
            <Link href="/analytics" onClick={handleLinkClick}>
              <div
                className={`flex items-center space-x-4 p-2 rounded-r-xl  ${
                  pathname === "/analytics" ? "text-white bg-[#F58735]" : ""
                }`}
              >
                <Image
                  src={getIconForPage("/analytics")}
                  alt="Analytics"
                  width={25}
                  height={25}
                />
                {!isCollapsed && <span className="text-sm font-medium font-sans">Analytics</span>}
              </div>
            </Link>
          </div>

          {/* Line Separator */}
          <div className="border-t border-gray-200 my-4"></div>

          {/* Second Section */}
          <div className="flex flex-col space-y-2">
            <Link href="/profiles" onClick={handleLinkClick}>
              <div
                className={`flex items-center space-x-4 p-2 rounded-r-xl  ${
                  pathname === "/profiles" ? "text-white bg-[#F58735]" : ""
                }`}
              >
                <Image
                  src={getIconForPage("/profiles")}
                  alt="Profiles"
                  width={25}
                  height={25}
                />
                {!isCollapsed && <span className="text-sm font-medium font-sans">Profiles</span>}
              </div>
            </Link>
            <button onClick={handleLogoutClick}>
              <div
                className={`flex items-center space-x-4 p-2 rounded-r-xl  ${
                  pathname === "/logout" ? "text-white bg-[#F58735]" : ""
                }`}
              >
                <Image src={getIconForPage("/logout")} alt="Logout" width={25} height={25} />
                {!isCollapsed && <span className="text-sm font-medium font-sans">Logout</span>}
              </div>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Overlay */}
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleMobileSidebar}
        />
      )}

      {/* Logout Modal */}
      {showLogoutModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
          onClick={handleCancelLogout}
        >
          <div
            className="bg-white p-5 rounded-md shadow-lg w-[80%] md:w-1/4 lg:1/5"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg text-center font-sans font-semibold text-black">
              Are you sure you want to log out?
            </h2>
            <div className="mt-9 flex gap-5 items-center justify-center">
              <button
                onClick={handleCancelLogout}
                className="px-4 py-2 font-sans text-base bg-gray-400 text-white rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmLogout}
                className="px-4 font-sans text-base py-2 bg-red-600 text-white rounded"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}