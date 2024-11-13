import React from "react";
import AuthLayouts from "../layouts/AuthLayouts";
import LoginForm from "../components/Auth/LoginForm";

const LoginPage = () => {
  return (
    <AuthLayouts title="Login">
      <LoginForm />
    </AuthLayouts>
  );
};

export default LoginPage;
