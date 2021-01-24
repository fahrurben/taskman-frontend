import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';
import Home from '../pages/Home';
import ProjectIndex from '../pages/project/Index';
import ProjectCreate from '../pages/project/Create';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />

      <Route path="/home" component={Home} isPrivate />
      <Route path="/project/create" component={ProjectCreate} isPrivate />
      <Route path="/project" component={ProjectIndex} isPrivate />

      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={Login} />
    </Switch>
  );
}
