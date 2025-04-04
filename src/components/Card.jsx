import React from "react";
import Button from "./Button";

const Card = ({ title, icon, iconColor, iconBg, amount, percentage, percentageColor }) => {
return (
    <div className="bg-white dark:bg-secondary-dark-bg shadow-md rounded-2xl p-4 flex flex-col h-40 justify-end gap-1 max-md:justify-center max-md:items-center">
        <Button
            icon={icon}
            iconColor={iconColor}
            iconBg={iconBg}
            borderRadius={"full"}
            width={"40px"}
            height={"40px"}
        />
        <div className="flex items-center gap-2">
            <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">{amount}</p>
            <p style={{ color: percentageColor }}>{percentage}</p>
        </div>
        <p className="text-slate-500 dark:text-slate-400">{title}</p>
    </div>
);
};

export default Card;
