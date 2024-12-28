import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
    return (
        <div className="w-64 h-full text-white flex flex-col">
            {/* Logo */}
            <div className="p-4 text-2xl font-bold border-b border-blue-300">
                Manage Property
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col flex-grow">
                <Link
                    to="/dashboard"
                    className="p-4 hover:bg-blue-500 border-b border-blue-300">
                    Home
                </Link>
                <Link
                    to="/profile"
                    className="p-4 hover:bg-blue-500 border-b border-blue-300">
                    Profile
                </Link>
                <Link
                    to="/settings"
                    className="p-4 hover:bg-blue-500 border-b border-blue-300">
                    Settings
                </Link>
                <Link
                    to="/logout"
                    className="p-4 hover:bg-blue-500 border-b border-blue-300 mb-32">
                    Logout
                </Link>
            </nav>

            {/* Footer */}
            <div className="p-4 text-center text-sm border-t border-blue-300 mt-48">
                © 2024 Property Management
            </div>
        </div>
    );
};

export default NavBar;