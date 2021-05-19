import React, { Fragment, useMemo } from "react";
import { useHistory } from "react-router-dom";
import { EButtonSize, EButtonType } from "../../typings";
import { useRedirectToOnButtonClick } from "../../hooks/useRedirectTo";
import { useAuthContext } from "~/src/context/AuthCtx";

import Button from "../button/Button";

import "./_Nav.scss";

const MainNav: React.FC<INavProps> = props => (
  <div className="nav-afterLogin">{makeButtonsOnHistory(props)}</div>
);

const makeButtonsOnHistory = ({
  highlightBtnIdx,
  children,
}: INavProps): JSX.Element => {
  const authCtx = useAuthContext();
  const history = useHistory();

  const redirectToMain = useRedirectToOnButtonClick(history, "/");
  const redirectToComments = useRedirectToOnButtonClick(history, "/comments");
  const redirectToBookmarks = useRedirectToOnButtonClick(history, "/bookmarks");
  const redirectToLogOut = useRedirectToOnButtonClick(history, "/logout");
  const redirectToSignIn = useRedirectToOnButtonClick(history, "/signIn");

  const jsx = useMemo(
    () =>
      authCtx && authCtx.isAuth ? (
        <Fragment>
          <Button
            btnSize={EButtonSize.Large}
            btnType={EButtonType.Alt}
            highlight={highlightBtnIdx === 0}
            onClick={redirectToMain}
          >
            메인
          </Button>
          <Button
            btnSize={EButtonSize.Large}
            btnType={EButtonType.Alt}
            highlight={highlightBtnIdx === 1}
            onClick={redirectToComments}
          >
            댓글
          </Button>
          <Button
            btnSize={EButtonSize.Large}
            btnType={EButtonType.Alt}
            highlight={highlightBtnIdx === 2}
            onClick={redirectToBookmarks}
          >
            북마크
          </Button>
          <Button
            btnSize={EButtonSize.Large}
            btnType={EButtonType.Warning}
            highlight={highlightBtnIdx === 3}
            onClick={redirectToLogOut}
          >
            로그아웃
          </Button>
        </Fragment>
      ) : (
        <Fragment>
          <Button
            btnSize={EButtonSize.Large}
            btnType={EButtonType.Warning}
            highlight={highlightBtnIdx === 0}
            onClick={redirectToSignIn}
          >
            로그인
          </Button>
        </Fragment>
      ),
    [authCtx.isAuth]
  );

  return (
    <Fragment>
      {jsx}
      {children}
    </Fragment>
  );
};

export default MainNav;
