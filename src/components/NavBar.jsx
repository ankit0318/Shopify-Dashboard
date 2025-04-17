import { AiOutlineMenu } from "react-icons/ai";
import React, { useEffect } from "react";
import { Tooltip } from "@mui/material";
import { useStateContext } from "../contexts/Context.jsx";
import { FaMoon, FaSun } from "react-icons/fa";
import UserMenu from "./UserMenu.jsx";
import NotificationDropdown from "./Notification.jsx";
import CartDropDown from "./Cart.jsx";
import ChatDropdown from "./chat.jsx";
import SearchBar from "./SearchBar.jsx";
import { motion, AnimatePresence } from "framer-motion";

const NavButton = ({ title, handleAction, icon, className = "" }) => {
  return (
    <Tooltip
      title={title}
      placement="bottom"
      arrow
      enterDelay={800}
      leaveDelay={100}
      disableInteractive={true}
    >
      <motion.button
        onClick={handleAction}
        className={`relative text-xl rounded-full p-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 ${className}`}
        type="button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <motion.span
          animate={{ rotate: 360 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            repeat: 0,
          }}
        >
          {icon}
        </motion.span>
      </motion.button>
    </Tooltip>
  );
};

const NavBar = () => {
  const {
    activeMenu,
    setActiveMenu,
    setCurrentMode,
    currentMode,
    isClicked,
    handleClick,
    screenSizeRef,
    currentColor,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      screenSizeRef.current = currentWidth;

      // Automatically update activeMenu based on screen size
      if (currentWidth <= 900) {
        setActiveMenu(false);
      } else {
        setActiveMenu(true);
      }
    };

    // Set initial size and add listener
    window.addEventListener("resize", handleResize);
    handleResize();

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, [setActiveMenu]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: -10, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      className="flex justify-between items-center rounded-full   px-4 py-2 h-16 theme-transition bg-white dark:bg-secondary-dark-bg shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <motion.div
        className="flex items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <NavButton
            title={"Toggle Menu"}
            handleAction={() => setActiveMenu((prev) => !prev)}
            icon={
              <AiOutlineMenu className="text-gray-600 dark:text-gray-300" />
            }
          />
        </motion.div>
        <motion.div variants={itemVariants} className="ml-2">
          <SearchBar />
        </motion.div>
      </motion.div>

      <motion.div
        className="flex items-center justify-center gap-1 md:gap-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        
      >
        <AnimatePresence mode="wait">
          {currentMode === "Light" ? (
            <motion.div
              key="sun"
              variants={itemVariants}
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 180 }}
              transition={{ duration: 0.5 }}
            >
              <NavButton
                title={"Dark Mode"}
                handleAction={() => {
                  localStorage.setItem("themeMode", "Dark");
                  setCurrentMode("Dark");
                }}
                icon={<FaSun className="text-yellow-400" />}
                className="bg-gray-100 dark:bg-gray-800"
              />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              variants={itemVariants}
              initial={{ opacity: 0, rotate: 180 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -180 }}
              transition={{ duration: 0.5 }}
            >
              <NavButton
                title={"Light Mode"}
                handleAction={() => {
                  localStorage.setItem("themeMode", "Light");
                  setCurrentMode("Light");
                }}
                icon={<FaMoon className="text-blue-300" />}
                className="bg-gray-800"
              />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          variants={itemVariants}
          className="relative z-50"
          style={{
            filter: `drop-shadow(0 0 2px ${currentColor}40)`,
          }}
        >
          <CartDropDown />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="relative z-50"
          style={{
            filter: `drop-shadow(0 0 2px ${currentColor}40)`,
          }}
        >
          <ChatDropdown />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="relative z-50"
          style={{
            filter: `drop-shadow(0 0 2px ${currentColor}40)`,
          }}
        >
          <NotificationDropdown />
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="relative z-50"
        >
          <Tooltip title="Profile" placement="bottom" arrow>
            <div className="relative">
              <UserMenu />
              {/* Subtle glow effect behind avatar
              <div
                className="absolute   -mr-2 -inset-0.5 rounded-full opacity-40 blur-xs"
                style={{ backgroundColor: currentColor, zIndex: -1 }}
              ></div> */}
            </div>
          </Tooltip>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default NavBar;
