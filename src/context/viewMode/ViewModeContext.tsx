import React from "react";
import useToggleProvider from "../../hooks/useToggleProvider";
import ViewModeContextData from "./ViewModeContextData";

export const ViewModeContext = React.createContext<ViewModeContextData>({
  isGrid: true,
  toggleBetweenGridAndListMode: () => {},
});

const ViewModeContextProvider: React.FC<{
  children?: JSX.Element | null | undefined;
}> = ({ children }) => {
  const { providerValue } = useToggleProvider<ViewModeContextData>(
    "isGrid",
    "toggleBetweenGridAndListMode"
  );

  return (
    <ViewModeContext.Provider value={providerValue}>
      {children}
    </ViewModeContext.Provider>
  );
};

export default ViewModeContextProvider;
