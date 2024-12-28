import React from "react";
import { NavLink } from "react-router-dom";
import { useAppSelector,RootState } from "../../store/Store"; // Custom hooks for Redux

const NavBar: React.FC = () => {
    const loggedUser = useAppSelector((state: RootState) => state.Login.loggedUser);

    return (
        <nav className="bg-[#0077B6] text-white shadow-lg">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <NavLink to="/" className="text-2xl font-bold hover:text-gray-300">
                    MyApp
                </NavLink>

                {/* Navigation Links */}
                <ul className="flex space-x-6">
                    <li>
                        <NavLink
                            to="/dashboard"
                            className={({ isActive }) =>
                                `hover:text-gray-300 ${isActive ? "text-gray-300 border-b-2 border-white" : ""}`
                            }>
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/tasks"
                            className={({ isActive }) =>
                                `hover:text-gray-300 ${isActive ? "text-gray-300 border-b-2 border-white" : ""}`
                            }>
                            Tasks
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/profile"
                            className={({ isActive }) =>
                                `hover:text-gray-300 ${isActive ? "text-gray-300 border-b-2 border-white" : ""}`
                            }>
                            Profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/settings"
                            className={({ isActive }) =>
                                `hover:text-gray-300 ${isActive ? "text-gray-300 border-b-2 border-white" : ""}`
                            }>
                            Settings
                        </NavLink>
                    </li>
                </ul>

                {/* User Section */}
                <div className="flex items-center space-x-4">
                    {loggedUser ? (
                        <span className="text-sm">
              Welcome, <strong>{loggedUser.email}</strong>
            </span>
                    ) : (
                        <NavLink
                            to="/login"
                            className="hover:text-gray-300 text-sm font-semibold">
                            Login
                        </NavLink>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
