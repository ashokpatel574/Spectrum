import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const localStorageToken = JSON.parse(
    localStorage.getItem("loginCredentials")
  );
  const [token, setToken] = useState(localStorageToken?.token);
  const [currentUser, setCurrentUser] = useState(localStorageToken?.user);

  return (
    <AuthContext.Provider
      value={{ token, currentUser, setToken, setCurrentUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuth = () => useContext(AuthContext);
