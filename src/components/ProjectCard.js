import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
const useStyles = makeStyles((theme) => ({
    header: {
        color: "white",
        textAlign: "center",
        padding: "5%",
    },
    root: {
        minWidth: 275,
        backgroundColor: "#333333",
        color: "white",
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
        color: "white",
    },
    title: {
        color: "white",
        fontSize: 14,
    },
    pos: {
        color: "white",
        marginBottom: 12,
    },
    tb: {
        paddingTop: "1%",
        paddingLeft: "1%",
        paddingRight: ".5%",
        paddingBottom: ".5%",
        marginTop: "2%",

        "&:hover": {
            backgroundColor: "#18ffff",
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
    codeButton: {
        width: "100%",
        backgroundColor: "white",
        "&:hover": {
            backgroundColor: "#ec407a",
        },
    },
}));
export default function ProjectCard({
    title,
    languages,
    description,
    workedOn,
    gitUrl,
}) {
    const classes = useStyles();

    let renderCodeButton = () => {
        if (gitUrl !== "#") {
            return (
                <a href={gitUrl} className={classes.codeButton} target="_blank">
                    <Button size="small" className={classes.codeButton}>
                        Code
                    </Button>
                </a>
            );
        }
        return (
            <Button size="small" className={classes.codeButton}>
                Private Repo
            </Button>
        );
    };

    return (
        <Paper className={classes.tb}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                    >
                        {workedOn}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {languages}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>{renderCodeButton()}</CardActions>
            </Card>
        </Paper>
    );
}
