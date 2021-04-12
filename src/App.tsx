import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import SignIn from "./page/signIn/SignIn";
import Main from "./page/main/Main";
import Comments from "./page/comments/Comments";
import Bookmarks from "./page/bookmarks/Bookmarks";
import Landing from "./page/landing/Landing";
import LogOut from "./page/logout/LogOut";
import NotFound from "./page/not-found/NotFound";

import Layout from "./component/layout/Layout";

import "./app.scss";

const App = () => {
  let routeJSX = (
    <Switch>
      <Route path="/signIn" component={SignIn} />
      <Route path="/main" component={Main} />
      <Route path="/comments" component={Comments} />
      <Route path="/bookmarks" component={Bookmarks} />
      <Route path="/logout" component={LogOut} />

      <Route path="/" exact component={Landing} />

      <Redirect to="/notFound" />
      <Route path="/notFound" component={NotFound} />
    </Switch>
  );

  return (
    <div className="app">
      <Layout>{routeJSX}</Layout>
    </div>
  );
};

export default App;
