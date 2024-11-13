"use client";
import PasswordInput from "./PasswordInput";
import { fetchLogin } from "@/lib/auth";

const LoginForm = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      username: e.target.username.value,
      password: e.target.password.value,
    };

    fetchLogin(data);
  };

  return (
    <>
      <form onSubmit={handleLogin} className="flex flex-col gap-8">
        <div className="space-y-5">
          <div>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full px-4 py-4 text-sm text-white bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              name="email"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full px-4 py-4 text-sm text-white bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              name="username"
            />
          </div>
          <PasswordInput placeholder="Enter Password" name="password" />
        </div>

        <div className="relative">
          <button
            type="submit"
            className="w-full py-4 font-bold text-base text-white bg-gradient-to-r from-green-400  to-blue-500 rounded-lg shadow-md transition duration-300 disabled:opacity-50 hover:shadow-lg hover:bg-gradient-to-r hover:to-green-300  hover:from-blue-500  "
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
