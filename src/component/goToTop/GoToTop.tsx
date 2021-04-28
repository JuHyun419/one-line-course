import React, { useCallback, useEffect, useState } from "react";
import { getIcon } from "~/src/common";

import "./_GoToTop.scss";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.pageYOffset > 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  const onClickGoToTop = useCallback((_: React.MouseEvent<HTMLElement>) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const goToTopIcon = getIcon("GoToTop", onClickGoToTop, {
    fontSize: "2.8rem",
  });

  return <div className="goToTop">{isVisible && goToTopIcon}</div>;
};

export default GoToTop;
