import React, { useMemo, useState } from "react";
import { useSafeContext } from "../hooks/useSafeContext";

interface GridViewCtxState {
  // isBookmarkUpdated: boolean;
  popupIdx: number;
  setPopupIdx: (newCurrentPopup: number) => void;
}

export const GridViewCtx = React.createContext<GridViewCtxState>({
  popupIdx: -1,
  setPopupIdx: () => {},
});

export const GridViewCtxProvider: React.FC<{
  children: JSX.Element;
}> = ({ children }) => {
  const [currentPopup, setCurrentPopup] = useState(0);

  const providerValue = {
    popupIdx: currentPopup,
    setPopupIdx: (newCurrentPopup: number) => setCurrentPopup(newCurrentPopup),
  };

  return (
    <GridViewCtx.Provider value={providerValue}>
      {children}
    </GridViewCtx.Provider>
  );
};

export const useGridViewContext = () =>
  useSafeContext<GridViewCtxState>(GridViewCtx);
