import React, { useContext, useEffect, useState } from "react";
import { tasks } from "./tasks";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [task, setTask] = useState([...tasks]);
  const [newData, setNewData] = useState({});
  const [filters, setFilters] = useState([]);
  useEffect(() => {
    if (
      Object.keys(newData).length > 0 &&
      !Object.values(newData).every(
        (value) => value === undefined || value === null
      )
    ) {
      setTask((prevTasks) => [...prevTasks, newData]);
    }
  }, [newData]);

  return (
    <AppContext.Provider value={{ task, setNewData, setFilters, filters }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
