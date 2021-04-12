import React from "react";
import useToggleProvider from "../../hooks/useToggleProvider";
import ViewModeCtxData from "./ViewModeCtxData";

export const ViewModeCtx = React.createContext<ViewModeCtxData>({
  isGrid: true,
  toggleViewMode: () => {},
});

const ViewModeCtxProvider: React.FC<{
  children?: JSX.Element | null | undefined;
}> = ({ children }) => {
  const { providerValue } = useToggleProvider<ViewModeCtxData>(
    "isGrid",
    "toggleViewMode"
  );

  return (
    <ViewModeCtx.Provider value={providerValue}>
      {children}
    </ViewModeCtx.Provider>
  );
};

export default ViewModeCtxProvider;
