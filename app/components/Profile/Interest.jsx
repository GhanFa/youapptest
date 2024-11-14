import React from "react";
import { BiEditAlt } from "react-icons/bi";

const Interest = () => {
  return (
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
  );
};

export default Interest;
