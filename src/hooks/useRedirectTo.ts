import { useCallback } from "react";

// TODO: 어짜피 dep 모두 고정으로 사용될 텐데, NavFactory 로 붙는 것도 쳐서
// useCallback 을 사용해야 하나요?
const useRedirectToOnButtonClick = (history: any, linkTo: string) => {
  return useCallback(
    (_?: React.MouseEvent<HTMLDivElement>) => history.push(linkTo),
    [history, linkTo]
  );
};

export default useRedirectToOnButtonClick;
