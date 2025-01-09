import React from "react";
import TopBar from "../components/topbar/TopBar"; // Import the TopBar component
import NavBar from "../components/sidebar/NavBar"; // Import the NavBar component
import Layout from './Layout';

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
                <Layout>
                    <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="bg-white p-4 shadow rounded-lg">
                            <h2 className="text-lg font-semibold">Active Devices</h2>
                            <p className="mt-2 text-gray-600">10 devices active</p>
                        </div>
                        <div className="bg-white p-4 shadow rounded-lg">
                            <h2 className="text-lg font-semibold">Events</h2>
                            <p className="mt-2 text-gray-600">5 events recorded today</p>
                        </div>
                        <div className="bg-white p-4 shadow rounded-lg">
                            <h2 className="text-lg font-semibold">Alerts</h2>
                            <p className="mt-2 text-gray-600">2 unresolved alerts</p>
                        </div>
                    </div>
                </Layout>
            </div>
        </div>
    );
};

export default DashboardPage;
