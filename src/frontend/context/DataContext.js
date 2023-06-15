import React, { createContext, useContext, useEffect, useReducer } from "react";
import { initialState, DataReducer } from "../reducer/DataReducer";
import { getServerData } from "../services/dataServices";
import { useAuth } from "./AuthContext";

const DataContext = createContext();
const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, initialState);
  const { token, currentUser } = useAuth();

  useEffect(() => {
    getServerData(dispatch, token, currentUser);
  }, []);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;

export const useData = () => useContext(DataContext);
