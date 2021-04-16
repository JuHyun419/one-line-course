import React from "react";
import AuthCtxData from "./AuthCtxData";

export const AuthCtx = React.createContext<AuthCtxData>({
  isAuth: false,
  authenticate: () => {},
});

const AuthCtxProvider: React.FC<{
  children?: JSX.Element | null | undefined;
}> = ({ children }) => {
  return (
    <AuthCtx.Provider value={{}}>
      {children}
    </AuthCtx.Provider>
  )
};

export default AuthCtxProvider;
