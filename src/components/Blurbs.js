import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    textLink: {
        color: "white",
        "&:hover": {
            color: "#66cc66",
        },
    },
    tb: {
        backgroundColor: "#333333",
        padding: "2%",
        color: "white",
    },
    blurb: {
        width: "100%",
        paddingTop: "2%",
        paddingLeft: "2%",
        paddingRight: "1%",
        paddingBottom: "1%",
        marginTop: "4%",
        marginBottom: "6%",
        marginLeft: "5%",
        "&:hover": {
            backgroundColor: "#03a9f4",
        },
    },
});

export default function Blurbs() {
    const classes = useStyles();

    const [shadow, setShadow] = useState(1);
    let onMouseOver = () => setShadow(24);
    let onMouseOut = () => setShadow(1);

    return (
        <div>
            <Paper className={classes.blurb}>
                <Paper
                    className={classes.tb}
                    onMouseOver={onMouseOver}
                    onMouseOut={onMouseOut}
                    elevation={shadow}
                >
                    <Typography>
                        Hi! I'm Peter, and you just played the first game I've
                        ever built! (if you are not on mobile)
                    </Typography>
                </Paper>
            </Paper>
            <Paper className={classes.blurb}>
                <Paper
                    className={classes.tb}
                    onMouseOver={onMouseOver}
                    onMouseOut={onMouseOut}
                    elevation={shadow}
                >
                    <Typography>
                        It's not much, I know, but I was 14 years old at the
                        time and I've come a long way since then! I would be
                        happy to share some of my more{" "}
                        <Link className={classes.textLink} to="/projects">
                            recent work
                        </Link>{" "}
                        with you.
                    </Typography>
                </Paper>
            </Paper>

            <Paper className={classes.blurb}>
                <Paper
                    className={classes.tb}
                    onMouseOver={onMouseOver}
                    onMouseOut={onMouseOut}
                    elevation={shadow}
                >
                    <Typography>
                        Currently, I am a Computer Science major at Tufts
                        University with interest and experience in topics
                        ranging from Web Development, Mobile Development, Web
                        Security, Blockchain, and Robotics.
                    </Typography>
                </Paper>
            </Paper>

            <Paper className={classes.blurb}>
                <Paper
                    className={classes.tb}
                    onMouseOver={onMouseOver}
                    onMouseOut={onMouseOut}
                    elevation={shadow}
                >
                    <Typography>
                        Whether you have a work opportunity, an exciting open
                        source project, a book recommendation, or anything at
                        all, feel free to reach out!
                    </Typography>
                </Paper>
            </Paper>
        </div>
    );
}
