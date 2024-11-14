import axios from "axios";
import { jwtDecode } from "jwt-decode";
const url = "https://techtest.youapp.ai/";

export const fetchLogin = async (data) => {
  try {
    const response = await axios.post(`${url}api/login`, data);
    const token = response.data.access_token;
    localStorage.setItem("token", token);
    window.location.href = "/profile";
  } catch (error) {
    console.error(error);
    console.log("Login failed!");
  }
};
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

export const getUsername = (token) => {
  try {
    const decoded = jwtDecode(token);

    console.log(decoded);
    return decoded.username;
  } catch (error) {
    console.error("Invalid token", error);

    return null;
  }
};
