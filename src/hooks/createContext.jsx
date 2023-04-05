import { useContext } from "react";
import { ThemeContext } from "../context/useCreateContext";

function createContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("Error context");
  }
  return context;
}

export default createContext;
