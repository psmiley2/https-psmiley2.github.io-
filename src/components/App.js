import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { Route, Router, Switch } from "react-router-dom";
import history from "../history";
import About from "./About";
import BackBar from "./BackBar";
import Home from "./Home";
import Projects from "./Projects";
import RobotCheck from "./RobotCheck";

const useStyles = makeStyles({
    root: {
        background: "#333333",
        boxShadow: "0 3px 5px 2px #333333",
        height: "100%",
    },
});

export default function App() {
    const classes = useStyles();
    const [isRobot, setIsRobot] = useState(Cookies.get("isRobot"));

    if (isRobot === undefined) {
        Cookies.set("isRobot", true, {});
    }

    if (isRobot === "false") {
        return (
            <>
                <Router history={history}>
                    {/* <Navbar /> */}
                    <Box className={classes.root}>
                        <BackBar className={classes.appBar} />
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/about" exact component={About} />
                            <Route
                                path="/projects"
                                exact
                                component={Projects}
                            />
                        </Switch>
                    </Box>
                </Router>
            </>
        );
    } else {
        return <RobotCheck />;
    }
}
