// FixedBarContext.js
import React, { createContext, useState, useContext } from "react";

const FixedBarContext = createContext();

export const FixedBarProvider = ({ children }) => {
  const [barClass, setBarClass] = useState("normal"); // Manage CSS class

  const toggleWidth = () => {
    setBarClass((prevClass) => (prevClass === "normal" ? "reduced" : "normal"));
  };

  return (
    <FixedBarContext.Provider value={{ barClass, toggleWidth }}>
      {children}
    </FixedBarContext.Provider>
  );
};

export const useFixedBar = () => useContext(FixedBarContext);
