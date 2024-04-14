import React from "react";
import { Avatar, Heading, Text, VStack, Stack, Button } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import avatarImage from "../images/larry.png";
import { motion } from "framer-motion";

// const bio1 = "I'm Zubair Alao";
const bio2 = "I'm a Front-End Web Developer skilled in HTML, CSS, JavaScript, and React.  I specialize in building and designing interactive and dynamic web pages that provide an engaging user experience";

const LandingSection = () => {

    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');  // Get the "about" section element
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });  // Scroll to the "about" section with smooth animation
        }
    };

    return (
        <FullScreenSection
            justifyContent="center"
            alignItems="center"
            backgroundColor="#0d1432"
            color="#fff"
            px={{base: "8", md: "24"}}
            pt={75}
            pb={24}
        >
            <Stack 
                as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
                spacing={{base: "8", md: "8"}} justifyContent={{base: "center", md: "space-between" }} alignItems="center" 
                direction={{ base: "column", md: "row" }}
            >


                <VStack 
                    as={motion.div} 
                    initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.8 }}
                    spacing={8} textAlign={{base: "center", md: "left"}} align={{base: "center", md: "start"}}  
                >
                    <VStack align={{base: "center", md: "start"}}>
                        <Heading as="h1" size={{base: "xl", md: "3xl"}} noOfLines={3}>
                            I'm 
                            <span style={{ color: "#f39c12", marginLeft: "0.2em" }}>
                                Zubair Alao
                            </span>  
                        </Heading>
                        
                        <Text as="p" size="md" textAlign={{base: "justify", md: "left"}}>
                            {bio2}
                        </Text>
                    </VStack>
                    <VStack align="start">
                        <Button
                            as="a"
                            href="#about"
                            backgroundColor="#f39c12" display="flex" alignItems="center"
                            _hover={{backgroundColor: "#9b59b6", color: "#fff"}}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToAbout();  // Call the scrollToAbout function on click
                            }}
                            >
                                About me <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "10px" }} />
                        </Button>

                    </VStack>
                </VStack>

                <Avatar 
                    as={motion.div} 
                    initial={{ x: 100 }} animate={{ x: 0 }} transition={{ duration: 0.8 }}
                    display={{ base: 'none', sm: 'block' }}
                    src={avatarImage}
                    size={{base: "2xl", sm:"3xl"}}
                    name="Alao Zubair Lanre"
                />
            </Stack>
        </FullScreenSection>
    );
}

export default LandingSection;
