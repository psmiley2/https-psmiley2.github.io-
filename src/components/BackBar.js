import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: "100%",
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: "white",
    },
    title: {
        flexGrow: 1,
    },
    homeButton: {
        fontSize: 20,
    },
    innerTitle: {
        fontWeight: "bold",
        color: "white",
        fontSize: 20,
        padding: "1%",
        width: "100%",
    },
}));

export default function BackBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/">
                            <Button className={classes.homeButton}>
                                <span role="img" aria-label="home">
                                    🏠
                                </span>
                                <Typography className={classes.innerTitle}>
                                    Peter Smiley
                                </Typography>
                            </Button>
                        </Link>
                    </Typography>

                    <Typography>
                        <Link to="/about">
                            <Button className={classes.menuButton}>
                                About
                            </Button>
                        </Link>
                    </Typography>
                    <Typography>
                        <Link to="/projects">
                            <Button className={classes.menuButton}>
                                Projects
                            </Button>
                        </Link>
                    </Typography>
                    <Typography>
                        <Button className={classes.menuButton}>
                            <Contact />
                        </Button>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
