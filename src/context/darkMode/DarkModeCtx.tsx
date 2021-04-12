import React from "react";
import useToggleProvider from "../../hooks/useToggleProvider";

import DarkModeCtxData from "./DarkModeCtxData";

export const DarkModeCtx = React.createContext<DarkModeCtxData>({
  isDark: false,
  toggleDarkMode: () => {},
});

const DarkModeCtxProvider: React.FC<{
  children?: JSX.Element | null | undefined;
}> = ({ children }) => {
  const { providerValue } = useToggleProvider<DarkModeCtxData>(
    "isDark",
    "toggleDarkMode"
  );

  return (
    <DarkModeCtx.Provider value={providerValue}>
      {children}
    </DarkModeCtx.Provider>
  );
};

export default DarkModeCtxProvider;
