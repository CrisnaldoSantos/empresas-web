import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './views/Login/index';
import Search from './views/Search/index';

function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Search} exact />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default routes;
