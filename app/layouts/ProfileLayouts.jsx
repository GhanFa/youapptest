"use client";
import Link from "next/link";
import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { BiEditAlt } from "react-icons/bi";
import AboutForm from "../components/Profile/AboutForm";

const ProfileLayouts = (props) => {
  const { children, username } = props;
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
          <div className="w-full h-48 mx-auto bg-[#162329] rounded-2xl flex flex-col justify-between p-3">
            <button className="icon self-end hover:opacity-50 ">
              <BiEditAlt color="white" size={25} />
            </button>
            <div className="username font-bold text-white">{username},</div>
          </div>
          <AboutForm />
          <div className="w-full min-h-[120px] mx-auto bg-[#0e191f] rounded-2xl flex flex-col gap-3 ps-7 pe-3 py-3 mb-7">
            <div className="flex justify-between">
              <div className="title font-bold text-white text-sm">Interest</div>
              <button className="icon self-end hover:opacity-50">
                <BiEditAlt color="white" size={25} />
              </button>
            </div>
            <div className="desc font-medium text-sm text-white text-opacity-50">
              add in your Interest to find a better match
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileLayouts;
