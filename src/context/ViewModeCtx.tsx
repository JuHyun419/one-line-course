import React from "react";
import { useSafeContext } from "../hooks/useSafeContext";
import { useToggleProvider } from "../hooks/useToggleProvider";

export interface ViewModeCtxData {
  isGrid: boolean;
  toggleViewMode: () => void;
}

const ViewModeCtx = React.createContext<ViewModeCtxData>({
  isGrid: true,
  toggleViewMode: () => {},
});

export const ViewModeCtxProvider: React.FC<{
  children?: JSX.Element | null | undefined;
}> = ({ children }) => {
  const { providerValue } = useToggleProvider<ViewModeCtxData>(
    "isGrid",
    "toggleViewMode"
  );

  return <ViewModeCtx.Provider value={providerValue} {...children} />;
};

export const useViewModeContext = () =>
  useSafeContext<ViewModeCtxData>(ViewModeCtx);
