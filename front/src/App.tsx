import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

const signInPage = React.lazy(() => import("./page/signIn/SignIn"));
const mainPage = React.lazy(() => import("./page/main/Main"));
const commentsPage = React.lazy(() => import("./page/comments/Comments"));
const bookmarksPage = React.lazy(() => import("./page/bookmarks/Bookmarks"));
const logOutPage = React.lazy(() => import("./page/logout/LogOut"));
const notFoundPage = React.lazy(() => import("./page/not-found/NotFound"));

import Loading from "./component/loading/Loading";

import "./app.scss";
import { useDarkModeContext } from "./context/DarkModeCtx";

const App = () => {
  const darkModeCtx = useDarkModeContext();

  let routeJSX = (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/signIn" component={signInPage} />
        <Route path="/comments" component={commentsPage} />
        <Route path="/bookmarks" component={bookmarksPage} />
        <Route path="/logout" component={logOutPage} />

        <Route path="/" component={mainPage} />

        <Redirect to="/notFound" />
        <Route path="/notFound" component={notFoundPage} />
      </Switch>
    </Suspense>
  );

  return (
    <div className={["app", darkModeCtx.isDark ? "dark" : ""].join(" ").trim()}>
      {routeJSX}
    </div>
  );
};

export default App;
