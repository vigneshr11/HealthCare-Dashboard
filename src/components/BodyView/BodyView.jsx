import { HeartIcon } from '@heroicons/react/24/solid';

const BodyView = () => {
    return (
      <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center">
        <img
          src="https://pouch.jumpshare.com/preview/gWLN5Wyvt-qrHNEAyJCzimjhvJSpx86baI8agk7uum8AfU_8cfFuiCyrOjFQPN9T2fa9IRmcA5HdWvnpySkgOqfHJTGEvbgkf9VT6BPbc0Q"
          alt="Body"
          className="w-140 h-100 object-contain"
        />
        <button className="bg-purple-600 text-white px-7 py-1 rounded-full mt-2 text-sm"><HeartIcon className="h-4 w-4 text-red-600"/>Healthy Heart</button>
        <button className="bg-cyan-400 text-white px-7 py-1 rounded-full mt-2 text-sm"><HeartIcon className="h-4 w-4 text-red-600"/>Healthy Leg</button>
      </div>
    );
  };
  
  export default BodyView;


