import React, { Fragment, useCallback } from "react";
import { useRedirectToOnButtonClick } from "../../hooks/useRedirectTo";

import Button from "../button/Button";
import { EButtonSize } from "../button/EButtonSize";
import { EButtonType } from "../button/EButtonType";
import NavProps from "./NavProps";

import "./_Nav.scss";

const toMain = "/main";
const toComments = "/comments";
const toBookmarks = "/bookmarks";
const toLogOut = "/logout";

const AfterLoginNav: React.FC<NavProps> = (props: NavProps) => (
  <div className="nav-afterLogin">
    {history ? makeButtonsOnHistory(props) : makeButtons(props)}
  </div>
);

const makeButtonsOnHistory = ({
  history,
  highlightBtnIdx,
  children,
}: NavProps): JSX.Element => {
  const redirectToMain = useRedirectToOnButtonClick(history, toMain);
  const redirectToComments = useRedirectToOnButtonClick(history, toComments);
  const redirectToBookmarks = useRedirectToOnButtonClick(history, toBookmarks);
  const redirectToLogOut = useRedirectToOnButtonClick(history, toLogOut);

  return (
    <Fragment>
      {/* #01 Main */}
      <Button
        btnSize={EButtonSize.Large}
        btnType={EButtonType.Alt}
        highlight={highlightBtnIdx === 0}
        onClick={redirectToMain}
      >
        Main
      </Button>
      {/* #02 Comments */}
      <Button
        btnSize={EButtonSize.Large}
        btnType={EButtonType.Alt}
        highlight={highlightBtnIdx === 1}
        onClick={redirectToComments}
      >
        Comments
      </Button>
      {/* #03 Bookmarks */}
      <Button
        btnSize={EButtonSize.Large}
        btnType={EButtonType.Alt}
        highlight={highlightBtnIdx === 2}
        onClick={redirectToBookmarks}
      >
        Bookmarks
      </Button>
      {/* #04 Log Out */}
      <Button
        btnSize={EButtonSize.Large}
        btnType={EButtonType.Warning}
        highlight={highlightBtnIdx === 3}
        onClick={redirectToLogOut}
      >
        Log Out
      </Button>
      {children}
    </Fragment>
  );
};

const makeButtons = ({ highlightBtnIdx, children }: NavProps): JSX.Element => (
  <Fragment>
    {/* #01 Main */}
    <Button
      btnSize={EButtonSize.Large}
      btnType={EButtonType.Alt}
      highlight={highlightBtnIdx === 0}
    >
      Main
    </Button>
    {/* #02 Comments */}
    <Button
      btnSize={EButtonSize.Large}
      btnType={EButtonType.Alt}
      highlight={highlightBtnIdx === 1}
    >
      Comments
    </Button>
    {/* #03 Bookmarks */}
    <Button
      btnSize={EButtonSize.Large}
      btnType={EButtonType.Alt}
      highlight={highlightBtnIdx === 2}
    >
      Bookmarks
    </Button>
    {/* #04 Log Out */}
    <Button
      btnSize={EButtonSize.Large}
      btnType={EButtonType.Warning}
      highlight={highlightBtnIdx === 3}
    >
      Log Out
    </Button>
    {children}
  </Fragment>
);

export default AfterLoginNav;
