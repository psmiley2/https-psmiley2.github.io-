import { Box, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React, { useEffect, useState } from "react";
import P5Wrapper from "react-p5-wrapper";
import ArrowKeys from "../media/arrowKeys.png";
import sketch from "../sketches/sketch";

export default function RobotCheck() {
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

    return (
        <div>
            <Grid container spacing={1}>
                <Grid item xs={12} style={{ textAlign: "center" }}>
                    <Typography varient="h3">Prove You Are A Human!</Typography>
                </Grid>
                <Grid item xs={2} />
                <Grid item xs={8}>
                    <P5Wrapper
                        sketch={sketch}
                        windowSize={windowSize}
                    ></P5Wrapper>
                </Grid>
                <Grid item xs={2} />
                <Grid item xs={5} />
                <Grid item xs={2}>
                    <Box
                        style={{
                            width: "100%",
                            aspectRatio: 1,
                        }}
                    >
                        <img
                            style={{
                                resizeMode: "cover",
                                width: "100%",
                                height: "100%",
                            }}
                            src={ArrowKeys}
                            alt="use arrow keys"
                        />
                    </Box>
                </Grid>
                <Grid item xs={5} />
            </Grid>
        </div>
    );
}
