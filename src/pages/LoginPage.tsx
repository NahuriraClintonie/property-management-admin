import React from "react";
import LoginForm from "../components/LoginForm";

const LoginPage: React.FC = () => {
  const handleLoginSuccess = () => {
    // You can set user authentication state here or use context
    console.log("User Logged In");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <LoginForm onLoginSuccess={handleLoginSuccess} />
    </div>
  );
};

export default LoginPage;
