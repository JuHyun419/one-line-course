import React from "react";

import Button from "../button/Button";
import { EButtonSize } from "../button/EButtonSize";
import { EButtonType } from "../button/EButtonType";

import "./_Nav.scss";

const AfterLoginNav: React.FC<{ children?: JSX.Element }> = ({ children }) => {
  // TODO: link onClick with Router -> redirect to /signIn
  const redirectToMainPage = () => {};
  const redirectToCommentsPage = () => {};
  const redirectToBookmarksPage = () => {};
  const logout = () => {};

  return (
    <div className="nav-afterLogin">
      {/* #01 Main */}
      <Button
        btnSize={EButtonSize.Medium}
        btnType={EButtonType.Primary}
        onClick={redirectToMainPage}
      >
        Main
      </Button>
      {/* #02 Comments */}
      <Button
        btnSize={EButtonSize.Medium}
        btnType={EButtonType.Alt}
        onClick={redirectToCommentsPage}
      >
        Comments
      </Button>
      {/* #03 Bookmarks */}
      <Button
        btnSize={EButtonSize.Medium}
        btnType={EButtonType.Alt}
        onClick={redirectToBookmarksPage}
      >
        Bookmarks
      </Button>
      {/* #04 Log Out */}
      <Button
        btnSize={EButtonSize.Medium}
        btnType={EButtonType.Warning}
        onClick={logout}
      >
        Log Out
      </Button>
      {children}
    </div>
  );
};

export default AfterLoginNav;
