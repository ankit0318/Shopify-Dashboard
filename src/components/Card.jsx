import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";

const Card = ({
  title,
  icon,
  iconColor,
  iconBg,
  amount,
  percentage,
  percentageColor,

  New,
  Returning
}) => {
  return (
    <motion.div
      className="bg-white dark:bg-secondary-dark-bg shadow-md rounded-xl p-5 flex flex-col h-full justify-end gap-1 max-md:justify-center max-md:items-center card-glow relative overflow-hidden"
      whileHover={{
        y: -5,
        boxShadow:
          "0 15px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      // style={{ backgroundImage: background }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900/10 dark:to-transparent rounded-bl-3xl opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-blue-50 to-transparent dark:from-blue-900/10 dark:to-transparent rounded-tr-3xl opacity-70"></div>

      <motion.div
        className="absolute top-4 left-4"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Button
          icon={icon}
          iconColor={iconColor}
          iconBg={iconBg}
          borderRadius={"full"}
          width={"42px"}
          height={"42px"}
        />
      </motion.div>
      <motion.p
        className="text-sm text-slate-500 dark:text-slate-400 font-medium mt-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        {`New:${New}`}
      </motion.p>
      <motion.p
        className="text-sm text-blue-300 dark:text-slate-400 font-medium mt-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        {Returning}
      </motion.p>
      <motion.div
        className="flex items-center gap-2"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
      >
       
        <p className="text-xl font-bold font-display text-gray-800 dark:text-gray-200">
          {amount}
        </p>
        <motion.span
          className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium"
          style={{
            backgroundColor: `${percentageColor}20`,
            color: percentageColor,
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          {percentage}
        </motion.span>
      </motion.div>

      <motion.p
        className="text-sm text-slate-500 dark:text-slate-400 font-medium mt-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        {title}
      </motion.p>
    </motion.div>
  );
};

export default Card;
