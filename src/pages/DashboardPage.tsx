import React from 'react';
import Layout from '../components/layout/Layout'; // Assuming Layout is a wrapper component
import { FaBell, FaCamera, FaLightbulb, FaCogs } from 'react-icons/fa';
import DashboardCard from '../components/cards/DashboardCard'; // Import the reusable DashboardCard component

const Dashboard: React.FC = () => {
    return (
        <Layout>
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

            {/* Overview Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <DashboardCard
                    title="Active Devices"
                    value="15 devices active"
                    icon={<FaCogs className="text-blue-500 text-3xl" />}
                />
                <DashboardCard
                    title="Events Recorded"
                    value="12 events today"
                    icon={<FaBell className="text-yellow-500 text-3xl" />}
                />
                <DashboardCard
                    title="Alerts"
                    value="3 unresolved alerts"
                    icon={<FaBell className="text-red-500 text-3xl" />}
                />
            </div>

            {/* Activity & Security Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-8">
                {/* User Activity */}
                <div className="bg-white p-4 shadow rounded-lg">
                    <h2 className="text-lg font-semibold">Recent User Activity</h2>
                    <ul className="mt-2 text-gray-600 space-y-2">
                        <li>User John Doe accessed Room 101 (Face Authenticated)</li>
                        <li>Security breach detected in Room 102 (unauthorized access attempt)</li>
                        <li>User Jane Smith accessed Room 103 (Face Authenticated)</li>
                    </ul>
                </div>

                {/* Camera Events */}
                <div className="bg-white p-4 shadow rounded-lg">
                    <h2 className="text-lg font-semibold">Recent Camera Events</h2>
                    <ul className="mt-2 text-gray-600 space-y-2">
                        <li>Motion detected in Room 101 at 10:45 AM</li>
                        <li>Person detected in Room 102 at 11:15 AM</li>
                        <li>Face captured at the entrance at 12:30 PM</li>
                    </ul>
                </div>
            </div>

            {/* System & Room Status */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-8">
                <DashboardCard
                    title="Lighting System Status"
                    value="All lights functioning normally"
                    icon={<FaLightbulb className="text-yellow-500 text-3xl mt-4" />}
                />
                <DashboardCard
                    title="Room Security Status"
                    value="All rooms are secure"
                    icon={<FaCamera className="text-blue-500 text-3xl mt-4" />}
                />
            </div>
        </Layout>
    );
};

export default Dashboard;
