import React, { useCallback, useEffect, useMemo, useState } from "react";
import { getIcon } from "~/src/common";

import "./_GoToTop.scss";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const listener = useCallback(() => {
    setIsVisible(window.pageYOffset > 200);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => window.removeEventListener("scroll", listener);
  }, [window, listener]);

  const onClickGoToTop = useCallback(
    (_: React.MouseEvent<HTMLElement>) =>
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      }),
    [window]
  );

  const goToTopIcon = useMemo(
    () =>
      getIcon("GoToTop", onClickGoToTop, {
        fontSize: "2.8rem",
      }),
    []
  );

  return <div className="goToTop">{isVisible && goToTopIcon}</div>;
};

export default GoToTop;
