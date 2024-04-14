import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Heading, Text, Stack, } from "@chakra-ui/react";

const greeting = "I'm Alao Zubair Lanre. Take a look at some of my work that I have done in various programming languages.";
const paragraph = `I'm a passionate web developer, I possess an insatiable curiosity about the various aspects of web development, both front-end and back-end. I love technology and it fuels my drive to push myself beyond my limits. With a firm belief in my abilities, I approach every project with a determination to succeed.
Through my experience in HTML, CSS, JavaScript, React and Python, I have honed my skills and gained a deeper understanding of the intricacies of web development. In my first project, I employed Flask technology to create an innovative solution that showcased my proficiency in web development.`;

const About = () => {
    return (
        <FullScreenSection 
            justifyContent="center"
            alignItems="center"
            backgroundColor="#fff"
            spacing={16}
            px={{base: "8", md: "24"}}
            py={16}
        >
        
        <Heading 
            position="relative"
            as="h1" 
            id="about"
            _before={{
                content: '""',
                position: "absolute",
                width: "100%",
                height: "2px",
                bottom: "0",
                left: "0",
                backgroundColor: "#9b59b6", 
            }}
            maxW="xl" // Limiting the width on small screens
            textAlign={{ base: "center", md: "left" }} // Align left on medium screens
            mx="auto" // Center on small screens
        >
            About Me
        </Heading>

        <Stack
            spacing={{ base: "8", md: "12" }}
            textAlign={{ base: "center", md: "left" }}
            direction={{ base: "column", md: "row" }}
            alignItems={{ base: "center", md: "flex-start" }}  // Align items to the start in the "md" breakpoint
        >
            <Heading as="h3" size="lg" flex="1" textAlign={{base: "left", md: "right"}}
                maxW="xl" // Limiting the width on small screens
                mx="auto" // Center on small screens
            > 
            
                {greeting}
            </Heading>

            <Text as="p" size="md"  flex="2" textAlign={{base: "justify", md: "left"}}
                maxW="xl" // Limiting the width on small screens
                mx="auto" // Center on small screens
            > 
                {paragraph}
            </Text>
        </Stack>

        </FullScreenSection>
    )
}

export default About;