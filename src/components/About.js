import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import AboutCard from "./AboutCard";
import BookCard from "./BookCard";

const useStyles = makeStyles((theme) => ({
    header: {
        color: "white",
        textAlign: "center",
        padding: "4%",
    },
    subHeader: {
        color: "white",
        textAlign: "center",
        minWidth: "60%",
    },
    gridContainer: {
        minWidth: "80%",
    },
    section: {
        paddingTop: "1%",
        paddingBottom: "3%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
    backButton: {
        float: "left",
    },
}));

export default function About() {
    const classes = useStyles();

    return (
        <div>
            <Typography variant="h2" className={classes.header}>
                About
            </Typography>

            <Box className={classes.gridContainer}>
                <Typography variant="h4" className={classes.subHeader}>
                    <span role="img" aria-label="star">
                        👾
                    </span>
                    Who Am I
                </Typography>
                <Box className={classes.section}>
                    <AboutCard
                        text={
                            "Hello World! My name is Peter and I am a Sophomore studying computer science at Tufts university. Originally, I am from Rockland, NY and I am thankful to have always lived within 30 minutes of a major city (NYC and now Boston). My interests in technology range from cyber security to web engineering to mobile development learning to blockchain. I have experience in all of these fields but would love to dive deeper into all of them. Outside of tech, I like to hike, run, travel, camp, and play pickup basketball."
                        }
                    />
                </Box>

                <Typography variant="h4" className={classes.subHeader}>
                    <span role="img" aria-label="star">
                        😎
                    </span>
                    Early Years
                </Typography>
                <Box className={classes.section}>
                    <AboutCard
                        text={
                            "I have been programming since I was 14 and have been doing it consistently ever since. I started learning Java from an older kid at my school who would teach me and two of my friends after school. We spent about a year making games in java such as unbeatable tic tac toe bot, a simple scientific calculator, and some text based maze games. Once I got to high school, I took a class that taught both QBasic and C++ and another that focused on Java. I was thankful for the classes I got when I was younger, so the same group of friends and I set up a programming class at our local community center where we taught 7th through 10th graders the basics of C++. We also helped to start a Lego robotics team at our local elementary school and I was a counselor at a Summer camp where I taught classes ranging from basic web design to Unity to programming in C#."
                        }
                    />
                </Box>

                <Typography variant="h4" className={classes.subHeader}>
                    <span role="img" aria-label="star">
                        👨‍💻
                    </span>
                    College
                </Typography>
                <Box className={classes.section}>
                    <AboutCard
                        text={
                            "Going to college allowed me to finally find a large community of other people who share my interests. I have taken and have access to a wide variety of classes within the computer science field. Outside of classes, I am also the head of development for the Tufts Blockchain Club as well as a member of JumboSEC, our cybersecurity club. Above all that however, my favorite part about programming is working with friends on meaningful or interesting projects. Currently I am working on a mobile app with my friend from our original group of after school coders in middle school. Although the time difference between Tufts in Boston and Caltech in California is 3 hours, we still manage to find time to work together and Zoom often. Additionally we gained acceptance into Tufts’ Entrepreneurship Accelerator last Summer and had a fantastic time learning about the non-technical aspects of starting a company with our product. Additionally, hackathons have been some of the most fun and educational days I have had so far in college. The collaborative and competitive spirit along with a great community of people feels like home now and I am still amazed that it all started when I accidentally stumbled upon my first one a month into freshman year. I have come a long way since then and have won prizes and made great friends, so I hope to continue my streak of participating at least twice a semester until I graduate."
                        }
                    />
                </Box>

                <Typography variant="h4" className={classes.subHeader}>
                    <span role="img" aria-label="star">
                        📚
                    </span>
                    Favorite Books
                </Typography>
                <Box className={classes.section}>
                    <BookCard />
                </Box>
            </Box>
        </div>
    );
}
