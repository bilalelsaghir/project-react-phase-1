import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import API_BASE from "../config/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // ================== SIGNUP ==================
  const signup = async (username, email, password) => {
    try {
      const res = await axios.post(`${API_BASE}/signup`, {
        username,
        email,
        password,
      });

      return res.data;
    } catch (err) {
      return {
        success: false,
        message: err.response?.data?.message || "Server error",
      };
    }
  };

  const login = async (email, password) => {
    try {
      const res = await axios.post(`${API_BASE}/login`, {
        email,
        password,
      });

      if (res.data.success) {
        setUser(res.data.user);
      }

      return res.data;
    } catch (err) {
      return {
        success: false,
        message: err.response?.data?.message || "Server error",
      };
    }
  };


  // ================== LOGOUT ==================
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
