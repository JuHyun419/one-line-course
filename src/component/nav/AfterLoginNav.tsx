import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { EButtonSize, EButtonType } from "../../typings/type";
import { useRedirectToOnButtonClick } from "../../hooks/useRedirectTo";

import Button from "../button/Button";

import "./_Nav.scss";

const AfterLoginNav: React.FC<NavProps> = (props: NavProps) => (
  <div className="nav-afterLogin">{makeButtonsOnHistory(props)}</div>
);

const makeButtonsOnHistory = ({
  highlightBtnIdx,
  children,
}: NavProps): JSX.Element => {
  const history = useHistory();

  const redirectToMain = useRedirectToOnButtonClick(history, "/main");
  const redirectToComments = useRedirectToOnButtonClick(history, "/comments");
  const redirectToBookmarks = useRedirectToOnButtonClick(history, "/bookmarks");
  const redirectToLogOut = useRedirectToOnButtonClick(history, "/logout");

  return (
    <Fragment>
      {/* #01 Main */}
      <Button
        btnSize={EButtonSize.Large}
        btnType={EButtonType.Alt}
        highlight={highlightBtnIdx === 0}
        onClick={redirectToMain}
      >
        메인
      </Button>
      {/* #02 Comments */}
      <Button
        btnSize={EButtonSize.Large}
        btnType={EButtonType.Alt}
        highlight={highlightBtnIdx === 1}
        onClick={redirectToComments}
      >
        댓글
      </Button>
      {/* #03 Bookmarks */}
      <Button
        btnSize={EButtonSize.Large}
        btnType={EButtonType.Alt}
        highlight={highlightBtnIdx === 2}
        onClick={redirectToBookmarks}
      >
        북마크
      </Button>
      {/* #04 Log Out */}
      <Button
        btnSize={EButtonSize.Large}
        btnType={EButtonType.Warning}
        highlight={highlightBtnIdx === 3}
        onClick={redirectToLogOut}
      >
        로그아웃
      </Button>
      {children}
    </Fragment>
  );
};

export default AfterLoginNav;
