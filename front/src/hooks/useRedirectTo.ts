import { useCallback } from "react";

export const useRedirectToOnButtonClick = (history: any, linkTo: string) => {
  return useCallback(
    (_?: React.MouseEvent<HTMLDivElement>) => history?.push(linkTo),
    [history]
  );
};
