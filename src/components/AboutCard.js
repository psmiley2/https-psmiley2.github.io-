import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        backgroundColor: "#333333",
        color: "white",
    },
    title: {
        color: "white",
        fontSize: 14,
    },
    tb: {
        minWidth: "70%",
        paddingTop: "1%",
        paddingLeft: "1%",
        paddingRight: ".5%",
        paddingBottom: ".5%",
        marginTop: "2%",

        "&:hover": {
            backgroundColor: "#ffff00",
        },

        [theme.breakpoints.down("sm")]: {
            width: "90%",
        },
        [theme.breakpoints.up("md")]: {
            width: "40%",
        },
        [theme.breakpoints.up("lg")]: {
            width: "30%",
        },
    },
}));
export default function ProjectCard({ text }) {
    const classes = useStyles();
    return (
        <Paper className={classes.tb}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="body1" component="p">
                        {text}
                    </Typography>
                </CardContent>
            </Card>
        </Paper>
    );
}
