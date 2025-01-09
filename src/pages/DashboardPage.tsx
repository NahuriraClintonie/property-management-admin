import React from "react";
import Layout from "../components/layout/Layout";

const DashboardPage: React.FC = () => {
    return (
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
    );
};

export default DashboardPage;
