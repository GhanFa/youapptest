"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { getToken } from "@/lib/auth";
import InterestLayouts from "../layouts/InterestLayouts";
import PinnedInputForm from "../components/Interest/PinnedTagfForm";
import { useRouter } from "next/navigation";
import { useLogin } from "../hooks/useLogin";

const InterestPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [profileData, setProfileData] = useState(null);

  const token = getToken();
  const router = useRouter();

  useLogin(); // Cek login status

  if (!token) {
    return null; // Jangan render halaman jika token tidak valid
  }

  const config = {
    headers: {
      "x-access-token": token,
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    const fetchProfileData = async () => {
      setLoading(true); // Set loading saat fetch
      try {
        const response = await axios.get(
          "https://techtest.youapp.ai/api/getProfile",
          config
        );
        setProfileData(response.data?.data); // Simpan data profil
        if (response.data?.data?.interests) {
          setTags(response.data.data.interests); // Set tags jika ada data
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
        setError("Failed to fetch profile");
      } finally {
        setLoading(false); // Reset loading setelah fetch selesai
      }
    };

    fetchProfileData();
  }, [token]);

  const handleAddTag = (newTag) => {
    if (!tags.includes(newTag)) {
      setTags((prevTags) => [...prevTags, newTag]); // Menambah tag baru
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags((prevTags) => prevTags.filter((tag) => tag !== tagToRemove)); // Menghapus tag
  };

  const handleSave = async () => {
    setLoading(true); // Set loading saat menyimpan data

    try {
      const response = await axios.put(
        "https://techtest.youapp.ai/api/updateProfile", // Update data
        {
          birthday: profileData?.birthday,
          horoscope: profileData?.horoscope,
          zodiac: profileData?.zodiac,
          interests: tags,
        },
        config
      );
      if (response.status === 200) {
        alert("Interests updated successfully");
        router.push("/profile"); // Arahkan ke halaman /profile setelah berhasil update
      }
    } catch (error) {
      console.error("Error updating interests:", error);
      setError("Failed to update interests.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-24 w-24 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <InterestLayouts onSave={handleSave}>
      <PinnedInputForm
        tags={tags}
        handleAddTag={handleAddTag}
        handleRemoveTag={handleRemoveTag}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      {error && <div className="text-red-500">{error}</div>}{" "}
      {/* Display error */}
    </InterestLayouts>
  );
};

export default InterestPage;
