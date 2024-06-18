// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// context for authentication
const AuthContext = createContext();

// provider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(`/api/authenticate`);
        if (response.data.success == true) {
          setIsAuthenticated(true);
          setUserName(response.data.user.UserName);
          console.log(response.data.user.UserName);
          console.log(response.data.success);
        }
      } catch (error) {
        console.log(error);
      }
    };
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, userName }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
