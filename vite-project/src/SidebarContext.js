import React, { createContext, useState } from "react";

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [hideSidebar, setHideSidebar] = useState(false);

  const toggleSidebar = () => {
    setHideSidebar((prevState) => !prevState);
  };

  return (
    <SidebarContext.Provider value={{ hideSidebar, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
