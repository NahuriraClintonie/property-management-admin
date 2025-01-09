import React from "react";
import NavBar from "../sidebar/NavBar"; // NavBar component
import TopBar from "../topbar/TopBar"; // TopBar component

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-blue-900">
                <NavBar /> {/* Reuse the NavBar component */}
            </aside>

            {/* Main Content Area */}
            <div className="flex flex-col flex-1">
                {/* Top Bar */}
                <header>
                    <TopBar /> {/* Reuse the TopBar component */}
                </header>

                {/* Main Content */}
                <main className="flex-1 p-6 overflow-auto">
                    {children} {/* Render nested components */}
                </main>
            </div>
        </div>
    );
};

export default Layout;
