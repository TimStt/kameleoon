import { createContext } from "react";

export const fabricCreateContext = <T>() => {
  const context = createContext<T | undefined>(undefined);
  return context;
};
