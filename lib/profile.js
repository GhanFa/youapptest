import axios from "axios";
import { getToken } from "@/lib/auth";

const fetchProfileData = async () => {
  const url = "https://techtest.youapp.ai/api/getProfile";
  const token = getToken();

  const response = await axios.get(url, {
    headers: {
      accept: "*/*",
      "x-access-token": token,
    },
  });

  return response.data;
};

export default fetchProfileData;
