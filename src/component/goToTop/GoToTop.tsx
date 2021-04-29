import React, { useCallback, useEffect, useState } from "react";
import { getIcon } from "~/src/common";

import "./_GoToTop.scss";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsVisible(window.pageYOffset > 200);
    });
  }, []);

  const onClickGoToTop = useCallback(
    (_: React.MouseEvent<HTMLElement>) => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    [window]
  );

  const goToTopIcon = getIcon("GoToTop", onClickGoToTop, {
    fontSize: "2.8rem",
  });

  return <div className="goToTop">{isVisible && goToTopIcon}</div>;
};

export default GoToTop;
