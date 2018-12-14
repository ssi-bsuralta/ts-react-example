import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Menu } from './components/Menu';
import { Login } from './components/Login';
import { ProtectedRoute } from './components/ProtectedRoute';

import { Home } from './components/Home';
import { About } from './components/About/About';
import { Topics } from './components/Topics';
import { NoMatch } from './components/NoMatch';

import { AuthProvider } from './context/Auth';

render(
  <BrowserRouter>
    <AuthProvider>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <ProtectedRoute path="/about" component={About} />
        <ProtectedRoute path="/topics" component={Topics} />
        <Route path="/login" component={Login} />
        <Route component={NoMatch} />
      </Switch>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
