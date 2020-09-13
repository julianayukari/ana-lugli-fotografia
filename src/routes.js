import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./auth";
import Home from "./pages/Portal/Home";
import Login from "./pages/Portal/Login";
import Register from "./pages/Portal/Register";
import WebPage from "./pages/WebPage";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/ana-lugli-fotografia/" component={WebPage} />
        <Route exact path="/ana-lugli-fotografia/Login" component={Login} />
        <Route
          exact
          path="/ana-lugli-fotografia/Cadastro"
          component={Register}
        />
        <PrivateRoute
          exact
          path="/ana-lugli-fotografia/Portal"
          component={Home}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
