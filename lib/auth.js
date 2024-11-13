import axios from "axios";
const url = "https://techtest.youapp.ai/";

export const fetchLogin = (data, callback) => {
  axios
    .post(`${url}api/login`, data)
    .then((res) => {
      callback(true, res.data.token);
    })
    .catch((error) => {
      callback(false, error);
    });
};
export const fetchRegister = async (data) => {
  try {
    const res = await axios.post(`${url}api/register`, data);
  } catch (error) {
    console.log(error);
  }
};
