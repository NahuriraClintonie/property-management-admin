import React from "react";
import LoginForm from "../components/LoginForm";

const LoginPage: React.FC = () => {

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
