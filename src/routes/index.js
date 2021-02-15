import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import ProjectIndex from '../pages/project/Index';
import ProjectAdd from '../pages/project/Add';
import ProjectEdit from '../pages/project/Edit';
import TaskIndex from '../pages/task/Index';
import TaskAdd from '../pages/task/Add';
import TaskEdit from '../pages/task/Edit';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />

      <Route path="/register" component={Register} />
      <Route path="/home" component={Home} isPrivate />
      <Route path="/project/add" component={ProjectAdd} isPrivate />
      <Route path="/project/edit/:id" component={ProjectEdit} isPrivate />
      <Route path="/project" component={ProjectIndex} isPrivate />

      <Route path="/task/add" component={TaskAdd} isPrivate />
      <Route path="/task/edit/:id" component={TaskEdit} isPrivate />
      <Route path="/task" component={TaskIndex} isPrivate />

      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={Login} />
    </Switch>
  );
}
