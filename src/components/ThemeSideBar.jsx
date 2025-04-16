import React, { useEffect, useRef } from "react";
import { useStateContext } from "../contexts/Context";
import { AiOutlineClose } from "react-icons/ai";
import { FaSun, FaMoon, FaPalette } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ThemeSideBar = () => {
  const {
    themeSettings,
    setThemeSettings,
    currentMode,
    setMode,
    currentColor,
    setColor,
  } = useStateContext();

  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setThemeSettings(false);
      }
    };

    if (themeSettings) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [themeSettings, setThemeSettings]);

  const themeColors = [
    { color: "#6366f1", name: "Indigo" }, // Our primary color
    { color: "#8b5cf6", name: "Purple" },
    { color: "#ec4899", name: "Pink" },
    { color: "#06b6d4", name: "Cyan" },
    { color: "#10b981", name: "Emerald" }, // Success color
    { color: "#f59e0b", name: "Amber" }, // Warning color
    { color: "#ef4444", name: "Red" }, // Danger color
  ];

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {themeSettings && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
            onClick={() => setThemeSettings(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        ref={sidebarRef}
        className="fixed right-0 top-0  h-full w-96 bg-white dark:bg-secondary-dark-bg z-[999] shadow-2xl text-gray-800 dark:text-gray-200 overflow-hidden"
        initial={{ x: 300 }}
        animate={{ x: themeSettings ? 0 : 300 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      >
        <div className="p-6 h-full overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <motion.h2
              className="text-2xl font-display font-bold"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Appearance
            </motion.h2>

            <motion.button
              className="p-2 rounded-full hover:bg-gray-100 hover:dark:bg-gray-700 transition-colors text-gray-500 dark:text-gray-400"
              onClick={() => setThemeSettings(false)}
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <AiOutlineClose className="text-xl" />
            </motion.button>
          </div>

          <div className="space-y-8">
            {/* Theme Mode */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-2">
                <FaSun className="text-yellow-400" />
                <h3 className="text-lg font-medium">Display Mode</h3>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-2">
                <motion.label
                  className={`flex items-center justify-center gap-2 p-3 rounded-lg border-2 cursor-pointer transition-all
                    ${
                      currentMode === "Light"
                        ? `border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 font-medium`
                        : `border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600`
                    }`}
                  whileHover={{ y: -4 }}
                  whileTap={{ y: 0 }}
                >
                  <FaSun className="text-yellow-400" />
                  <input
                    type="radio"
                    name="themeMode"
                    value="Light"
                    className="hidden"
                    onChange={setMode}
                    checked={currentMode === "Light"}
                  />
                  <span>Light</span>
                </motion.label>

                <motion.label
                  className={`flex items-center justify-center gap-2 p-3 rounded-lg border-2 cursor-pointer transition-all
                    ${
                      currentMode === "Dark"
                        ? `border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 font-medium`
                        : `border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600`
                    }`}
                  whileHover={{ y: -4 }}
                  whileTap={{ y: 0 }}
                >
                  <FaMoon className="text-blue-400" />
                  <input
                    type="radio"
                    name="themeMode"
                    value="Dark"
                    className="hidden"
                    onChange={setMode}
                    checked={currentMode === "Dark"}
                  />
                  <span>Dark</span>
                </motion.label>
              </div>
            </motion.div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>

            {/* Theme Colors */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-2">
                <FaPalette className="text-primary-500" />
                <h3 className="text-lg font-medium">Theme Colors</h3>
              </div>

              <div className="grid grid-cols-4 gap-3 mt-2">
                {themeColors.map((item, index) => (
                  <motion.button
                    key={index}
                    className={`h-16 w-full rounded-lg cursor-pointer group relative transition-all duration-200
                      ${
                        item.color === currentColor
                          ? "ring-2 ring-offset-2 ring-offset-white dark:ring-offset-gray-800 shadow-lg scale-105"
                          : ""
                      }
                    `}
                    style={{
                      backgroundColor: item.color,
                      boxShadow:
                        item.color === currentColor
                          ? `0 4px 12px ${item.color}80`
                          : "",
                      ringColor: item.color,
                    }}
                    onClick={() => setColor(item.color)}
                    whileHover={{ y: -5, scale: 1.05 }}
                    whileTap={{ y: 0, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Color name tooltip */}
                    <span className="absolute bottom-0 left-0 right-0 text-xs bg-black bg-opacity-70 text-white py-1 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.name}
                    </span>
                  </motion.button>
                ))}
              </div>

              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Selected color will be applied to active menu items, buttons,
                  and accents throughout the dashboard.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ThemeSideBar;
