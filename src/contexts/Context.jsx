

import { createContext, useContext, useRef, useState } from "react";

// Provide an initial default value
const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children}) => {
 
 const screenSizeRef= useRef(undefined);
 
 const [currentColor, setCurrentColor] = useState('#1E90FF');
 const [currentMode, setCurrentMode] = useState('Light');
 const [themeSettings, setThemeSettings] = useState(false);
 const [activeMenu, setActiveMenu] = useState(true);
 const [isClicked, setIsClicked] = useState(initialState);

 const setMode = (e) => {
   setCurrentMode(e.target.value);
   localStorage.setItem('themeMode', e.target.value);
 };

 const setColor = (color) => {
   setCurrentColor(color);
   localStorage.setItem('colorMode', color);
 };

 
function handleClick(name) {
   setIsClicked({ ...initialState, [name]: !initialState[name] });
}



  return <StateContext.Provider value={{setMode,setColor,setCurrentMode,currentColor,themeSettings,setThemeSettings,activeMenu,currentMode, setCurrentMode,setActiveMenu,isClicked,handleClick,screenSizeRef}}>{children}</StateContext.Provider>;
};

// Fix the naming - should use StateContext not stateProvider
export const useStateContext = () => useContext(StateContext);