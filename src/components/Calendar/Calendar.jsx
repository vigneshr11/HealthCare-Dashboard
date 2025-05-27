import React from 'react';

const Calendar = () => {
  const days = [25, 26, 27, 28, 29, 30, 31];

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold mb-2">October 2021</h3>
      <div className="grid grid-cols-7 gap-2 text-center text-sm text-gray-600">
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
        <div>Sun</div>
        {days.map((day) => (
          <div
            key={day}
            className={`p-2 rounded-lg ${
              day === 26 ? 'bg-blue-200 text-blue-900' : ''
            }`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default Calendar;
