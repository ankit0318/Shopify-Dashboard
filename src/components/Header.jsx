import React from "react";
import { motion } from "framer-motion";

const Header = ({ category, title }) => (
  <div className="mb-10 max-md:mt-16">
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.p
        className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        {category}
      </motion.p>
      <motion.div
        className="relative"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        <h2 className="text-3xl font-display font-extrabold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h2>
        <div className="absolute -bottom-2 left-0 h-1 w-12 bg-gradient-primary rounded-full"></div>
      </motion.div>
    </motion.div>
  </div>
);

export default Header;
