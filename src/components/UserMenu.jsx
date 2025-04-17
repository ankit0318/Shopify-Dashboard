import React, { useState, useRef, useEffect } from "react";
import avatar from "../data/avatar5.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { useStateContext } from "../contexts/Context";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { currentColor } = useStateContext();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems = [
    {
      label: "View Profile",
      icon: (
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
            fill="currentColor"
          />
          <path
            d="M12 13C8.13401 13 5 16.134 5 20V21H19V20C19 16.134 15.866 13 12 13Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      label: "Settings",
      icon: (
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "Keyboard shortcuts",
      icon: (
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 7H4C3.44772 7 3 7.44772 3 8V16C3 16.5523 3.44772 17 4 17H8C8.55228 17 9 16.5523 9 16V8C9 7.44772 8.55228 7 8 7Z"
            fill="currentColor"
          />
          <path
            d="M14 7H10C9.44772 7 9 7.44772 9 8V16C9 16.5523 9.44772 17 10 17H14C14.5523 17 15 16.5523 15 16V8C15 7.44772 14.5523 7 14 7Z"
            fill="currentColor"
          />
          <path
            d="M20 7H16C15.4477 7 15 7.44772 15 8V16C15 16.5523 15.4477 17 16 17H20C20.5523 17 21 16.5523 21 16V8C21 7.44772 20.5523 7 20 7Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative inline-block z-[999]" ref={dropdownRef}>
      {/* Dropdown toggle button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-10 h-14 mt-[4px] -mr-2 flex items-center justify-center  text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 focus:outline-none"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img
          src={avatar}
          alt="user-profile"
          className="rounded-full max-md:w-10 max-md:h-10   w-14 h-14 object-cover border-2 border-white dark:border-gray-700 shadow-sm"
        />
        <div className="flex flex-col items-start">

        <p className="text-gray-700  font-bold dark:text-gray-300 tracking-tight  max-md:hidden">
         Ankit Sharma
        </p>
        <p className="text-slate-700  dark:text-gray-300 tracking-tight  max-md:hidden">
         Admin
        </p>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <MdKeyboardArrowDown className="text-gray-500 dark:text-gray-400 max-md:hidden" />
        </motion.div>
      </motion.button>

      {/* Dropdown menu with AnimatePresence for smooth animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute right-0   z-[1000] w-80 py-2 mt-3 overflow-hidden bg-white rounded-xl shadow-xl dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{
              transformOrigin: "top right",
              boxShadow:
                "0 5px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.03)",
            }}
          >
            {/* User profile section */}
            <div className="p-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    className="w-24 h-24 rounded-full object-cover border-2 border-white dark:border-gray-700"
                    src={avatar}
                    alt="User avatar"
                  />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                    Ankit Sharma
                  </h3>
                  <p className="text-lg text-gray-500 dark:text-gray-400">
                    ankit@example.com
                  </p>
                  <div className="flex items-center mt-1">
                    <span
                      className="inline-flex items-center justify-center px-2 py-0.5 text-xs rounded-full font-medium"
                      style={{
                        backgroundColor: `${currentColor}20`,
                        color: currentColor,
                      }}
                    >
                      Admin
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent"></div>

            {/* Menu items */}
            <div className="p-2">
              {menuItems.map((item, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  className="flex items-center gap-3 p-2.5 text-sm text-gray-700 capitalize rounded-lg transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  whileHover={{ x: 5, backgroundColor: `${currentColor}10` }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <span className="text-gray-600 dark:text-gray-400">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </motion.a>
              ))}
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent"></div>

            {/* Logout button */}
            <div className="p-2">
              <motion.a
                href="#"
                className="flex items-center gap-3 p-2.5 text-sm rounded-lg transition-colors duration-300 transform"
                style={{
                  color: "#ef4444",
                  backgroundColor: "#ef444410",
                }}
                whileHover={{
                  x: 5,
                  backgroundColor: "#ef444420",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 17L21 12L16 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 12H9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Log out</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UserMenu;
