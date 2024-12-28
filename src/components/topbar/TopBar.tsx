import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/Store";

const TopBar: React.FC = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Access username from Redux store
  const loggedUser = useAppSelector((state) => state.Login.loggedUser);
  const username = loggedUser?.email || "Admin";

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
      <div className="flex items-center justify-between bg-[#0077B6] p-4 shadow-sm">
        {/* Brand Name */}
        <div className="text-white font-bold text-base md:text-xl flex flex-col ml-16 lg:ml-8">
          <span className="whitespace-nowrap">PROPERTY MANAGEMENT</span>
          <span className="text-white text-xs md:text-sm ml-2">Property Manager</span>
        </div>

        {/* User Dropdown */}
        <div className="relative flex items-center space-x-2 md:space-x-4">
          <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={toggleDropdown}
          >
            {/* User Avatar */}
            <img
                src="/images/user.png"
                alt="User avatar"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full"
            />
            {/* Username */}
            <span className="hidden md:inline text-white font-semibold">
            {username}
          </span>
            {/* Dropdown Icon */}
            <svg
                className={`fill-current h-4 w-4 text-white transform ${
                    isDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
              <div className="absolute top-12 md:top-16 right-0 bg-white border rounded-lg shadow-lg z-50 p-2 w-40">
                <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 rounded"
                >
                  Logout
                </button>
              </div>
          )}
        </div>
      </div>
  );
};

export default TopBar;
