import {
    List,
    ListItem,
    ListItemText,
    Paper,
    Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
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
            backgroundColor: "#651fff",
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

export default function Technologies() {
    const classes = useStyles();

    const [shadow, setShadow] = useState(1);
    let onMouseOver = () => setShadow(24);
    let onMouseOut = () => setShadow(1);

    return (
        <Paper className={classes.section}>
            <Paper
                className={classes.tb}
                onMouseOver={onMouseOver}
                onMouseOut={onMouseOut}
                elevation={shadow}
            >
                <Typography varient="h3" className={classes.header}>
                    Languages & Technologies
                </Typography>

                <List>
                    <ListItem>
                        <ListItemText>
                            <span role="img" aria-label="star">
                                🌟
                            </span>
                            Best ➜ C & Javascript
                        </ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemText>
                            Comfortable ➜ Python & C++ & Go
                        </ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemText>Familiar ➜ Java & Swift</ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemText>
                            Favorite Tech ➜ React.js & Git & Django & express.js
                            & Redux & MongoDB & Linux & P5.js
                        </ListItemText>
                    </ListItem>
                </List>
            </Paper>
        </Paper>
    );
}
