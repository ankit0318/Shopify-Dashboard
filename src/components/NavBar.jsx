import {
  AiFillPieChart,
  AiFillWechat,
  AiOutlineMenu,
  AiOutlineRadarChart,
  AiOutlineSearch,
} from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import avatar from "../data/avatar.jpg";
import React, { useEffect } from "react";
import { Avatar, Tooltip } from "@mui/material";
import { useStateContext } from "../contexts/Context.jsx";
import { FaMoon, FaSun } from "react-icons/fa";
import UserMenu from "./UserMenu.jsx";
// import Notification from "./Notification.jsx";
import NotificationDropdown from "./Notification.jsx";
import CartDropDown from "./Cart.jsx";
import ChatDropdown from "./chat.jsx";
import SearchBar from "./SearchBar.jsx";

const NavButton = ({ title, handleAction, icon }) => {
  return (
    <Tooltip
      title={title}
      placement="bottom"
      arrow
      enterDelay={1200} // Add a small delay before showing tooltip
      leaveDelay={100} // Small delay when leaving
      disableInteractive={true} // Disable hover interactivity
    >
      <button
        onClick={handleAction} // Pass the function reference directly
      className="text-xl rounded-full p-3 hover:bg-light-gray dark:hover:bg-transparent"
        type="button"
      >
        {icon}
      </button>
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
  }, [setActiveMenu]); // Only depend on setActiveMenu
  return (
    <div className="flex justify-between items-center p-2  h-20">
      <div className="flex items-center">
        <NavButton
          title={"menu"}
          handleAction={() => setActiveMenu((prev) => !prev)}
          icon={<AiOutlineMenu />}
        />
     <SearchBar/>
      </div>
      <div className="flex items-center gap-2">
        {currentMode == "Light" ? (
          <NavButton
            title={"Light Mode"}
            handleAction={() => {
              localStorage.setItem("themeMode", "Dark");
              setCurrentMode("Dark");
            }}
            icon={<FaSun className="text-yellow-400" />}
          />
        ) : (
          <NavButton
            title={"Dark Mode"}
            handleAction={() => {
              localStorage.setItem("themeMode", "Light");
              setCurrentMode("Light");
            }}
            icon={<FaMoon className="text-white " />}
          />
        )}
       
        <CartDropDown />
        
<ChatDropdown />     
      <NotificationDropdown />
   

        <Tooltip title="Profile" placement="bottom" arrow>
         
            <UserMenu />
     
        </Tooltip>
      
      </div>
    </div>
  );
};

export default NavBar;
