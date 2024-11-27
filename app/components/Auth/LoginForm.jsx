"use client";
import { useState } from "react";
import PasswordInput from "./PasswordInput";
import { fetchLogin } from "@/lib/auth";

const LoginForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleInputChange = (event) => {
    const value = event.target.value;

    setInputValue(value);

    // Validasi: aktifkan tombol jika input tidak kosong

    if (value.trim().length > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const emailOrUsername = e.target.emailOrUsername.value;
    const data = {
      email: emailOrUsername.includes("@") ? emailOrUsername : "",
      username: emailOrUsername.includes("@") ? "" : emailOrUsername,
      password: e.target.password.value,
    };

    try {
      const result = await fetchLogin(data);

      console.log(result); // Debugging: lihat hasil dari fetchLogin

      if (result.success) {
        window.location.href = "/profile";
        alert("Login berhasil!");
      } else {
        setErrorMessage(result.message);
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again."); // Tangani kesalahan
    } finally {
      setLoading(false); // Set loading ke false setelah selesai
    }
  };

  return (
    <>
      <form onSubmit={handleLogin} className="flex flex-col gap-8 mb-14">
        {/* pesan error */}
        <div className="text-red-500">{errorMessage}</div>
        <div className="space-y-5">
          <div>
            <input
              type="text"
              placeholder="Enter Email or Username"
              className="w-full px-4 py-4 text-sm text-white bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              name="emailOrUsername"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
          <PasswordInput placeholder="Enter Password" name="password" />
        </div>

        <div className="relative">
          <button
            type="submit"
            disabled={isDisabled}
            className="w-full py-4 font-bold text-base text-white bg-gradient-to-r from-green-400  to-blue-500 rounded-lg shadow-md transition duration-300 hover:shadow-lg hover:bg-gradient-to-r hover:to-green-300  hover:from-blue-500 disabled:opacity-50 disabled:bg-current   "
          >
            Login
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-400">
          No account?{" "}
          <a
            href="/register"
            className="bg-link-gradient bg-clip-text text-transparent border-b-2 border-link-gradient hover:opacity-50 hover:border-transparent"
          >
            Register here
          </a>
        </p>
      </form>
    </>
  );
};

export default LoginForm;
