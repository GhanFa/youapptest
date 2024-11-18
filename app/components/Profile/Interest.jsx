"use client";

import React from "react";
import { useRouter } from "next/navigation"; // Gunakan dari next/navigation
import { BiEditAlt } from "react-icons/bi";

const Interest = ({ data }) => {
  const profile = data.data;
  const router = useRouter();

  const handleEditClick = () => {
    router.push("/interest"); // Navigasi ke halaman edit
  };

  return (
    <div className="w-full min-h-[120px] mx-auto bg-[#0e191f] rounded-2xl flex flex-col gap-3 ps-7 pe-3 py-3 mb-7">
      <div className="flex justify-between">
        <div className="title font-bold text-white text-sm">Interest</div>
        <button
          onClick={handleEditClick}
          className="icon self-end hover:opacity-50"
        >
          <BiEditAlt color="white" size={25} />
        </button>
      </div>
      {profile.interests.length === 0 && (
        <div className="desc font-medium text-sm text-white text-opacity-50">
          Add in your Interest to find a better match
        </div>
      )}
      <div>
        <div className="flex flex-wrap gap-2 mb-3">
          {profile.interests.map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-white/10 text-white py-1 px-3 rounded-2xl shadow text-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Interest;
