import { UserIcon   } from '@heroicons/react/24/solid';

const Appointments = () => {
  return (
    <div className="bg-purple rounded-2xl shadow-md p-4 mt-4">
      <div className="space-y-6">
        <div className="bg-indigo-300 px-3 py-9 rounded-xl flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span>Dentist</span>
          </div>
          <span>9:00-11:00</span>
          <span>Dr.Cameron Williamson</span>
          <UserIcon className="h-6 w-6 text-red-600" />
        </div>


        <div className="bg-blue-100 px-3 py-9 rounded-xl flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span>Physiotherapy Appoinment</span>
          </div>
          <span>11:00-12:00</span>
          <span>Dr.Kevin Djones</span>
          <UserIcon className="h-6 w-6 text-blue-600" />
        </div>
      </div>
    </div>
  );
};

export default Appointments;
