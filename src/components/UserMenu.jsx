import React, { useState, useRef, useEffect } from "react";
import avatar from "../data/avatar.jpg";
import { MdKeyboardArrowDown } from "react-icons/md";



const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Dropdown toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-10 flex items-center p-2 text-sm text-gray-600 bg-white border border-transparent rounded-full focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-gray-800 focus:outline-none"
      >
        <img
          src={avatar}
          alt="user-profile"
          className="rounded-full w-6 h-6 "
        />
        <p className="text-gray-400 font-medium capitalize max-md:hidden">
          Hi, Ankit
        </p>
        <MdKeyboardArrowDown className="text-gray-400" />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800 transition duration-100 scale-100">
          <a href="#" className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
            <img className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9" src={avatar} alt="jane avatar" />
            <div className="mx-1">
              <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">Ankit Sharma</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">ankit@exampl.com</p>
            </div>
          </a>

          <hr className="border-gray-200 dark:border-gray-700" />

          {[
            {
              label: 'view profile',
              icon: (
                <svg className="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none">
                  <path d="M7 8C7 5.23858..." fill="currentColor" />
                  <path d="M6.34315 16.3431..." fill="currentColor" />
                </svg>
              ),
            },
            {
              label: 'Settings',
              icon: (
                <svg className="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none">
                  <path d="M13.8199 22H10.1799..." fill="currentColor" />
                </svg>
              ),
            },
            {
              label: 'Keyboard shortcuts',
              icon: (
                <svg className="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none">
                  <path d="M21 19H3C1.89543..." fill="currentColor" />
                </svg>
              ),
            },
          ].map((item, idx) => (
            <a
              key={idx}
              href="#"
              className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {item.icon}
              <span className="mx-1">{item.label}</span>
            </a>
          ))}

          <hr className="border-gray-200 dark:border-gray-700" />

          <a href="#" className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
            <svg className="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none">
              <path d="M18 22C15.8082..." fill="currentColor" />
            </svg>
            <span className="mx-1">Log out</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default Dropdown;






