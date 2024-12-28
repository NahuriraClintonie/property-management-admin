import React from "react";
import TopBar from "../components/topbar/TopBar"; // Import the TopBar component
import NavBar from "../components/sidebar/NavBar"; // Import the NavBar component

const DashboardPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* TopBar Component */}
            <TopBar />

            {/* Main Content with Sidebar */}
            <div className="flex flex-grow bg-[#0077B6]">
                {/* Sidebar (NavBar) */}
                <NavBar />

                {/* Dashboard Content */}
                <div className="flex-grow p-6 bg-gray-100">
                    <h1 className="text-4xl font-bold">Welcome to the Dashboard</h1>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
