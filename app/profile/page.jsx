"use client";
import React, { useEffect, useState } from "react";
import ProfileLayouts from "../layouts/ProfileLayouts";
import Hero from "../components/Profile/Hero";
import About from "../components/Profile/About";
import Interest from "../components/Profile/Interest";
import { useLogin } from "../hooks/useLogin";
import axios from "axios";

const ProfilePage = () => {
  const username = useLogin();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://techtest.youapp.ai/api/getProfile";
      const token = localStorage.getItem("token");
      console.log(token);

      try {
        const response = await axios.get(url, {
          headers: {
            accept: "*/*",

            "x-access-token": token,
          },
        });

        console.log(response.data);
        setData(response.data);
      } catch (error) {
        // Tangani kesalahan di sini
        if (error.response) {
          // Permintaan dibuat dan server merespons dengan status yang tidak dalam rentang 2xx

          setError(
            `Error: ${error.response.status} - ${
              error.response.data.message || error.response.data
            }`
          );
        } else if (error.request) {
          // Permintaan dibuat tetapi tidak ada respons diterima
          setError("Error: No response received from server.");
        } else {
          // Sesuatu terjadi saat mengatur permintaan
          setError(`Error: ${error.message}`);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    ); // Tampilkan loading saat mengambil data
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div>Error: {error.message}</div>;
      </div>
    );
  }

  return (
    <ProfileLayouts username={username}>
      {/* box image */}
      <Hero data={data} />
      {/* about */}
      <About data={data} />
      {/* interest */}
      <Interest data={data} />
    </ProfileLayouts>
  );
};

export default ProfilePage;
