import React, { useState, useRef, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { useStateContext } from "../contexts/Context";

const SearchBar = () => {
  const { isExpanded, setIsExpanded } = useStateContext();
  const [searchTerm, setSearchTerm] = useState("");
  const searchRef = useRef(null);
  const { currentColor } = useStateContext();

  // Handle clicks outside the search component to collapse it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsExpanded]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement your search logic here
    console.log("Searching for:", searchTerm);
    // You could call an API or filter data based on the search term
  };

  const toggleSearch = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      // Focus on input when expanded
      setTimeout(() => {
        document.getElementById("search-input")?.focus();
      }, 100);
    }
  };

  return (
    <div className="relative" ref={searchRef}>
      <AnimatePresence mode="wait">
        {isExpanded ? (
          <motion.form
            key="expanded"
            onSubmit={handleSearch}
            className="flex items-center bg-white dark:bg-gray-800 rounded-full overflow-hidden shadow-md border border-gray-200 dark:border-gray-700"
            initial={{ width: "40px", opacity: 0 }}
            animate={{ width: "250px", opacity: 1 }}
            exit={{ width: "40px", opacity: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            <motion.div
              className="flex items-center pl-3 text-gray-500 dark:text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <AiOutlineSearch className="text-lg" />
            </motion.div>

            <motion.input
              id="search-input"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search dashboard..."
              className="w-full px-3 py-2 outline-none border-none bg-transparent dark:text-gray-200 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            />

            <motion.button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setIsExpanded(false);
              }}
              className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <IoMdClose />
            </motion.button>
          </motion.form>
        ) : (
          <motion.button
            key="collapsed"
            onClick={toggleSearch}
            className="text-lg rounded-full p-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            type="button"
            aria-label="Search"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: `${currentColor}20`,
            }}
            whileTap={{ scale: 0.9 }}
          >
            <AiOutlineSearch />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;
