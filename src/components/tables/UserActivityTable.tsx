import React, { useState } from 'react';

interface UserActivity {
    id: string;
    name: string;
    status: string;
    room: string;
    timestamp: string;
}

interface UserActivityTableProps {
    activities: UserActivity[];
}

const UserActivityTable: React.FC<UserActivityTableProps> = ({ activities }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 5;

    // Calculate the index of the first and last activity to display
    const indexOfLastActivity = currentPage * recordsPerPage;
    const indexOfFirstActivity = indexOfLastActivity - recordsPerPage;
    const currentActivities = activities.slice(indexOfFirstActivity, indexOfLastActivity);

    // Handle page change
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    // Calculate total pages
    const totalPages = Math.ceil(activities.length / recordsPerPage);

    return (
        <div className="overflow-x-auto mt-4">
            <table className="min-w-full table-auto border-collapse">
                <thead className="bg-[#0077B6]">
                <tr>
                    <th className="px-4 py-2 text-left text-white">Name</th>
                    <th className="px-4 py-2 text-left text-white">Status</th>
                    <th className="px-4 py-2 text-left text-white">Room</th>
                    <th className="px-4 py-2 text-left text-white">Timestamp</th>
                </tr>
                </thead>
                <tbody>
                {currentActivities.map((activity) => (
                    <tr key={activity.id} className="border-b border-black">
                        <td className="px-4 py-1 text-gray-600">{activity.name}</td>
                        <td
                            className={`px-4 py-1 ${
                                activity.status === 'Successful' ? 'text-green-600' : 'text-red-600'
                            }`}
                        >
                            {activity.status}
                        </td>
                        <td className="px-4 py-1 text-gray-600">{activity.room}</td>
                        <td className="px-4 py-1 text-gray-600">{activity.timestamp}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            {/* Pagination Controls */}
            <div className="flex justify-center mt-4">
                <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-400"
                >
                    Prev
                </button>
                {/* Page Number Buttons */}
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => paginate(index + 1)}
                        className={`px-4 py-2 mx-2 rounded-lg ${
                            currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
                        }`}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-400"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default UserActivityTable;
