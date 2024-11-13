"use client";
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const PasswordInput = ({ placeholder, name }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="relative">
      <input
        type={passwordVisible ? "text" : "password"}
        placeholder={placeholder}
        className="w-full px-4 py-4 text-sm text-white bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
        name={name}
      />

      <button
        type="button"
        onClick={togglePassword}
        className="absolute inset-y-0 right-4 text-gray-400 hover:text-gray-200"
      >
        {passwordVisible ? (
          <BsEye size={20} className="text-yellow-200" />
        ) : (
          <BsEyeSlash size={20} className="text-yellow-200" />
        )}
      </button>
    </div>
  );
};

export default PasswordInput;
