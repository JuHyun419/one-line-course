import React from "react";

export interface AuthCtxData {
  isAuth: boolean;
  authenticate: () => void;
}

export const AuthCtx = React.createContext<AuthCtxData>({
  isAuth: false,
  authenticate: () => {},
});

const AuthCtxProvider: React.FC<{
  children?: JSX.Element | null | undefined;
}> = ({ children }) => {
  // return <AuthCtx.Provider value={{}} {...children} />;
  return <div></div>;
};

export default AuthCtxProvider;
