import React, { useState, useEffect } from "react";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import Logo from "../../public/love.svg";
import SearchModal from "../ui/search";

// Function to load Google Fonts
const loadGoogleFont = (fontName: string) => {
  const link = document.createElement("link");
  link.href = `https://fonts.googleapis.com/css2?family=${fontName}&display=swap`;
  link.rel = "stylesheet";
  document.head.appendChild(link);
};

const Navbar: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    loadGoogleFont("Great+Vibes"); // Load the font
  }, []);

  return (
    <nav className="flex items-center justify-around bg-transparent text-white p-4 shadow-sm w-full  rounded-md">
      {/* Left side - Logo */}
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-10 mr-4 rounded-full" />{" "}
        <span
          className="text-3xl font-bold text-red-500"
          style={{ fontFamily: "Great Vibes, cursive" }}
        >
          Happy Valentines
        </span>
      </div>

      {/* Right side - Icons */}
      <div className="flex items-center">
        {/* Search Icon */}
        <FaSearch
          className="text-4xl text-red-600 mr-6 cursor-pointer"
          onClick={() => setShowModal(true)}
        />

        {/* Account Icon */}
        <FaUserCircle className="text-4xl text-red-600 cursor-pointer" />
      </div>
      <SearchModal showModal={showModal} setShowModal={setShowModal} />
    </nav>
  );
};

export default Navbar;
