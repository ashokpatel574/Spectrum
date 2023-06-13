import React, { createContext, useContext, useEffect, useReducer } from "react";
import { initialState, DataReducer } from "../reducer/DataReducer";
import { getServerData } from "../services/dataServices";

const DataContext = createContext();
const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, initialState);

  useEffect(() => {
    getServerData(dispatch);
  }, []);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;

export const useData = () => useContext(DataContext);
