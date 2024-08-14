export default function LinkedInButton() {
    return (
      <div className="flex items-center justify-left my-10 ">
        <button className="relative px-6 py-3 text-white font-semibold rounded-lg bg-gray-800 overflow-hidden">
          <span className="relative z-10 flex items-center">
            LinkedIn
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
              alt="LinkedIn Logo"
              className="inline-block w-6 h-6 ml-2"
            />
          </span>
          
        </button>
      </div>
    );
  }
  