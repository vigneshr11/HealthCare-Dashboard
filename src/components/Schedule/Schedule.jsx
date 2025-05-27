import { BeakerIcon, EyeIcon, HeartIcon, UserCircleIcon } from '@heroicons/react/24/solid';

const Schedule = () => {
    return (
        
    

      <div className="bg-white rounded-2xl shadow-md p-4">
          <h3 className="font-semibold mb-2">The Upcoming Schedule</h3>
        <div className="space-y-6">
          <h3 className="text-gray-300">On Thursday</h3>
          <div className="bg-violet-100 px-3 py-9 rounded-xl flex justify-between">
            <span>Health checkup complete</span>
            <BeakerIcon className="h-6 w-6 text-orange-600" />
            <span>11:00 AM</span>
          </div>
          <div className="bg-violet-100 px-3 py-9 rounded-xl flex justify-between">
            <span>Ophthalmologist</span>
            <EyeIcon className="h-6 w-6 text-black-600" />
            <span>14:00 PM</span>
          </div>
          <h3 className="mt-1 text-gray-300">On Saturday</h3>

          <div className="bg-violet-100 px-3 py-9 rounded-xl flex justify-between">
            <span>Cardiologist</span>
            <HeartIcon className="h-6 w-6 text-red-600" />
            <span>12:00 AM</span>
          </div>
          <div className="bg-violet-100 px-3 py-9 rounded-xl flex justify-between">
            <span>Neurologist</span>
            <UserCircleIcon className="h-6 w-6 text-white-600" />
            <span>16:00 PM</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default Schedule;