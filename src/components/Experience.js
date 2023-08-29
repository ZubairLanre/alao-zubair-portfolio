import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
const mySkills = [
  {
    skill: "HTML",
  },
  {
    skill: "CSS",
  },
  {
    skill: "JavaScript",
  },
  {
    skill: "React",
  },
  {
    skill: "Git and Github",
  },
  {
    skill: "Python",
  },
  {
    skill: "Flask",
  },
];

const MyExperiences = [
    // ... other experiences ...
    {
      timestamp: "April 2023",
      title: "CS50X: Introduction To Computer Science - CS50",
      description:
        "Completed CS50X, gaining proficiency in C, Python, HTML, CSS, JavaScript. Developed a campus helpdesk for user complaints. Challenging and rewarding course, providing valuable experience for future endeavors.",
    },
    {
      timestamp: "December 2022",
      title: "Responsive Web Design - Freecodecamp",
      description:
        "Completed a 400-hour course on responsive design through FreeCodeCamp. Developed a portfolio website, gaining strong foundation in HTML, CSS, responsive design.",
    },
    {
      timestamp: "March 2022",
      title: "Affiliate And Digital Marketer - Jumia",
      description:
        "Gained tech knowledge and sales skills as a Jumia affiliate. Insight into technology industry and inspiration for further learning.",
    },
    {
      timestamp: "2018 - 2022",
      title: "Graphic Design - Akot Prints",
      description:
        "Internship at Akot Prints enhanced graphic design skills. Proficient in Illustrator, Photoshop, CorelDraw, After Effects. Valuable insight into printing and branding industry.",
    },
  ];
  
const Experience = () => {
  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#141b3d"
      spacing={8}
      px={{ base: "8", md: "24" }}
      py={16}
    >
      <Heading
        position="relative"
        as="h1"
        id="experience"
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
        My Skills
      </Heading>
      <Box display="flex" flexWrap="wrap" gridGap={8}>
        {mySkills.map((skill, index) => (
          <Box key={index} 
            border="1px" 
            // borderColor="#c7d55e0"
            boxShadow="0px 4px 6px rgba(0, 0, 0, 0.3)"
            px={5}
            py={2}

        >
            {skill.skill}</Box>
        ))}
      </Box>

    <Heading
      position="relative"
      as="h1"
      id="experience"
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
        My Experience
    </Heading>

    <Box display="grid" gridGap={8} gridTemplateColumns={{base: "1fr", md: "repeat(2, minmax(0, 1fr))"}}>
        {MyExperiences.map((experience, index) => (
            <Box
                key={index}
                p={5}
                border="1px"
                borderColor="#c7d55e0"
                boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
                display="flex"
                alignItems="start"
                borderRadius="md"
            >
                <FontAwesomeIcon icon={faBriefcase} size="lg" color="#f39c12" />
                <Box ml={3}>
                    <Text fontSize="sm" fontWeight="semibold" backgroundColor="#9b59b6" display="inline" px={2}>
                    {experience.timestamp}
                    </Text>
                    <Text fontSize="lg" fontWeight="medium">
                    {experience.title}
                    </Text>
                    <Text color="gray.400">{experience.description}</Text>
                </Box>
            </Box>
        ))}
    </Box>
    
    </FullScreenSection>
  );
};

export default Experience;
