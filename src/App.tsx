import React from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import SignIn from "./page/signIn/SignIn";
import Main from "./page/main/Main";
import Comments from "./page/comments/Comments";
import Bookmarks from "./page/bookmarks/Bookmarks";
import Landing from "./page/landing/Landing";
import LogOut from "./page/logout/LogOut";

import "./app.scss";

const App = () => {
  return (
    <div className="app">
      {/* 1. Landing page */}
      <Switch>
        <Route path="/signIn" component={SignIn} />
      </Switch>

      {/* 2. Sign-In page */}
      <Switch>
        {/* Google oAuth */}
        {/* Kakao oAuth */}
      </Switch>

      {/* 3. After Login pages */}
      <Switch>
        <Route path="/main" component={Main} />
        <Route path="/comments" component={Comments} />
        <Route path="/bookmarks" component={Bookmarks} />
        <Route path="/logout" component={LogOut} />

        <Route path="/landing" component={Landing} />
        <Route path="/" exact component={Landing} />
        <Redirect to="/" />
      </Switch>
      <Landing />
    </div>
  );
};

export default App;
