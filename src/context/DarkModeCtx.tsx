import React from "react";
import { useSafeContext } from "../hooks/useSafeContext";
import { useToggleProvider } from "../hooks/useToggleProvider";

export interface DarkModeCtxState {
  isDark: boolean;
  toggleDarkMode: () => void;
}

const DarkModeCtx = React.createContext<DarkModeCtxState>({
  isDark: false,
  toggleDarkMode: () => {},
});

export const DarkModeCtxProvider: React.FC<{
  children?: JSX.Element | null | undefined;
}> = ({ children }) => {
  const { providerValue } = useToggleProvider<DarkModeCtxState>(
    "isDark",
    "toggleDarkMode"
  );

  return <DarkModeCtx.Provider value={providerValue} {...children} />;
};

export const useDarkModeContext = () =>
  useSafeContext<DarkModeCtxState>(DarkModeCtx);
