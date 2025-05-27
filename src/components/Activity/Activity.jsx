const Activity = () => {
    return (
      <div className="bg-white rounded-2xl shadow-md p-4">
        <h3 className="font-semibold mb-2">Activity</h3>
        <p className="text-sm text-gray-400 mb-2">3 appointments on this week</p>
        <div className="flex gap-2 items-end h-24">
          {['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'].map(day => (
            <div key={day} className="flex flex-col items-center gap-1">
              <div className="w-2 bg-blue-400 rounded-full" style={{ height: `${Math.random() * 60 + 20}px` }}></div>
              <span className="text-xs text-gray-500">{day}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Activity;