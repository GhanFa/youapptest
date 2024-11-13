"use client";
import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa6";

const AuthLayouts = (props) => {
  const { children, title } = props;
  return (
    <>
      <div className="w-full min-h-screen bg-form-gradient">
        <div className="w-full max-w-sm px-5 pt-20">
          <Link
            href="/"
            className="flex items-center text-sm font-bold mb-[60px] text-white hover:text-white"
          >
            <FaAngleLeft className="mr-2" />
            Back
          </Link>
        </div>
        <div className="w-full md:w-2/5 mx-auto px-6 ">
          <h2 className="text-2xl font-bold mb-6 text-white pl-2">{title}</h2>
          {children}
        </div>
      </div>
    </>
  );
};

export default AuthLayouts;
