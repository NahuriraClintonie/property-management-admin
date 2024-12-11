import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateLogin } from "../utils/validate"
// import image3 from '../assets/image3.webp';

interface LoginFormProps {
  onLoginSuccess: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form inputs
    const validationResult = validateLogin(username, password);
    if (validationResult.isValid) {
      // Proceed with login
      console.log("Login Successful!");
      onLoginSuccess();
      navigate("/dashboard"); // Redirect to a different page (e.g., Dashboard)
    } else {
      setErrorMessage(validationResult.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
        {/* Logo Section */}
        <div className="text-center">
          {/*<img*/}
          {/*  src={image3}*/}
          {/*  alt="System Logo"*/}
          {/*  className="mx-auto mb-4 w-24 h-24"*/}
          {/*/>*/}
          <h1 className="text-3xl font-bold">Property Management System</h1>
          <p className="text-lg text-gray-500">Administrator Panel</p>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-lg p-4">
          {errorMessage && (
            <div className="text-red-600 text-center mb-4">{errorMessage}</div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="username" className="block text-sm font-medium text-gray-700">Username
              </label>
              <input
                type="text" id="username" value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg mt-2" required />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password" className="block text-sm font-medium text-gray-700">Password
              </label>
              <input
                type="password" id="password" value={password}
                onChange={(e) => setPassword(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg mt-2" required />
            </div>
            <button
              type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg">Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};


export default LoginForm;
