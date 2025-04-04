import React from "react";
import { useStateContext } from "../contexts/Context";
import { AiOutlineClose } from "react-icons/ai";

const ThemeSideBar = () => {
  const { themeSettings, setThemeSettings, currentMode, setMode, currentColor, setColor } =
    useStateContext();

  
  const themeColors = [
    { color: "#03C9D7" },
    { color: "#7352FF" },
    { color: "#FF5C8E" },
    { color: "#1E90FF" },
    { color: "#FB9678" },
  ];
  return (
    <>
      {/* Overlay */}
      {themeSettings && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setThemeSettings(false)} // Close sidebar when clicking outside
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 h-full w-96 bg-white dark:bg-secondary-dark-bg z-50 transition-transform text-gray-800 dark:text-gray-200 ${
          themeSettings ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 mt-4">
          <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold mb-4">Settings</h2>

            <button
              className="p-2 rounded-full hover:bg-gray-100 hover:dark:bg-gray-700 transition-colors"
              onClick={() => setThemeSettings((prev) => !prev)}
            >
              <AiOutlineClose className="text-gray-500 dark:text-gray-400" />
            </button>
          </div>
          <hr className="dark:border-gray-700"/>
          {/* Theme Mode */}
          <div className="my-6 ">
            <h3 className="text-xl font-medium mb-2">Theme Option</h3>
            <div>
              <label className="flex items-center mb-2">
                <input
                  type="radio"
                  name="themeMode"
                  value="Light"
                  className="mr-2"
                  onChange={setMode}
                  checked={currentMode === "Light"}
                />
                Light
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="themeMode"
                  value="Dark"
                  className="mr-2"
                  onChange={setMode}
                  checked={currentMode === "Dark"}
                />
                Dark
              </label>
            </div>
          </div>
          <hr className="dark:border-gray-700"/>
          {/* Theme Colors */}
          <div>
            <h3 className="text-xl font-medium mt-6 mb-4">Theme Colors</h3>
            <div className="flex gap-3">
              {themeColors.map((item, index) => (
                <button
                  key={index}
                  className="h-10 w-10 rounded-full cursor-pointer border-2 border-transparent"
                  style={{ backgroundColor: item.color }}
                  onClick={() => setColor(item.color)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThemeSideBar;
