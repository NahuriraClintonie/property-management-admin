import React from 'react';

interface UserActivity {
    id: string;
    name: string;
    status: 'Successful' | 'Unsuccessful';
    room: string;
    timestamp: string;
}

interface UserActivityTableProps {
    activities: UserActivity[];
}

const UserActivityTable: React.FC<UserActivityTableProps> = ({ activities }) => {
    return (
        <div className="overflow-x-auto mt-4">
            <table className="min-w-full table-auto">
                <thead className="bg-gray-100">
                <tr>
                    <th className="px-4 py-2 text-left text-gray-700">Name</th>
                    <th className="px-4 py-2 text-left text-gray-700">Status</th>
                    <th className="px-4 py-2 text-left text-gray-700">Room</th>
                    <th className="px-4 py-2 text-left text-gray-700">Timestamp</th>
                </tr>
                </thead>
                <tbody>
                {activities.map((activity) => (
                    <tr key={activity.id}>
                        <td className="px-4 py-2 text-gray-600">{activity.name}</td>
                        <td className={`px-4 py-2 ${activity.status === 'Successful' ? 'text-green-600' : 'text-red-600'}`}>
                            {activity.status}
                        </td>
                        <td className="px-4 py-2 text-gray-600">{activity.room}</td>
                        <td className="px-4 py-2 text-gray-600">{activity.timestamp}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserActivityTable;
