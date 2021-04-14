import React, { useContext } from "react";

export const useSafeContext = <T>(makeSafeCtx: React.Context<T>) => {
  const ctx = useContext<T>(makeSafeCtx);
  if (ctx === undefined) {
    throw new Error(
      `${makeSafeCtx.displayName} must be used within its provider!`
    );
  }
  return ctx;
};
