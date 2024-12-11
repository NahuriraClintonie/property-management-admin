import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateLogin } from "../utils/validate"
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
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-4xl font-bold text-center mb-6">Login</h2>
      {errorMessage && <div className="text-red-600 text-center mb-6">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="username" className="block text-lg font-medium text-gray-700">Username
          </label>
          <input
            type="text" id="username" value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg mt-2 text-lg" required />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password" className="block text-lg font-medium text-gray-700">Password
          </label>
          <input type="password" id="password"
            value={password} onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg mt-2 text-lg" required />
        </div>
        <button
          type="submit" className="w-full bg-blue-600 text-white py-4 rounded-lg text-lg">Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
