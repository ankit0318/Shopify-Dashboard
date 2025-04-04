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
      className="text-xl rounded-full p-3 hover:bg-light-gray"
      type="button"
    >
      {icon}
    </button>
  </Tooltip>
  );
};

const NavBar = () => {
  const { activeMenu, setActiveMenu, isClicked, handleClick,screenSizeRef } = useStateContext();

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
    <div className="flex justify-between items-center p-2 relative h-20">
      <div className="flex items-center">
        <NavButton
          title={"menu"}
          handleAction={()=>setActiveMenu((prev) => !prev)}
          icon={<AiOutlineMenu />}
        />
        <NavButton
          title={"search"}
          handleAction={()=>setActiveMenu((prev) => !prev)}
          icon={<AiOutlineSearch />}
        />
      </div>
      <div className="flex items-center gap-2">
        <NavButton
          title={"cart"}
          handleAction={() => handleClick("cart")}
          icon={<FiShoppingCart />}
        />
        <NavButton
          title={"chat"}
          handleAction={() => handleClick("chat")}
          icon={<BsChatLeft />}
        />
        <NavButton
          title={"notification"}
          handleAction={() => handleClick("notification")}
          icon={<RiNotification3Line />}
        />

        <Tooltip title="Profile" placement="bottom" arrow>
          <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray dark:hover:bg-gray-700 rounded-lg" onClick={() => handleClick("userProfile")}>
            <img
              src={avatar}
              alt="user-profile"
              className="rounded-full w-6 h-6 "
            />
            <p className="text-gray-400 font-medium capitalize max-md:hidden">Hi, Ankit</p>
            <MdKeyboardArrowDown className="text-gray-400" />
          </div>
        </Tooltip>

      </div>
    </div>
  );
};

export default NavBar;
