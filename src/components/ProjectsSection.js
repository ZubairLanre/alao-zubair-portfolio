import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
    {
        title: "Millenco",
        description:
          "Millenco is a financial cooperative focused on empowering individuals through collective financial efforts.",
        getImageSrc: () => require("../images/millenco.jpg"),
        codeSrc: () => "https://github.com/ZubairAlao/Millenco-coop",
        demo: () => "https://millenco.netlify.app/",
    },
    {
        title: "Movie Maze",
        description:
          "Movie Maze is a web application built with React and Chakra UI to help users with information about popular movies and allow them to manage their favorite TV shows effortlessly.",
        getImageSrc: () => require("../images/MovieMaze.png"),
        codeSrc: () => "https://github.com/ZubairAlao/movie-database-app",
        demo: () => "https://moviemazedb.netlify.app/",
    },
    {
        title: "Weather Leaks",
        description:
          "A simple Weather App that provides you with accurate and up-to-date weather information with just a click of a button",
        getImageSrc: () => require("../images/WeatherLeak.png"),
        codeSrc: () => "https://github.com/ZubairAlao/WeatherLeak",
        demo: () => "https://weatherleak.netlify.app/",
    },
    {
        title: "Event Naija",
        description:
          "Simple Event Booking system done with React and Chakra UI to help users find and book events.",
        getImageSrc: () => require("../images/EventNaija.png"),
        codeSrc: () => "https://github.com/ZubairAlao/event-booking-system",
        demo: () => "https://naijaevent.netlify.app/",
    },
    {
      title: "E-Commerce Page",
      description:
        "Simple E-Commerce page for adding items to cart using HTML, SCSS, and JavaScript.",
      getImageSrc: () => require("../images/E-commerce-product-page.png"),
      codeSrc: () => "https://github.com/ZubairLanre/ecommerce-product-page",
      demo: () => "https://frontend-commerce-product-page.netlify.app/",
    },
    {
      title: "JavaScript Quiz",
      description:
        "Intermediate JavaScript Quiz featuring random question selection, previews, timer, and more. Built with HTML, CSS, and JavaScript.",
      getImageSrc: () => require("../images/JavaScript-Quiz.png"),
      codeSrc: () => "https://github.com/ZubairLanre/javascriptQuiz",
      demo: () => "https://africajsquiz.netlify.app/",
    },
    {
        title: "Random Fact Generator",
        description:
          "Generate random facts with HTML, CSS, and JavaScript.",
        getImageSrc: () => require("../images/Nigeria-Random-Fact-Generator.png"),
        codeSrc: () => "https://github.com/ZubairLanre/randomNigeriaFactsGenerator",
        demo: () => "https://randomnigeriafactsgenerator.netlify.app/",
    },
    {
        title: "Campus Help-Desk",
        description:
            "Web app for students to submit campus-related requests. Administrators manage using HTML, Bootstrap, and Flask.",
        getImageSrc: () => require("../images/campus-helpdesk.jpg"),
        codeSrc: () => "https://github.com/ZubairLanre/project",
        demo: () => "https://youtu.be/JfdqHv_XJek",
    },
];


const ProjectsSection = () => {
    return (
        <FullScreenSection
            justifyContent="center"
            alignItems="center"
            backgroundColor="#c7d55e0"
            spacing={8}
            px={{base: "8", md: "24"}}
            py={16}
            
        >
            <Heading as="h1" id="projects" color="#141b3d"
                position="relative"
                _before={{
                    content: '""',
                    position: "absolute",
                    width: "100%",
                    height: "2px",
                    bottom: "0",
                    left: "0",
                    backgroundColor: "#9b59b6",
                }}
            >
                Featured Projects
            </Heading>

            <Box
                display="grid"
                gridTemplateColumns={{base: "1fr", md: "repeat(2,minmax(0,1fr))"}}
                gridGap={8}
            >
                {projects.map((project) => (
                    <Card 
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        imageSrc={project.getImageSrc()}
                        codeSrc={project.codeSrc}
                        demo={project.demo}
                    />
                ))}
            </Box>
        </FullScreenSection>
    )
}

export default ProjectsSection;