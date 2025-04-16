import React from "react";
import { motion } from "framer-motion";

const ChartsHeader = ({ category, title }) => {
  return (
    <div className="max-md:mt-12 mb-10">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="flex items-center gap-2 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <div className="h-6 w-1 bg-gradient-primary rounded-full"></div>
          <p className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-yellow-100">
            Charts
          </p>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <h2 className="text-2xl font-display font-bold tracking-tight text-gray-900 dark:text-white">
            {category}
          </h2>
          <div className="absolute -bottom-2 left-0 h-1 w-12 bg-gradient-primary rounded-full"></div>
        </motion.div>
      </motion.div>

      <motion.p
        className="text-lg text-center font-medium tracking-tight text-gray-700 dark:text-gray-300 mt-6 border-b border-gray-200 dark:border-gray-700 pb-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.3 }}
      >
        {title}
      </motion.p>
    </div>
  );
};

export default ChartsHeader;
