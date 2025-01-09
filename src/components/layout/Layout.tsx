import React, { useState } from "react";
import NavBar from "../sidebar/NavBar"; // NavBar component
import TopBar from "../topbar/TopBar"; // TopBar component
import { FiMenu } from "react-icons/fi";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside
                className={`h-full bg-[#0077B6] text-white transition-all duration-300 ${
                    isSidebarCollapsed ? "w-16" : "w-64"
                }`}
            >
                <NavBar isCollapsed={isSidebarCollapsed} />
            </aside>

            {/* Main Content Area */}
            <div className="flex flex-col flex-1">
                {/* Top Bar */}
                <header className="flex items-center justify-between bg-white p-4 shadow-md">
                    {/* Sidebar Toggle Button */}
                    <button
                        onClick={toggleSidebar}
                        className="text-[#0077B6] hover:bg-gray-200 rounded p-2 focus:outline-none"
                    >
                        <FiMenu size={24} />
                    </button>
                    <TopBar />
                </header>

                {/* Main Content */}
                <main className="flex-1 p-6 overflow-auto">{children}</main>
            </div>
        </div>
    );
};

export default Layout;