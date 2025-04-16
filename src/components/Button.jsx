import React from "react";
import { motion } from "framer-motion";

const Button = ({
  iconColor,
  iconBg,
  borderRadius = "md",
  icon,
  size = "base",
  width,
  height,
  text,
  bgHoverColor,
  onClick,
  disabled = false,
}) => {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      style={{
        backgroundColor: iconBg,
        color: iconColor,
        width: width,
        height: height,
      }}
      className={`
        text-${size} p-3 
        flex justify-center items-center
        rounded-${borderRadius} 
        transition-all duration-300 ease-in-out
        shadow-sm
        hover:shadow-md
        ${
          disabled
            ? "opacity-60 cursor-not-allowed"
            : "hover:translate-y-[-2px]"
        }
        ${bgHoverColor ? `hover:bg-${bgHoverColor}` : "hover:brightness-110"}
      `}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {icon && <span className="flex items-center justify-center">{icon}</span>}
      {text && (
        <span className={`${icon ? "ml-2" : ""} font-medium`}>{text}</span>
      )}
    </motion.button>
  );
};

export default Button;
