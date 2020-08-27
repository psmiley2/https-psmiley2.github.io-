import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Blog from "./Blogs";
import Contact from "./Contact";

const useStyles = makeStyles({
    tb: {
        backgroundColor: "#333333",
        padding: "2%",
        color: "white",
    },
    section: {
        width: "100%",
        paddingTop: "2%",
        paddingLeft: "2%",
        paddingRight: "1%",
        paddingBottom: "1%",
        marginTop: "4%",
        marginBottom: "6%",
        marginLeft: "5%",
        "&:hover": {
            backgroundColor: "#00e676",
        },
    },
    link: {
        color: "white",
    },
    linkContainer: {
        marginTop: "3%",
        marginBottom: "3%",
    },
    header: {
        textAlign: "center",
    },
});

export default function Links() {
    const classes = useStyles();

    const [shadow, setShadow] = useState(1);
    let onMouseOver = () => setShadow(24);
    let onMouseOut = () => setShadow(1);

    return (
        <div>
            <Paper className={classes.section}>
                <Paper
                    className={classes.tb}
                    onMouseOver={onMouseOver}
                    onMouseOut={onMouseOut}
                    elevation={shadow}
                >
                    <Typography varient="h3" className={classes.header}>
                        Personal
                    </Typography>
                    <Grid container spacing={0}>
                        <Grid item xs={1} />
                        <Grid item xs={4} className={classes.linkContainer}>
                            <Typography>
                                <Link
                                    className={classes.link}
                                    style={{ color: "#ef5350" }}
                                    to="/about"
                                >
                                    About
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid item xs={3} />
                        <Grid item xs={4} className={classes.linkContainer}>
                            <Typography>
                                <Link
                                    className={classes.link}
                                    style={{ color: "#bae1ff" }}
                                    to="/"
                                >
                                    <Blog />
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid item xs={1} />
                        <Grid item xs={4} className={classes.linkContainer}>
                            <Typography>
                                <Link
                                    to="/"
                                    className={classes.link}
                                    style={{ color: "#64ffda" }}
                                >
                                    <Contact />
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid item xs={3} />
                        <Grid item xs={4} className={classes.linkContainer}>
                            <Typography>
                                <Link
                                    className={classes.link}
                                    style={{ color: "#ffa726" }}
                                    to="projects"
                                >
                                    Projects
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid item xs={1} />
                        <Grid item xs={4} className={classes.linkContainer}>
                            <Typography>
                                <Link
                                    className={classes.link}
                                    style={{ color: "#ba68c8" }}
                                    to={process.env.PUBLIC_URL + "resume.pdf"}
                                    target="_blank"
                                >
                                    Resume
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid item xs={3} />
                        <Grid item xs={4} className={classes.linkContainer}>
                            <Typography>
                                <a
                                    className={classes.link}
                                    style={{ color: "#ffee58" }}
                                    href="https://www.linkedin.com/in/peter-smiley-ccs"
                                    target="_blank"
                                >
                                    LinkedIn
                                </a>
                            </Typography>
                        </Grid>
                        <Grid item xs={1} />
                    </Grid>
                </Paper>
            </Paper>

            {/* <Paper className={classes.section}>
                <Paper
                    className={classes.tb}
                    onMouseOver={onMouseOver}
                    onMouseOut={onMouseOut}
                    elevation={shadow}
                >
                    <Typography varient="h3" className={classes.header}>
                        For Fun
                    </Typography>
                    <Grid container spacing={0}>
                        <Grid item xs={1} />
                        <Grid item xs={4} className={classes.linkContainer}>
                            <Typography>
                                <Link
                                    className={classes.link}
                                    style={{ color: "#c6ff00" }}
                                >
                                    Books
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid item xs={3} />
                        <Grid item xs={4} className={classes.linkContainer}>
                            <Typography>
                                <Link
                                    className={classes.link}
                                    style={{ color: "#baffc9" }}
                                >
                                    Hiking
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid item xs={1} />
                        <Grid item xs={4} className={classes.linkContainer}>
                            <Typography>
                                <Link
                                    className={classes.link}
                                    style={{ color: "#ffb3ba" }}
                                >
                                    Youtube
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid item xs={3} />
                        <Grid item xs={4} className={classes.linkContainer}>
                            <Typography>
                                <Link
                                    className={classes.link}
                                    style={{ color: "#ffffba" }}
                                >
                                    Git Repos
                                </Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Paper> */}
        </div>
    );
}
