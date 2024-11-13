import React from "react";
import AuthLayouts from "../layouts/AuthLayouts";
import RegisterForm from "../components/Auth/RegisterForm";

const RegisterPage = () => {
  return (
    <AuthLayouts title="Register">
      <RegisterForm />
    </AuthLayouts>
  );
};

export default RegisterPage;
