import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import Tooltip from "@mui/material/Tooltip";
import SideBar from "./components/SideBar.jsx";
import { useStateContext } from "./contexts/Context";
import NavBar from "./components/NavBar.jsx";
import { useEffect } from "react";
import {
    Ecommerce,
    Orders,
    Employees,
    Customers,
    Kanban,
    Editor,
    Calendar,
    ColorPicker,
    Line,
    Area,
    Bar,
    Pie,
    Financial,
    ColorMapping,
    Pyramid,
    Stacked,
} from "./pages";
import ThemeSideBar from "./components/ThemeSideBar.jsx";

function App() {
  const { activeMenu, setActiveMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext();

  // Apply dark mode class to the HTML element
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (currentMode === 'Dark') {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }, [currentMode]);

  return (
    <BrowserRouter>
      <div className="flex relative dark:text-white">
    
          {themeSettings ? <ThemeSideBar /> : <div className="fixed right-4 bottom-4 z-50 ">
            <Tooltip
              title="settings"
              placement="top"
              arrow
              slotProps={{ tooltip: { sx: { fontSize: "0.8rem" } } }}
            >
              <button
                onClick={() => setThemeSettings(true)}
                style={{
                  backgroundColor: currentColor,
                  borderRadius: "50%",
                  padding: "10px",
                  color: "white",
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FiSettings style={{ fontSize: "1.5rem" }} />
              </button>
            </Tooltip>
          </div>}
          
          {/* Main Layout Container */}
        <div className="flex relative w-full h-full ">
          {/* Sidebar */}
          {activeMenu && (
            <div className="w-64 fixed sidebar h-screen bg-white dark:bg-secondary-dark-bg z-50 text-gray-700 dark:text-gray-200">
              <SideBar />
            </div>
          )}

          {/* Main Content Area */}
          <div 
            className={`dark:bg-main-dark-bg bg-main-bg 
            w-full text-gray-800 dark:text-gray-200 h-full
              ${activeMenu ? 'md:ml-64' : 'flex-2'}`}
          >
            <div className="fixed md:static  bg-main-bg dark:bg-main-dark-bg  w-full ">
              <NavBar />
            </div>
            
            {/* Routes */}
            <div className="w-full h-full  mt-20 md:mt-4">
              <Routes>
                {/* dashboard */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />

                {/* pages */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                {/* apps */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/* charts */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;