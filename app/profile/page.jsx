"use client";
import React from "react";
import ProfileLayouts from "../layouts/ProfileLayouts";
import Hero from "../components/Profile/Hero";
import About from "../components/Profile/About";
import Interest from "../components/Profile/Interest";
import { useLogin } from "../hooks/useLogin";
import { MdSignalWifiConnectedNoInternet1 } from "react-icons/md";
import useProfileData from "../hooks/useProfileData";

const ProfilePage = () => {
  useLogin();

  // Menggunakan custom hook untuk mendapatkan data profil

  const { data, loading, error, refreshData } = useProfileData();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-24 w-24 border-b-2 border-gray-900"></div>
      </div>
    );
  }
  if (!data) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-inherit">
        <MdSignalWifiConnectedNoInternet1 size={80} color="red" />
        <h2 className="text-2xl font-bold">No Data from the server</h2>
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <ProfileLayouts data={data}>
      {/* box image */}
      <Hero data={data} />
      {/* about */}
      <About data={data} onUpdate={refreshData} />
      {/* interest */}
      <Interest data={data} />
    </ProfileLayouts>
  );
};

export default ProfilePage;
