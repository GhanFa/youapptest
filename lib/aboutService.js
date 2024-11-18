import axios from "axios";
import { getToken } from "@/lib/auth";
import { formatBirthday } from "@/helper/birthday";

// aboutService.js
export const saveProfileData = async (formData, profileExists) => {
  const token = getToken();
  const config = {
    headers: {
      accept: "*/*",
      "x-access-token": token,
    },
  };

  const processedFormData = {
    name: formData.name,
    birthday: formatBirthday(formData.birthday),
    height: formData.height ? Number(formData.height) : null,
    weight: formData.weight ? Number(formData.weight) : null,
  };

  console.log("data before send:", processedFormData);

  try {
    let response;
    if (profileExists) {
      response = await axios.put(
        `https://techtest.youapp.ai/api/updateProfile/`,
        processedFormData,
        config
      );
    } else {
      response = await axios.post(
        `https://techtest.youapp.ai/api/createProfile/`,
        processedFormData,
        config
      );
    }

    if (response.status === 200 || response.status === 201) {
      console.log("Data Response:", response.data);
      return response.data; // Mengembalikan data yang disimpan
    } else {
      throw new Error("Failed to save profile");
    }
  } catch (error) {
    console.error("Error saving data:", error);
    throw error; // Melempar error untuk ditangani di komponen
  }
};
