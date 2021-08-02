import { List, ListItem, ListItemText } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Box, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React, { useEffect, useState } from "react";
import P5Wrapper from "react-p5-wrapper";
import ArrowKeys from "../media/arrowKeys.png";
import sketch from "../sketches/sketch";

const Game = () => {
    const [open, setOpen] = React.useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleClose();
    };

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (window.innerWidth < 1000) {
        return <></>
    }
    return (
        <div>
            <Grid container spacing={1}>
                <Grid item xs={12} style={{ textAlign: "center" }}>
                    <Typography varient="h3">Use arrow keys to reach the green square!</Typography>
                </Grid>
                <Grid item xs={2} />
                <Grid item xs={8}>
                    <P5Wrapper
                        sketch={sketch}
                        windowSize={windowSize}
                    ></P5Wrapper>
                </Grid>
            </Grid>
        </div>
    );
};

export default Game;
