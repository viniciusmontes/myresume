import { createContext, useContext, useState } from "react";
import { iChildren } from "../types/children";

export type iGlobalContext = {
  isLightTheme: boolean;
  handleChangeTheme: () => void;
};

export const GlobalContext = createContext<iGlobalContext>(
  {} as iGlobalContext
);

export const GlobalProvider = ({ children }: iChildren) => {
  const [isLightTheme, setIsLightTheme] = useState(false);

  const handleChangeTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  return (
    <GlobalContext.Provider
      value={{
        isLightTheme,
        handleChangeTheme,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
