"use client";
import { useState } from "react";

const PinnedInputForm = ({
  tags,
  handleAddTag,
  handleRemoveTag,
  inputValue,
  setInputValue,
}) => {
  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (inputValue.trim() && !tags.includes(inputValue.trim())) {
        handleAddTag(inputValue.trim()); // Menambah interest ke state tags
        setInputValue(""); // Reset input setelah menambah tag
      }
    }
  };

  return (
    <div className="px-1 py-1 bg-[#D9D9D90F] opacity-60 rounded-lg  w-full mx-auto">
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="flex items-center bg-white/10 text-white py-1 px-3 rounded-lg shadow text-sm"
          >
            <span>{tag}</span>
            <button
              onClick={() => handleRemoveTag(tag)} // Fungsi untuk menghapus tag
              className="ml-2 text-white hover:text-red-500 focus:outline-none"
            >
              ×
            </button>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleInputKeyDown}
        placeholder="Type and press Enter"
        className="w-full py-2 px-3 rounded-lg border border-gray-600 bg-[#D9D9D90F] opacity-60 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
};

export default PinnedInputForm;
