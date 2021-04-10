import React from "react";
import useToggleProvider from "../../hooks/useToggleProvider";

import DarkModeContextData from "./DarkModeContextData";

export const DarkModeContext = React.createContext<DarkModeContextData>({
  isDark: false,
  toggleDarkMode: () => {},
});

const DarkModeContextProvider: React.FC<{
  children?: JSX.Element | null | undefined;
}> = ({ children }) => {
  const { providerValue } = useToggleProvider<DarkModeContextData>(
    "isDark",
    "toggleDarkMode"
  );

  return (
    <DarkModeContext.Provider value={providerValue}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContextProvider;
