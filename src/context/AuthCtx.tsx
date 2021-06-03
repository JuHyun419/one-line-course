import React from "react";
import { useSafeContext } from "../hooks/useSafeContext";
import { useToggleProvider } from "../hooks/useToggleProvider";

interface AuthCtxState {
  isAuth: boolean;
  authenticate: () => void;
}

export const AuthCtx = React.createContext<AuthCtxState>({
  isAuth: false,
  authenticate: () => {},
});

export const AuthCtxProvider: React.FC<{
  children: JSX.Element;
}> = ({ children }) => {
  const { providerValue } = useToggleProvider<AuthCtxState>(
    "isAuth",
    "authenticate"
  );

  return <AuthCtx.Provider value={providerValue}>{children}</AuthCtx.Provider>;
};

export const useAuthContext = () => useSafeContext<AuthCtxState>(AuthCtx);
