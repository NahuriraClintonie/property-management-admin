import React from "react";
import TopBar from "../components/topbar/TopBar"; // Import the TopBar component

const DashboardPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* TopBar Component */}
            <TopBar />

            {/* Dashboard Content */}
            <div className="flex-grow flex items-center justify-center bg-gray-100">
                <h1 className="text-4xl font-bold">Welcome to the Dashboard</h1>
            </div>
        </div>
    );
};

export default DashboardPage;
