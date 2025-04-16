import { NavLink } from "react-router-dom";
import { links } from "../data/dummy.jsx";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useStateContext } from "../contexts/Context.jsx";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import avatar from "../data/avatar5.png";
function SideBar() {
  const { activeMenu, setActiveMenu, currentColor } = useStateContext();
  const activeLink = `text-white font-medium`;
  const normalLink = "text-gray-700 dark:text-gray-300 font-light";

  // Animation variants
  const sidebarVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="flex flex-col pl-6 pt-5 pr-0  bg-white dark:bg-secondary-dark-bg h-full theme-transition shadow-lg rounded-3xl">
      <div className="flex flex-row justify-between pr-3 items-center mb-6 gap-3 font-extrabold text-xl text-slate-900 tracking-tight dark:text-white">
        <NavLink
          to="/"
          className="flex items-center h-10 mt-1 text-gray-900 dark:text-white"
        >
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="relative w-12 h-12 flex items-center justify-center"
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img src="/shopping-trolley.png" alt="logo" className="w-14 h-10" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <img src="/image.png" alt="Shopify" className="h-28 -ml-2" />
            </motion.div>
          </motion.div>
        </NavLink>
        <motion.div className="md:hidden" whileTap={{ scale: 0.9 }}>
          <button
            className="p-2 rounded-full hover:bg-gray-100 hover:dark:bg-gray-700 transition-colors"
            onClick={() => setActiveMenu((prev) => !prev)}
          >
            <AiOutlineClose className="text-gray-500 dark:text-gray-400" />
          </button>
        </motion.div>
      </div>
      <PerfectScrollbar className="pb-10">
        <motion.div
          variants={sidebarVariants}
          initial="hidden"
          animate="visible"
        >
          {links.map((link, index) => (
            <motion.div
              className="flex flex-col pr-2 gap-3 mt-2 mb-8"
              key={index}
              variants={itemVariants}
            >
              <motion.p
                className="text-gray-400 dark:text-gray-500 text-xs font-semibold tracking-wider capitalize ml-3 mb-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.title.toLocaleUpperCase()}
              </motion.p>
              <div className="space-y-1">
                {link.links &&
                  link.links.map((item, subIndex) => (
                    <motion.div
                      key={subIndex}
                      variants={itemVariants}
                      custom={subIndex}
                      whileHover={{ x: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      <NavLink
                        to={`/${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                        className={({ isActive }) =>
                          `relative text-sm h-10 items-center gap-3 pl-4 pr-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg flex w-full justify-start capitalize transition-all duration-200 ${
                            isActive
                              ? "font-medium text-white shadow-md"
                              : normalLink
                          }`
                        }
                        style={({ isActive }) =>
                          isActive
                            ? {
                                backgroundColor: currentColor,
                                boxShadow: `0 4px 12px ${currentColor}80`,
                              }
                            : {}
                        }
                      >
                        {item.icon && (
                          <motion.span
                            className={`text-lg flex items-center justify-center`}
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 10,
                            }}
                          >
                            {item.icon}
                          </motion.span>
                        )}
                        <span>{item.name}</span>
                        {/* Active indicator dot */}
                        {(isActive) =>
                          isActive && (
                            <span className="absolute right-2 w-2 h-2 rounded-full bg-white"></span>
                          )
                        }
                      </NavLink>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </motion.div>


        
      </PerfectScrollbar>
      
      <motion.div 
          className="mt-11 mb-12  p-3 w-52 flex items-center justify-between bg-blue-100 dark:bg-gray-700 rounded-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img
                src={avatar}
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-medium text-gray-800 dark:text-gray-100">Mike</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">Admin</p>
            </div>
          </div>
         
        </motion.div>

    </div>
  );
}

export default SideBar;
