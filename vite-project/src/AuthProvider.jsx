// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

// context for authentication
const AuthContext = createContext();

// provider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(`/api/authenticate`);
        if (response.data.success == true) {
          isAuthenticated(true);
          console.log(response.data.success);
        }
      } catch (error) {
        console.log(error);
      }
    };
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
