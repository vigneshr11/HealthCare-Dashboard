import { FaChartBar, FaCalendarAlt, FaComments, FaCogs, FaHeartbeat, FaHistory, FaUserMd,FaPhone } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white p-6 rounded-2xl shadow-md flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-bold text-blue-600 mb-8">Health<span className="text-black">care.</span></h1>
        <ul className="space-y-6 text-gray-700">
          <p className="text-sm text-gray-500 uppercase mb-2">General</p>
          <li className="flex items-center gap-3 text-blue-600 font-semibold"><FaHeartbeat /> Dashboard</li>
          <li className="flex items-center gap-3"><FaHistory /> History</li>
          <li className="flex items-center gap-3"><FaCalendarAlt /> Calendar</li>
          <li className="flex items-center gap-3"><FaUserMd /> Appointments</li>
          <li className="flex items-center gap-3"><FaChartBar /> Statistics</li>
        </ul>
        <div className="mt-10">
          <p className="text-sm text-gray-500 uppercase mb-3">Tools</p>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-3"><FaComments /> Chat</li>
            <li className="flex items-center gap-3"><FaPhone /> Support</li>
          </ul>
        </div>
      </div>
         <li className="flex items-center gap-3"><FaCogs /> Settings</li>

    </div>
  );
};

export default Sidebar;