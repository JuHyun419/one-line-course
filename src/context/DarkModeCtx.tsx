import React from "react";
import { useSafeContext } from "../hooks/useSafeContext";
import { useToggleProvider } from "../hooks/useToggleProvider";

export interface DarkModeCtxData {
  isDark: boolean;
  toggleDarkMode: () => void;
}

const DarkModeCtx = React.createContext<DarkModeCtxData>({
  isDark: false,
  toggleDarkMode: () => {},
});

export const DarkModeCtxProvider: React.FC<{
  children?: JSX.Element | null | undefined;
}> = ({ children }) => {
  const { providerValue } = useToggleProvider<DarkModeCtxData>(
    "isDark",
    "toggleDarkMode"
  );

  return <DarkModeCtx.Provider value={providerValue} {...children} />;
};

export const useDarkModeContext = () =>
  useSafeContext<DarkModeCtxData>(DarkModeCtx);
