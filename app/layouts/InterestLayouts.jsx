import React from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const InterestLayouts = ({ children, onSave }) => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <div className="w-full min-h-screen bg-form-gradient">
      <div className="w-full md:w-4/5 lg:w-2/5 mx-auto px-5 pt-20 pb-3 flex justify-between items-center text-white content-top mb-[73px]">
        <button
          onClick={handleBack}
          className="flex items-center text-sm font-bold"
        >
          <FaAngleLeft className="mr-1" />
          Back
        </button>
        <button
          onClick={onSave}
          className="text-sm bg-gradient-to-r from-[#ABFFFD] via-[#4599DB] to-[#AADAFF] text-transparent bg-clip-text hover:text-blue-500 font-semibold"
        >
          Save
        </button>
      </div>
      <div className="w-full md:w-4/5 lg:w-2/5 mx-auto px-6 mb-6">
        {children}
      </div>
    </div>
  );
};

export default InterestLayouts;
