import { useState } from "react";
import { Link } from "react-router-dom";

function Header({ showDownloadButton, onDownload, changeHeaderTheme }) {
  const [headerTheme, setHeaderTheme] = useState(changeHeaderTheme);
  return (
    <header
      className={`
      ${
        headerTheme
          ? "bg-gray-800 text-white px-4 py-4 mb-2"
          : "bg-white text-gray-800"
      }
    `}
    >
      <div className="container flex items-center justify-between px-4 md:px-6">
        <Link className="flex items-center space-x-2">
          <span className="font-semibold">Readme Editor</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-4">
          <Link
            className="font-medium text-sm tracking-wide hover:underline"
            target="_blank"
            to='https://github.com/RaazKetan/ReadmeEditor'>
            Get Code
          </Link>
          <Link
            className="font-medium text-sm tracking-wide hover:underline"
            target="_blank"
            to = "https://ketan-raj-2-0.vercel.app/">
            More Projects
          </Link>
          <Link
            className="font-medium text-sm tracking-wide hover:underline"
            target="_blank"
            to = "https://www.linkedin.com/in/ketan-raj-4ab47b204/">
            Connect
          </Link>
          {showDownloadButton && (
            <button
              className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
              onClick={onDownload}
            >
              Download Readme
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
