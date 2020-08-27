import { ListItem, ListItemText, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
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
            backgroundColor: "#40c4ff",
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

export default function BookCard() {
    const classes = useStyles();
    return (
        <Paper className={classes.tb}>
            <Card className={classes.root}>
                <CardContent>
                    <List>
                        <ListItem>
                            <Typography
                                variant="h5"
                                style={{ color: "#e040fb" }}
                            >
                                Business
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                The Lean Startup by Eric Ries
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                The Intelligent Investor by Benjamin Graham
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <Typography
                                variant="h5"
                                style={{ color: "#1de9b6" }}
                            >
                                Personal
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                Atomic Habits by James Clear
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                Ultralearning by Scott Young
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                Deep Work by Cal Newport
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>Mindset by Carol Dweck</ListItemText>
                        </ListItem>
                        <ListItem>
                            <Typography
                                variant="h5"
                                style={{ color: "#ffeb3b" }}
                            >
                                Classical Non-Fiction
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                Thinking Fast and Slow by Daniel Kahneman
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                A Man for All Markets by Edward O. Thorp
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                Outnumbered by David Sumpter
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <Typography
                                variant="h5"
                                style={{ color: "#ff5252 " }}
                            >
                                Fiction
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                The Lord of the Rings by J.R.R Tolkein
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                Enders Game by Orson Scott Card
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                The Secret History by Donna Tartt
                            </ListItemText>
                        </ListItem>
                    </List>
                </CardContent>
            </Card>
        </Paper>
    );
}
