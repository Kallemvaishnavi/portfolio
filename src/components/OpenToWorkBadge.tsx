
const OpenToWorkBadge = () => {
  return (
    <div className="fixed top-4 left-4 z-50 animate-fade-in">
      <div className="bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-2 rounded-full shadow-lg backdrop-blur-md border border-green-300/30 animate-glow">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <span className="text-sm font-poppins font-semibold">Open to Work</span>
        </div>
      </div>
    </div>
  );
};

export default OpenToWorkBadge;
