// SideMenu.tsx
import React from "react";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transition-transform transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button
        className="absolute top-4 left-4 p-2 bg-gray-200 rounded"
        onClick={onClose}
      >
        Close
      </button>
      <div className="p-4 overflow-y-auto h-full">
        <p>Some content here...</p>
        <p>More content...</p>
        <p>Even more content...</p>
        {/* Add more content to test scrolling */}
      </div>
    </div>
  );
};

export default SideMenu;
