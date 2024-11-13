import React from "react";
import { FaSignal, FaWifi } from "react-icons/fa";
import { IoBatteryFullOutline } from "react-icons/io5";

const TopBar = () => {
  return (
    <div className="w-full flex justify-between mx-auto items-center px-5 py-2 fixed top-0 z-50">
      <div className="left text-white text-sm font-bold">9:41</div>
      <div className="right flex gap-2">
        <FaSignal color="white" /> <FaWifi color="white" />
        <IoBatteryFullOutline color="white" />
      </div>
    </div>
  );
};

export default TopBar;
