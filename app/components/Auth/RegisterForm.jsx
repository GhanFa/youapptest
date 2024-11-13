"use client";
import { fetchRegister } from "@/lib/auth";
import PasswordInput from "./PasswordInput";

const RegisterForm = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmpassword.value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");

      return;
    }
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      alert(
        "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number."
      );

      return;
    }
    const data = {
      email: e.target.email.value,
      username: e.target.username.value,
      password: password,
    };

    fetchRegister(data);
  };

  return (
    <>
      <form onSubmit={handleRegister} className="flex flex-col gap-8">
        <div className="space-y-5">
          <div>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full px-4 py-4 text-sm text-white bg-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              name="email"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Create Username"
              className="w-full px-4 py-4 text-sm text-white bg-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              name="username"
            />
          </div>

          <PasswordInput placeholder="Create Password" name="password" />
          <PasswordInput
            placeholder="Confirm Password"
            name="confirmpassword"
          />
        </div>
        <div className="relative">
          <button
            onClick={() => {}}
            className="w-full py-4 font-bold text-base text-white bg-gradient-to-r from-green-400  to-blue-500 rounded-lg shadow-md disabled:opacity-50 hover:bg-blue-600"
          >
            Register
          </button>
        </div>
        <p className="mt-6 text-center text-sm text-gray-400">
          Have an account?{" "}
          <a
            href="/login"
            className="bg-link-gradient bg-clip-text text-transparent border-b-2 border-link-gradient hover:opacity-50 hover:border-transparent"
          >
            Login here
          </a>
        </p>
      </form>
    </>
  );
};

export default RegisterForm;
