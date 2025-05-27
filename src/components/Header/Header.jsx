const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <input
        type="text"
        placeholder="Search"
        className="w-1/3 px-4 py-2 rounded-full border border-gray-200"
      />
      <div className="flex items-center gap-4">
        
        <img
          src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png"
          alt="User"
          className="w-10 h-10 rounded-full object-cover"
        />
        <button className="w-8 h-8 bg-blue-600 text-white rounded-md flex items-center justify-center">+</button>

      </div>
    </div>
  );
};

export default Header;
