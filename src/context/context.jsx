import { createContext, useReducer } from "react";
import { darkModeReducer } from "./reducer";

const INIT_STATE = { darkMode: true };

export const Context = createContext(INIT_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(darkModeReducer, INIT_STATE);

  return (
    <Context.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </Context.Provider>
  );
};
