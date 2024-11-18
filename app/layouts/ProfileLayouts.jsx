"use client";
import Link from "next/link";
import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getToken, logout } from "@/lib/auth";
const ProfileLayouts = (props) => {
  const { children, data } = props;
  const profile = data.data;
  const token = getToken();

  const handleLogout = () => {
    logout(token);
    window.location.href = "/login";
  };
  return (
    <>
      <div className="flex flex-col w-full min-h-screen bg-[#09141a]">
        <div className="sticky top-0 z-10 bg-[#09141a] md:w-4/5 lg:w-2/5 mx-auto w-full px-5 pt-20 pb-3 flex justify-between items-center text-white content-top">
          <Link
            href="/"
            className="flex items-center text-sm font-boldhover:text-white"
          >
            <FaAngleLeft className="mr-1" />
            Back
          </Link>
          <div className="email text-sm font-semibold">@{profile.username}</div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="hover:bg-[#142935] cursor-pointer">
                <svg
                  width="22"
                  height="7"
                  viewBox="0 0 22 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="3.20728"
                    width="4.5358"
                    height="4.5358"
                    rx="1"
                    transform="rotate(-45 0 3.20728)"
                    fill="white"
                  />
                  <rect
                    x="7.41504"
                    y="3.20752"
                    width="4.5358"
                    height="4.5358"
                    rx="1"
                    transform="rotate(-45 7.41504 3.20752)"
                    fill="white"
                  />
                  <rect
                    x="14.8301"
                    y="3.20752"
                    width="4.5358"
                    height="4.5358"
                    rx="1"
                    transform="rotate(-45 14.8301 3.20752)"
                    fill="white"
                  />
                </svg>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="text-right ">
              <DropdownMenuLabel className="bg-slate-200 w-full capitalize">
                Hi, {profile.username}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <button className="text-right w-full " onClick={handleLogout}>
                  Logout
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex-1 overflow-y-auto w-full md:w-4/5 lg:w-2/5 mx-auto px-2 flex flex-col gap-6 mt-7">
          {children}
        </div>
      </div>
    </>
  );
};

export default ProfileLayouts;
