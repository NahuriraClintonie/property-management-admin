import React, { useState } from 'react';

interface RecentEvent {
    id: string;
    location: string;
    time: string;
}

interface RecentCameraEventsProps {
    events: RecentEvent[];
}

const RecentCameraEvents: React.FC<RecentCameraEventsProps> = ({ events }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 5;

    // Calculate the index of the first and last activity to display
    const indexOfLastEvent = currentPage * recordsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - recordsPerPage;
    const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

    // Handle page change
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    // Calculate total pages
    const totalPages = Math.ceil(events.length / recordsPerPage);

    return (
        <div className="bg-white p-4">
            <table className="min-w-full table-auto border-collapse">
                <thead className="bg-[#0077B6]">
                <tr>
                    <th className="px-4 py-2 text-left text-white">Location</th>
                    <th className="px-4 py-2 text-left text-white">Time</th>
                </tr>
                </thead>
                <tbody>
                {currentEvents.length > 0 ? (
                    currentEvents.map((event) => (
                        <tr key={event.id} className="border-b border-black">
                            <td className="px-4 py-1 text-gray-600">{event.location}</td>
                            <td className="px-4 py-1 text-gray-600">{event.time}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={2} className="px-4 py-2 text-center text-gray-500">
                            No recent events available.
                        </td>
                    </tr>
                )}
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

export default RecentCameraEvents;
