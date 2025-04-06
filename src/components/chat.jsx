import { useState, useRef, useEffect } from "react";
import { BsChatLeft, BsChatLeftDots } from "react-icons/bs";
import  chatimage from "../data/chatimage.png";
export default function ChatDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Dropdown toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative  hover:bg-light-gray dark:hover:bg-transparent  z-10 block p-2 text-gray-700  border border-transparent rounded-full dark:text-white focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:bg-gray-800 focus:outline-none"
      >
        <BsChatLeft className="w-5 h-5 text-gray-800 dark:text-white" />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 z-20 w-64 mt-2 overflow-hidden origin-top-right bg-white rounded-md shadow-lg sm:w-80 dark:bg-gray-800 transition transform duration-100 scale-100">
          <div className="py-2">
            {[
              {
                name: "Sara Salah",
                action: "send you a message",
                item: "you are awesome",
                time: "2m",
                img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
              },
              {
                name: "Slick Net",
                action: "send hi to you",
                item: "",
                time: "45m",
                img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
              },
              {
                name: "Jane Doe",
                action: "payment received for",
                item: "join with TDD",
                time: "1h",
                img: "https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
              },
              {
                name: "Abigail Bennett",
                action: "send you a message",
                item: "",
                time: "3h",
                img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=398&q=80",
              },
            ].map((notif, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center px-4 py-3 -mx-2 transition-colors duration-300 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700"
              >
                <img
                  className="flex-shrink-0 object-cover w-8 h-8 mx-1 rounded-full"
                  src={notif.img}
                  alt="avatar"
                />
                <p className="mx-2 text-sm text-gray-600 dark:text-white">
                  <span className="font-bold">{notif.name}</span>{" "}
                  {notif.action}{" "}
                  {notif.item && (
                    <span className="text-blue-500 hover:underline">
                      {notif.item}
                    </span>
                  )}{" "}
                  . {notif.time}
                </p>
              </a>
            ))}
          </div>
          <a
            href="#"
            className="block py-2 font-semibold text-lg text-center text-white bg-gray-800 dark:bg-gray-700 hover:underline"
          >
            See all messages
          </a>
        </div>
      )}
    </div>
  );
}
