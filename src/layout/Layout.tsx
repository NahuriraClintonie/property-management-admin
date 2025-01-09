import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-blue-900 text-white">
                <div className="p-4 font-bold">Property Management</div>
                <nav className="mt-6">
                    <ul>
                        <li className="py-2 px-4 hover:bg-blue-700">
                            <a href="/dashboard">Dashboard</a>
                        </li>
                        <li className="py-2 px-4 hover:bg-blue-700">
                            <a href="/device-management">Devices</a>
                        </li>
                        <li className="py-2 px-4 hover:bg-blue-700">
                            <a href="/user-management">Users</a>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6">
                {children} {/* Render nested components here */}
            </main>
        </div>
    );
};

export default Layout;
