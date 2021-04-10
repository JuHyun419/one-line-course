import React from "react";
import DarkModeContextData from "./DarkModeContextData";
import DarkModeProps from "./DarkModeProps";

export const DarkModeContext = React.createContext<DarkModeContextData>({
  isDark: false,
  toggleDarkMode: () => {},
});

const DarkModeContextProvider = ({ children }: DarkModeProps) => {
  const [isDark, setIsDark] = React.useState(false);

  const onToggleDarkMode = React.useCallback(() => setIsDark(prv => !prv), [
    setIsDark,
  ]);

  const providerValue = React.useMemo(
    () => ({
      isDark,
      toggleDarkMode: onToggleDarkMode,
    }),
    [isDark, onToggleDarkMode]
  );

  return (
    <DarkModeContext.Provider value={providerValue}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContextProvider;
