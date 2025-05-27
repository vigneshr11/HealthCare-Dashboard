const OrganCard = ({ image, label, date, progress, color }) => {
  return (
    <div className="bg-white shadow p-4 rounded-xl space-y-9 w-100">
      <div className="flex items-center gap-2 text-lg font-medium">
        <img src={image} alt={label} className="w-10 h-15 object-contain" />
        {label}
      </div>
      <p className="text-sm text-gray-400">Date: {date}</p>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="h-2 rounded-full"
          style={{ backgroundColor: color, width: progress }}
        ></div>
      </div>
    </div>
  );
};

export default OrganCard;
