import React from "react";
import { BiEditAlt } from "react-icons/bi";

const Hero = ({ username }) => {
  return (
    <div className="w-full h-48 mx-auto bg-[#162329] rounded-2xl flex flex-col justify-between p-3">
      <button className="icon self-end hover:opacity-50 ">
        <BiEditAlt color="white" size={25} />
      </button>
      <div className="username font-bold text-white">@{username},</div>
    </div>
  );
};

export default Hero;
