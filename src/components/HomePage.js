import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
/* Use `…/dist/cjs/…` if you’re not in ESM! */
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import rehypeRaw from "rehype-raw";
import Contact from "./Contact"
import Game from "./Game"

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "100%",
        marginTop: 0,
    },
}));

export default function HomePage() {
    const classes = useStyles();
    const [shadow, setShadow] = useState(1);
    let onMouseOver = () => setShadow(24);
    let onMouseOut = () => setShadow(5);

   const components = {
  code({node, inline, className, children, ...props}) {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <SyntaxHighlighter style={dark} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    )
  }
}

// Did you know you can use tildes instead of backticks for code in markdown? ✨
const markdown = `
# Hi 😃 I'm Peter Smiley! Welcome to my home on the internet 👨‍💻
--- 

### ✨ Info
I am a <a target="_blank" href="https://www.youtube.com/watch?v=8d4RtvMQp10&list=LL&index=10&t=33s">computer science major</a> at Tufts University and a TA for <a href="https://www.cs.tufts.edu/comp/118/index.html">CS-118 Cloud Computing</a>.

I design simulations, genetic algorithms, and computational models for <a href="https://allencenter.tufts.edu/our-team/michael-levin/">Dr. Michael Levin</a> in the <a href="https://ase.tufts.edu/biology/labs/levin/">Levin Lab</a> at Tufts in order to better understand morphogenesis. 

Here is my 
<a target="_blank" href="https://docs.google.com/document/d/1YUVkqwBtcXf2buHpMkNTi8w4czmnbLxcYl6bmL3Otpc/edit?usp=sharing" style="color:green">Resume</a>,
<a target="_blank" href="https://www.linkedin.com/in/peter-smiley-ccs/" style="color:orange">LinkedIn</a>, and 
<a target="_blank" href="https://imgur.com/iFUT72s" style="color:pink">Picture</a>. If you need anything else, feel free to contact me using the button at the top of the page.

### 👾 Selected Projects
#### Public:
- <a target="_blank" href="https://docs.google.com/document/d/1NJvzNHr3fZX5sgO7CGUvB8EvKvSjwurWbByP06z-erw/edit#heading=h.x2jzluybw5">**Deploy and Collect Workflow-Centric Traces from Microservice Applications**</a>: Collaborated with OperateFirst to deploy microservice applications on the Mass Open Cloud cluster which we used to collect and analyze metrics, traffic, and other telemetry data.  Wrote a guide for researchers to better understand how to deploy and collect traces from microservice applications.
- <a target="_blank" href="https://github.com/derekimmuto/ConsentUs">**Consentus**</a>: A blockchain project for simplifying and securing patient consent in clinical trials. Won Highest Usability Award at the MIT Bitcoin Hackathon.
- <a target="_blank" href="https://github.com/immuto-inc/Immunify">**Immunify**</a>: A platform empowering citizens to improve the health of their local communities and to support national research in order to combat Covid-19.
- <a target="_blank" href="https://github.com/psmiley2/Face-and-Object-Recognizer">**ML/DL classifier**</a>: Takes in data from the webcam and identifies both faces and brightly colored objects on screen in real time. Puts a box around objects where the color of the box matches the object's color.
- <a target="_blank" href="https://gist.github.com/psmiley2/9ca55caf10e1aaa24793c9ee2eda8b04">**Neuroimaging Optimal Path Approximation**</a>: A genetic algorithm to provide a customized approximation to the NP Hard traveling salesman problem.  Created for a neuroscientist to find an efficient path for microscope imaging across a section of brain tissue.
- <a target="_blank" href="https://github.com/psmiley2/Floodit">**Floodit**</a>: A genetic algorithm built in order to optimally solve the puzzle FloodIt. The board and game was built for Assistive Algorithms. The bot was built for fun.
- <a target="_blank" href="https://github.com/psmiley2/Collabratory">**Collabratory**</a>: A classroom tool to take the confusion out of group projects. Made to help both teachers and students. Nominated for the Tufts Ideas Competition.

#### Private (ask me about):
- **Chronicle Notification System**: Designed and implemented Webhook notifications and other full stack improvements to the customer notification system within Chronicle, Google Cloud’s security product that monitors petabytes worth of telemetry data.
- **Universal Machine**: An emulator for UM code. Can read in an entire file written in UM code (similar to assembly) and compile + execute it using the C programming language.
- **Image Compressor + Decompressor**: An image compressor and decompressor. Comes with a Linux command line tool that allows you to easily import images.
- **Chrome Extension**: A chrome extension and multiple background scripts that allow users to easily leverage blockchain technology such as storing and verifying documents.
- **Permissioning System**: A blockchain based permissioning API that allows users to allow or deny access to the content of documents on the Ethereum blockchain.

### 😎 Book Recs
- The Power of Now -Eckhart Tolle
- Can't Hurt Me -David Goggins 
- Atomic Habits -James Clear
- Deep Work -Cal Newport
- A Man For All Markets -Edward O. Thorp
- Ender's Game -Orson Scott Card
- The Lord of the Rings -J. R. R. Tolkien
`


    return (
      <>
        <Contact />
        <ReactMarkdown rehypePlugins={[rehypeRaw]} plugins={[gfm]} components={components} children={markdown} />
        <Game />
      </>
);
}
