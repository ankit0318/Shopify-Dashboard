import React from 'react';

const Button = ({ iconColor, iconBg, borderRadius, icon, size = 'base', width, height ,text}) => {
  return (
    <button
      style={{ 
        backgroundColor: iconBg, 
        color: iconColor,
   
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth:width,
        maxHeight:height,
   
      }}
      className={`text-${size} p-3 hover:drop-shadow-xl rounded-${borderRadius} hover:bg-light-gray   `}
    >
      {icon?icon:text}
    </button>
  );
};

export default Button;