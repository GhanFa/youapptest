import axios from "axios";
import { jwtDecode } from "jwt-decode";
const url = "https://techtest.youapp.ai/";

export const fetchRegister = async (data) => {
  try {
    const res = await axios.post(`${url}api/register`, data);
    console.log(res);
    window.location.href = "/";
    alert(res.data.message);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchLogin = async (data) => {
  try {
    const response = await axios.post(`${url}api/login`, data);

    const token = response.data.access_token;

    if (token) {
      localStorage.setItem("token", token); // Simpan token di localStorage

      return { success: true };
    } else {
      return { success: false, message: "Token tidak ditemukan." };
    }
  } catch (error) {
    return { success: false, message: error.response.data.message };
  }
};

export const getUsername = (token) => {
  try {
    const decoded = jwtDecode(token);
    console.log(decoded);
    return decoded.username;
  } catch (error) {
    console.error("Error decoding token:", error);

    return null;
  }
};
export const getToken = () => {
  return localStorage.getItem("token");
};

export const logout = () => {
  localStorage.removeItem("token");
};
