import React, { useCallback } from "react";
import useRedirectTo from "../../hooks/useRedirectTo";

import Button from "../button/Button";
import { EButtonSize } from "../button/EButtonSize";
import { EButtonType } from "../button/EButtonType";
import NavProps from "./NavProps";

import "./_Nav.scss";

const toMain = "/main";
const toComments = "/comments";
const toBookmarks = "/bookmarks";
const toLogOut = "/logout";

const AfterLoginNav: React.FC<NavProps> = ({ history, children }) => {
  const redirectToMain = useRedirectTo(history, toMain);
  const redirectToComments = useRedirectTo(history, toComments);
  const redirectToBookmarks = useRedirectTo(history, toBookmarks);
  const redirectToLogOut = useRedirectTo(history, toLogOut);

  return (
    <div className="nav-afterLogin">
      {/* #01 Main */}
      <Button
        btnSize={EButtonSize.Medium}
        btnType={EButtonType.Primary}
        onClick={redirectToMain}
      >
        Main
      </Button>
      {/* #02 Comments */}
      <Button
        btnSize={EButtonSize.Medium}
        btnType={EButtonType.Alt}
        onClick={redirectToComments}
      >
        Comments
      </Button>
      {/* #03 Bookmarks */}
      <Button
        btnSize={EButtonSize.Medium}
        btnType={EButtonType.Alt}
        onClick={redirectToBookmarks}
      >
        Bookmarks
      </Button>
      {/* #04 Log Out */}
      <Button
        btnSize={EButtonSize.Medium}
        btnType={EButtonType.Warning}
        onClick={redirectToLogOut}
      >
        Log Out
      </Button>
      {children}
    </div>
  );
};

export default AfterLoginNav;
