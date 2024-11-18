"use client";
import React, { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import AboutInfo from "./AboutInfo";
import AboutForm from "./AboutForm";
import { saveProfileData } from "@/lib/aboutService";
import useProfileForm from "@/app/hooks/useProfileForm";
const About = ({ data, onUpdate }) => {
  const { formData, handleChange, profileExists } = useProfileForm(data);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = async () => {
    console.log("Saving data...");
    console.log(saveProfileData);
    try {
      const savedData = await saveProfileData(formData, profileExists);
      if (typeof onUpdate === "function") {
        onUpdate();
      }
      setIsEditing(false);
    } catch (error) {
      console.error("Failed to save profile:", error);
    }
  };
  return (
    <div className="w-full min-h-[120px] mx-auto bg-[#0e191f] rounded-2xl flex flex-col gap-3 ps-7 pe-3 py-3">
      <div className="flex justify-between">
        <div className="title font-bold text-white text-sm">About</div>

        <button
          onClick={() => {
            if (isEditing) {
              handleSave(); // Panggil handleSave jika dalam mode editing
            }
            setIsEditing(!isEditing); // Toggle mode editing
          }}
          type="button"
          className="icon self-end hover:opacity-50 bg-link-gradient bg-clip-text text-transparent"
        >
          {isEditing ? "Save & Update" : <BiEditAlt color="white" size={25} />}
        </button>
      </div>

      {isEditing ? (
        <AboutForm
          data={formData}
          onChange={handleChange}
          onSave={handleSave}
        />
      ) : (
        <AboutInfo data={formData} />
      )}
    </div>
  );
};

export default About;
