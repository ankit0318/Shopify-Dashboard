import { NavLink } from "react-router-dom";
import { links } from "../data/dummy.jsx";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useStateContext } from "../contexts/Context.jsx";
import { AiOutlineClose } from "react-icons/ai";

function SideBar() {
  const { activeMenu, setActiveMenu, currentColor } = useStateContext();
  const activeLink = `text-white font-medium`; // Removed currentColor
  const normalLink = "text-gray-700 dark:text-gray-300 font-light";

  return (
    <div className="flex flex-col pl-6 pt-5 pr-0 bg-white dark:bg-secondary-dark-bg h-full">
      <div className="flex flex-row justify-between pr-3 items-center mb-4 gap-3 font-extrabold text-xl text-slate-900 tracking-tight dark:text-white">
        <NavLink
          to="/"
          className="flex items-center h-10 mt-1  text-gray-900 dark:text-white"
        >
        <div className="flex items-center gap-3 ">
        <img src="./public/shopping-trolley.png" alt="logo" className="w-10 h-10" />
        <img src="./public/image.png" alt="logo" className="w-20 h-20" />
        </div>
        
        </NavLink>
        <div className="md:hidden">
          <button
            className="p-2 rounded-full hover:bg-gray-100 hover:dark:bg-gray-700 transition-colors"
            onClick={() => setActiveMenu((prev) => !prev)}
          >
            <AiOutlineClose className="text-gray-500 dark:text-gray-400" />
          </button>
        </div>
      </div>
      <PerfectScrollbar>
        <div>
          {links.map((link, index) => (
            <div className="flex flex-col pr-2 gap-3 mt-2 mb-5" key={index}>
              <p className="text-gray-400 font-medium capitalize">
                {link.title.toLocaleUpperCase()}
              </p>
              {link.links &&
                link.links.map((item, subIndex) => (
                  <div key={subIndex}>
                    <NavLink
                      to={`/${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className={({ isActive }) =>
                        `relative text-normal h-10 items-center gap-4 pl-3 hover:bg-gray-200 dark:hover:bg-[rgba(255,255,255,0.1)] rounded-md flex w-full justify-start capitalize ${
                          isActive ? activeLink : normalLink
                        }`
                      }
                      style={({ isActive }) =>
                        isActive ? { backgroundColor: currentColor } : {}
                      }
                    >
                      {item.icon && <span>{item.icon}</span>}
                      {item.name}
                    </NavLink>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </PerfectScrollbar>
    </div>
  );
}

export default SideBar;