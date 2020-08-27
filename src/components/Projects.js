import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import ProjectCard from "./ProjectCard";

const useStyles = makeStyles((theme) => ({
    header: {
        color: "white",
        textAlign: "center",
        padding: "3%",
    },
    subHeader: {
        color: "white",
        textAlign: "center",
        // backgroundColor: "blue",
    },
    card: {
        // marginLeft: "3%",
        // backgroundColor: "red",
    },
    gridContainer: {},
    section: {
        paddingTop: "1%",
        paddingBottom: "5%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
}));

export default function Projects() {
    const classes = useStyles();

    return (
        <div>
            <Typography variant="h2" className={classes.header}>
                Projects
            </Typography>
            <Box className={classes.gridContainer}>
                <Typography variant="h4" className={classes.subHeader}>
                    <span role="img" aria-label="star">
                        🌟
                    </span>
                    Personal
                </Typography>
                <Box className={classes.section}>
                    <ProjectCard
                        title={"Wogol (Current Project, Team)"}
                        languages={"Swift, Firebase"}
                        description={
                            "A social media app to help people form habits and achieve tasks through cohorts with friends who are working towards similar goals."
                        }
                        workedOn={"Summer 2020"}
                        gitUrl={"#"}
                    />
                    <ProjectCard
                        title={"FloodIt (Solo)"}
                        languages={"Python, Tkinter"}
                        description={
                            "A genetic algorithm built in order to optimally solve the puzzle FloodIt. The board and game was built for Assistive Algorithms. The bot was built for fun."
                        }
                        workedOn={"Spring 2020"}
                        gitUrl={"https://github.com/psmiley2/Floodit"}
                    />
                    <ProjectCard
                        title={"Collabratory (Solo)"}
                        languages={"Python, Django"}
                        description={
                            "A classroom tool to take the confusion out of group projects. Made to help both teachers and students. Nominated for the Tufts Ideas Competition."
                        }
                        workedOn={"Summer 2019"}
                        gitUrl={"https://github.com/psmiley2/Collabratory"}
                    />
                </Box>
            </Box>

            <Box className={classes.gridContainer}>
                <Typography variant="h4" className={classes.subHeader}>
                    <span role="img" aria-label="star">
                        🍕
                    </span>
                    Hackathons
                </Typography>
                <Box className={classes.section}>
                    <ProjectCard
                        title={"Immunify (Team)"}
                        languages={"React, MongoDB, Express.js, Javascript"}
                        description={
                            "A platform empowering citizens to improve the health of their local communities and to support national research in order to combat Covid-19."
                        }
                        workedOn={"Summer 2020"}
                        gitUrl={"https://github.com/immuto-inc/Immunify"}
                    />
                    <ProjectCard
                        title={"ConsentUs (Team)"}
                        languages={
                            "Express, React, MongoDB, Solidity, Javascript"
                        }
                        description={
                            "A blockchain project for simplifying and securing patient consent in clinical trials. Won Highest Usability Award at the MIT Bitcoin Hackathon."
                        }
                        workedOn={"Spring 2020"}
                        gitUrl={"https://github.com/derekimmuto/ConsentUs"}
                    />
                    <ProjectCard
                        title={"StudyWithTufts (Solo)"}
                        languages={"Python, Django, SQLite"}
                        description={
                            "A tool for students to easily organize and manage study groups with other students in their classes. Runner up in the Tufty Polyhack hackathon."
                        }
                        workedOn={"Fall 2019"}
                        gitUrl={"https://github.com/psmiley2/StudyWithTufts"}
                    />
                </Box>
            </Box>

            <Box className={classes.gridContainer}>
                <Typography variant="h4" className={classes.subHeader}>
                    <span role="img" aria-label="star">
                        💼
                    </span>
                    Work
                </Typography>
                <Box className={classes.section}>
                    <ProjectCard
                        title={"Permissioning System (Solo)"}
                        languages={"Express.js, Immuto API, MongoDB"}
                        description={
                            "A blockchain based permissioning API that allows users to allow or deny access to the content of documents on the Ethereum blockchain."
                        }
                        workedOn={"Winter 2020"}
                        gitUrl={"#"}
                    />
                    <ProjectCard
                        title={"Chrome Extension (Solo)"}
                        languages={"React.js, Chrome API, Javascript"}
                        description={
                            "A chrome extension and multiple background scripts that allow users to easily levarage blockchain technology such as storing and verifying documents."
                        }
                        workedOn={"Spring 2020"}
                        gitUrl={"#"}
                    />
                </Box>
            </Box>

            <Box className={classes.gridContainer}>
                <Typography variant="h4" className={classes.subHeader}>
                    <span role="img" aria-label="star">
                        📓
                    </span>
                    School
                </Typography>
                <Box className={classes.section}>
                    <ProjectCard
                        title={"Artih (Paired)"}
                        languages={"C"}
                        description={
                            "An image compressor and decompressor. Comes with a Linux command line tool that allows you to easily import images."
                        }
                        workedOn={"Winter 2020"}
                        gitUrl={"#"}
                    />
                    <ProjectCard
                        title={"Universal Machine (Paired)"}
                        languages={"C"}
                        description={
                            "An emulator for UM code. Can read in an entire file written in UM code (similar to assembly) and compile + execute it using the C programming language."
                        }
                        workedOn={"Spring 2020"}
                        gitUrl={"#"}
                    />
                    <ProjectCard
                        title={"ML/DL Classifier (Solo)"}
                        languages={"Python, OpenCV"}
                        description={
                            "Takes in data from the webcam and identifies both faces and brightly colored objects on screen in real time. Puts a box around object matching their color."
                        }
                        workedOn={"Spring 2020"}
                        gitUrl={
                            "https://github.com/psmiley2/Face-and-Object-Recognizer"
                        }
                    />
                </Box>
            </Box>
        </div>
    );
}
