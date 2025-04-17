import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
import { AnimatePresence, motion } from "framer-motion";

// Animated page wrapper component
const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

// Animated routes component
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* dashboard */}
        <Route
          path="/"
          element={
            <AnimatedPage>
              <Ecommerce />
            </AnimatedPage>
          }
        />
        <Route
          path="/ecommerce"
          element={
            <AnimatedPage>
              <Ecommerce />
            </AnimatedPage>
          }
        />

        {/* pages */}
        <Route
          path="/orders"
          element={
            <AnimatedPage>
              <Orders />
            </AnimatedPage>
          }
        />
        <Route
          path="/employees"
          element={
            <AnimatedPage>
              <Employees />
            </AnimatedPage>
          }
        />
        <Route
          path="/customers"
          element={
            <AnimatedPage>
              <Customers />
            </AnimatedPage>
          }
        />

        {/* apps */}
        <Route
          path="/kanban"
          element={
            <AnimatedPage>
              <Kanban />
            </AnimatedPage>
          }
        />
        <Route
          path="/editor"
          element={
            <AnimatedPage>
              <Editor />
            </AnimatedPage>
          }
        />
        <Route
          path="/calendar"
          element={
            <AnimatedPage>
              <Calendar />
            </AnimatedPage>
          }
        />
        <Route
          path="/color-picker"
          element={
            <AnimatedPage>
              <ColorPicker />
            </AnimatedPage>
          }
        />

        {/* charts */}
        <Route
          path="/line"
          element={
            <AnimatedPage>
              <Line />
            </AnimatedPage>
          }
        />
        <Route
          path="/area"
          element={
            <AnimatedPage>
              <Area />
            </AnimatedPage>
          }
        />
        <Route
          path="/bar"
          element={
            <AnimatedPage>
              <Bar />
            </AnimatedPage>
          }
        />
        <Route
          path="/pie"
          element={
            <AnimatedPage>
              <Pie />
            </AnimatedPage>
          }
        />
        <Route
          path="/financial"
          element={
            <AnimatedPage>
              <Financial />
            </AnimatedPage>
          }
        />
        <Route
          path="/color-mapping"
          element={
            <AnimatedPage>
              <ColorMapping />
            </AnimatedPage>
          }
        />
        <Route
          path="/pyramid"
          element={
            <AnimatedPage>
              <Pyramid />
            </AnimatedPage>
          }
        />
        <Route
          path="/stacked"
          element={
            <AnimatedPage>
              <Stacked />
            </AnimatedPage>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const {
    activeMenu,
    setActiveMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  // Apply dark mode class to the HTML element
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (currentMode === "Dark") {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  }, [currentMode]);

  return (
    <BrowserRouter>
      <div className="flex relative bg-main-bg dark:text-white dark:bg-main-dark-bg theme-transition">
        {themeSettings ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <ThemeSideBar />
          </motion.div>
        ) : (
          <motion.div
            className="fixed right-4 bottom-4 z-50"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
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
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <FiSettings style={{ fontSize: "1.5rem" }} />
                </motion.div>
              </button>
            </Tooltip>
          </motion.div>
        )}

        {/* Main Layout Container */}
        <div className="flex relative w-full h-full ">
          {/* Sidebar */}
          {activeMenu && (
            <motion.div
              className="w-64 fixed sidebar rounded-3xl m-3  h-full bg-white dark:bg-secondary-dark-bg z-50 text-gray-700 dark:text-gray-200 theme-transition"
              initial={{ x: -250 }}
              animate={{ x: 0 }}
              exit={{ x: -250 }}
              transition={{ duration: 0.3 }}
            >
              <SideBar />
            </motion.div>
          )}

          {/* Main Content Area */}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg p-3
            w-full text-gray-800 dark:text-gray-200 h-full theme-transition
              ${activeMenu ? "md:ml-64" : "flex-2"}`}
          >
            <motion.div
              className="fixed md:static bg-main-bg dark:bg-main-dark-bg w-full theme-transition"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <NavBar />
            </motion.div>

            {/* Routes */}
            <div className=" h-full w-full mt-24 md:mt-4 ">
              <AnimatedRoutes />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
