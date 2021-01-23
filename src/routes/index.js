import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import Login from "../pages/Login";
import Home from "../pages/Home";
import Project from "../pages/Project";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Login} />

            <Route path="/home" component={Home} isPrivate />
            <Route path="/project" component={Project} isPrivate />

            {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
            <Route component={Login} />
        </Switch>
    );
}
