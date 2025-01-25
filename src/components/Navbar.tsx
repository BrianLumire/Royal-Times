"use client";

import { Menu, PanelLeftOpen, PanelLeftClose } from "lucide-react"; // Import Lucide icons
import { ModeToggle } from "@/components/Mode-toggle";
import Image from "next/image";

interface NavbarProps {
  toggleMobileSidebar: () => void;
  toggleCollapse: () => void;
  isCollapsed: boolean;
}

export default function Navbars({
  toggleMobileSidebar,
  toggleCollapse,
  isCollapsed,
}: NavbarProps) {
  return (
    <div className="md:pt-7 justify-between  pt-3 md:mb-3 flex items-center sticky top-0 z-20 pb-3  bg-background">
      {/* left div */}
      <div className="flex gap-2">
           {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileSidebar}
        className="text-foreground md:hidden focus:outline-none"
      >
        <Menu size={24} /> {/* Use Lucide Menu icon */}
      </button>

      {/* Collapse/Expand Button for large screens */}
      <button
        onClick={toggleCollapse}
        className="hidden md:block text-foreground focus:outline-none"
      >
        {isCollapsed ? (
          <PanelLeftOpen size={20} /> 
        ) : (
          <PanelLeftClose size={20} /> 
        )}
      </button>
      <div className="flex-col gap-1  hidden md:block">
        <div className="flex gap-1">
          <span className="font-sans font-medium text-sm">Hello</span>
        <Image src="/wave.png" alt="" width={17} height={17}/>
        </div>
        
        <p className="font-sans font-medium text-sm ">Welcome back</p>
      </div>
      </div>
       {/* middle div */}
             {/* Mode Toggle */}
      <div className="">
        <ModeToggle />
      </div>
      {/* right div */}
        <div className="flex items-center gap-2 md:pr-6">
        
      <Image src="/notification.png" alt="" width={20} height={20}/>
      <div className="flex items-center gap-1 md:pl-4 ">
        <div className="p-1 rounded-full">
        <Image src="/profile-pic.svg" alt="" width={34} height={34}/>
        </div>
        <span className="font-sans text-sm hidden md:block">Richard Kyuli</span>
      </div>
      <Image src="/dropdown.svg" alt="" width={11} height={11}/>
        </div>
     
    </div>
  );
}