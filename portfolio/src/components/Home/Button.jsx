export default function LinkedInButton() {
    return (
      <span className="flex items-center justify-left my-10 ">
        <a
          href="https://www.linkedin.com/in/aaditya-bir-singh-090801248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" // Replace with your target link
          //target="_blank"                  // Opens the link in a new tab
          rel="noopener noreferrer"        // For security reasons
          className="relative px-6 py-3 text-white font-semibold rounded-lg bg-gray-800 overflow-hidden flex items-center"
        >
          <span className="relative z-10 flex items-center">
            LinkedIn
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn Logo"
              className="inline-block w-6 h-6 ml-2"
            />
          </span>
        </a>
      </span>
    );
  }
  