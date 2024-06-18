import React, { createContext, useState } from "react";

export const GigContext = createContext();

export const GigProvider = ({ children }) => {
  const [selectedGigId, setSelectedGigId] = useState(null);

  return (
    <GigContext.Provider value={{ selectedGigId, setSelectedGigId }}>
      {children}
    </GigContext.Provider>
  );
};
