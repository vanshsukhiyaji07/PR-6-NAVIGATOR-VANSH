// src/Components/AuthContext.jsx
import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = async (email, password) => {
    const savedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const foundUser = savedUsers.find(
      (u) => u.email === email && u.password === password
    );
    if (!foundUser) throw new Error("Invalid credentials");
    setUser({ email: foundUser.email });
    localStorage.setItem("user", JSON.stringify({ email: foundUser.email }));
  };

  const register = async (email, password) => {
    const savedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    if (savedUsers.find((u) => u.email === email)) {
      throw new Error("User already exists");
    }
    const newUser = { email, password ,};
    savedUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(savedUsers));
    setUser({ email });
    localStorage.setItem("user", JSON.stringify({ email }));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
