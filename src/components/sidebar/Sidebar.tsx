import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaUsers,
  FaBan,
  FaChevronLeft,
  FaChevronRight,
  FaArchive,
  FaClipboardList,
} from "react-icons/fa";

interface NavItem {
  name: string;
  icon: React.ElementType;
  path: string;
}

const navItems: NavItem[] = [
  { name: "Customers", icon: FaUsers, path: "/customers" },
  { name: "Local Governments", icon: FaArchive, path: "/local-government" },
  { name: "Meter Readings", icon: FaClipboardList, path: "/meter-reading" },
  { name: "Non Payments", icon: FaBan, path: "/non-payments" },
];

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div
      className={`bg-white text-gray-700 h-full transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-60"
      } flex flex-col shadow-lg`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-200 text-[#0077B6] bg-gray-100">
        {!isCollapsed && <span className="font-bold ml-12">Actions</span>}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`p-2 rounded-full hover:bg-gray-200 transition-colors duration-200 ${
            isCollapsed ? "mx-auto" : ""
          }`}>
          {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
        </button>
      </div>
      <nav className="flex-1">
        <ul className="py-4">
          {navItems.map((item) => (
            <li key={item.name} className="mb-2">
              <Link
                to={item.path}
                className={`flex items-center p-3 hover:text-[#0096C7] rounded mx-2 font-semibold text-[#023E8A] transition-colors duration-200 ${
                  location.pathname === item.path ? "bg-[#CAF0F8]" : ""
                }`}
              >
                <item.icon
                  className={`text-xl ${isCollapsed ? "mx-auto" : "mr-3"}`}
                />
                {!isCollapsed && <span>{item.name}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
