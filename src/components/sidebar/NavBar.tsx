import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC<{ isCollapsed: boolean }> = ({ isCollapsed }) => {
    return (
        <div className="flex flex-col h-full">
            {/* Logo */}
            {!isCollapsed && (
                <div className="p-4 text-2xl font-bold border-b border-blue-300">
                    Property Admin
                </div>
            )}

            {/* Navigation Links */}
            <nav className="flex flex-col flex-grow mt-4">
                {[
                    { path: "/dashboard", label: "Home" },
                    { path: "/profile", label: "Profile" },
                    { path: "/settings", label: "Settings" },
                    { path: "/logout", label: "Logout" },
                ].map(({ path, label }) => (
                    <Link
                        key={path}
                        to={path}
                        className={`p-4 hover:bg-blue-700 border-b border-blue-300 flex items-center ${
                            isCollapsed ? "justify-center" : ""
                        }`}
                    >
                        <span className={`${isCollapsed ? "hidden" : "block"}`}>{label}</span>
                    </Link>
                ))}
            </nav>

            {/* Footer */}
            {!isCollapsed && (
                <div className="p-4 text-center text-sm border-t border-blue-300 mt-auto">
                    © 2024 Property Management
                </div>
            )}
        </div>
    );
};

export default NavBar;
