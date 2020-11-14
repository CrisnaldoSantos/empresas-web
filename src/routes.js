import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './views/Login/index';
import Home from './views/Home/index';
import Enterprise from './views/Enterprise/index';

function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          component={localStorage.getItem('empresas-token') ? Home : Login}
          exact
        />
        <Route path="/enterprise/:id" component={Enterprise} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default routes;
