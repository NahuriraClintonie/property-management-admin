import React from 'react';

interface RecentEvent {
    id: string;
    location: string;
    time: string;
}

interface RecentCameraEventsProps {
    events: RecentEvent[];
}

const RecentCameraEvents: React.FC<RecentCameraEventsProps> = ({ events }) => {
    return (
        <div className="bg-white p-4 shadow rounded-lg mt-6">
            <h2 className="text-lg font-semibold">Recent Camera Events</h2>
            <ul className="mt-2 text-gray-600 space-y-2">
                {events.length > 0 ? (
                    events.map((event) => (
                        <li key={event.id} className="flex justify-between border-b pb-2">
                            <span>{event.location}</span>
                            <span>{event.time}</span>
                        </li>
                    ))
                ) : (
                    <li className="text-gray-500">No recent events available.</li>
                )}
            </ul>
        </div>
    );
};

export default RecentCameraEvents;