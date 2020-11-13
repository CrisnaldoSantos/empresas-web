import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './views/Login/index';
import Home from './views/Home/index';

function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default routes;
