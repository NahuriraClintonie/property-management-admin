import React from 'react';

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
                {activities.map((activity) => (
                    <tr key={activity.id} className="border-b border-black">
                        <td className="px-4 py-1 text-gray-600">{activity.name}</td>
                        <td className={`px-4 py-1 ${activity.status === 'Successful' ? 'text-green-600' : 'text-red-600'}`}>
                            {activity.status}
                        </td>
                        <td className="px-4 py-1 text-gray-600">{activity.room}</td>
                        <td className="px-4 py-1 text-gray-600">{activity.timestamp}</td>
                    </tr>
                ))}
                </tbody>
            </table>

        </div>
    );
};

export default UserActivityTable;
