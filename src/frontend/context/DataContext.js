import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { initialState, DataReducer } from "../reducer/DataReducer";
import { getServerData } from "../services/dataServices";
import { useAuth } from "./AuthContext";

const DataContext = createContext();
const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, initialState);
  const { token, currentUser } = useAuth();
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [dataError, setdataError] = useState(null);

  useEffect(() => {
    if (token) {
      getServerData(
        dispatch,
        token,
        currentUser,
        setIsLoadingData,
        setdataError
      );
    }
  }, [currentUser, token]);

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
        isLoadingData,
        setIsLoadingData,
        dataError,
        setdataError,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
export const useData = () => useContext(DataContext);
