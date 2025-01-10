import React from 'react';
import Layout from '../components/layout/Layout'; // Assuming Layout is a wrapper component
import { FaBell, FaCamera, FaLightbulb, FaCogs } from 'react-icons/fa';
import DashboardCard from '../components/cards/DashboardCard'; // Import the reusable DashboardCard component
import UserActivityTable from '../components/tables/UserActivityTable'; // Import the reusable component
import RecentCameraEvents from '../components/tables/RecentCameraEvents';

const Dashboard: React.FC = () => {

    // Activities dummy data
    const activities = [
        {id: '1', name: 'John Doe', status: 'Successful', room: '101', timestamp: '2024-01-09 10:45',},
        {id: '2', name: 'Jane Smith', status: 'Successful', room: '65', timestamp: '2024-01-09 11:30',},
        {id: '3', name: 'Security System', status: 'Unsuccessful', room: '102', timestamp: '2024-01-09 11:45',},
        {id: '4', name: 'Oluka Gibson', status: 'Successful', room: '101', timestamp: '2024-01-09 10:45',},
        {id: '5', name: 'Clinton nahurira', status: 'Unsuccessful', room: '98', timestamp: '2024-01-09 11:30',},
        {id: '6', name: 'Security System', status: 'Unsuccessful', room: '34', timestamp: '2024-01-09 11:45',},
    ];

    //Recent events dummy data
    const recentEvents = [
        { id: '1', location: 'Room 101', time: '10:45 AM' },
        { id: '2', location: 'Room 102', time: '11:15 AM' },
        { id: '3', location: 'Entrance', time: '12:30 PM' },
        { id: '4', location: 'Room 21', time: '12:30 PM' },
        { id: '5', location: 'Store', time: '00:30 PM' },
        { id: '6', location: 'Janitors', time: '00:30 PM' },
    ];
    return (
        <Layout>

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
                {/* User Activity Table */}
                <div className="bg-white p-4 shadow rounded-lg">
                    <h2 className="text-lg font-semibold text-center">Recent User Activity</h2>
                    <UserActivityTable activities={activities}/> {/* Use the reusable activity table component */}
                </div>

                {/* Camera Events */}
                <div className="bg-white p-4 shadow rounded-lg">
                    <h2 className="text-lg font-semibold text-center">Recent Camera Events</h2>
                    {/* Recent Camera Events */}
                    <RecentCameraEvents events={recentEvents} />
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
