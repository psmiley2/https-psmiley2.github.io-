import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { Route, Router, Switch } from "react-router-dom";
import history from "../history";
import HomePage from "./HomePage"

export default function App() {
    return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                </Switch>
            </Router>
    );
}
