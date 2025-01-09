const DashboardCard: React.FC<{ title: string; value: string; icon: React.ReactNode }> = ({ title, value, icon }) => {
    return (
        <div className="bg-white p-4 shadow rounded-lg flex items-center justify-between">
            <div>
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="mt-2 text-gray-600">{value}</p>
            </div>
            <div>{icon}</div>
        </div>
    );
};

export default DashboardCard;
