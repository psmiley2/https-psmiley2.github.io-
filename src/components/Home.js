import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import Profile from "../media/profile.jpg";
import Blurbs from "./Blurbs";
import Links from "./Links";
import Technologies from "./Technologies";

const useStyles = makeStyles((theme) => ({
    root: {
        border: 0,
        color: "white",
        width: "100%",
    },
    profile: {
        // width: "100%",
        padding: "2%",
        marginLeft: "5%",
        marginTop: "7%",
        "&:hover": {
            backgroundColor: "#ff9100",
        },

        [theme.breakpoints.down("md")]: {
            width: "90%",
        },
        [theme.breakpoints.up("md")]: {
            width: "100%",
        },
    },
    blurb: {
        padding: "2%",
        marginTop: "10%",
        marginLeft: "5%",
    },
    textLink: {
        color: "black",
        "&:hover": {
            color: "#66cc66",
        },
    },
    blurbs: {
        marginLeft: "5%",
        marginTop: "2%",
        [theme.breakpoints.down("md")]: {
            marginLeft: "0%",
        },
    },
}));

export default function Home() {
    const classes = useStyles();
    const [shadow, setShadow] = useState(1);
    let onMouseOver = () => setShadow(24);
    let onMouseOut = () => setShadow(5);

    return (
        <Grid container spacing={1} className={classes.root}>
            <Grid item xs={12} sm={4} lg={4}>
                <Paper
                    onMouseOver={onMouseOver}
                    onMouseOut={onMouseOut}
                    elevation={shadow}
                    className={classes.profile}
                >
                    <img
                        style={{
                            resizeMode: "cover",
                            width: "100%",
                        }}
                        src={Profile}
                        alt="profile pic"
                    />
                </Paper>
            </Grid>

            {/* <Grid item xs={0} /> */}

            <Grid item xs={11} sm={6} lg={3} className={classes.blurbs}>
                <Blurbs />
            </Grid>

            <Grid item xs={11} sm={6} lg={3} className={classes.blurbs}>
                <Links />
                <Technologies />
            </Grid>
        </Grid>
    );
}
