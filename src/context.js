import React, { useState, useContext, createContext } from "react";
import sublinks from "./data";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openSubMenu = (text, coordinates) => {
    const sublink = sublinks.find((sublink) => sublink.page === text);
    setPage(sublink);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };
  const closeSubMenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        openSidebar,
        closeSidebar,
        isSidebarOpen,
        isSubmenuOpen,
        openSubMenu,
        closeSubMenu,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  const data = useContext(AppContext);
  return data;
};
