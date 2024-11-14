"use client";
import Link from "next/link";
import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import AboutForm from "../components/Profile/AboutForm";
import Hero from "../components/Profile/Hero";
import Interest from "../components/Profile/Interest";

const ProfileLayouts = (props) => {
  const { children, username, data } = props;
  return (
    <>
      <div className="flex flex-col w-full min-h-screen bg-[#09141a]">
        <div className="sticky top-0 z-10 bg-[#09141a] md:w-2/5 mx-auto  shadow w-full px-5 pt-20 pb-3 flex justify-between items-center text-white content-top">
          <Link
            href="/"
            className="flex items-center text-sm font-boldhover:text-white"
          >
            <FaAngleLeft className="mr-1" />
            Back
          </Link>
          <div className="email text-sm font-semibold">@{username}</div>
          <button className="setting ">
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
          </button>
        </div>
        <div className="flex-1 overflow-y-auto w-full md:w-2/5 mx-auto px-2 flex flex-col gap-6 mt-7">
          {children}
        </div>
      </div>
    </>
  );
};

export default ProfileLayouts;
