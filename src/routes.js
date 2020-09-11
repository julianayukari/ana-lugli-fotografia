import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Portal/Home";
import Login from "./pages/Portal/Login";
import Register from "./pages/Portal/Register";
import WebPage from "./pages/WebPage";
import {PrivateRoute} from './auth';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={WebPage} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Cadastro" component={Register} />
        <PrivateRoute exact path="/Portal" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
