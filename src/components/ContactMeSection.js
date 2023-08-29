import { useFormik } from "formik"
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    HStack,
    Stack,
    Textarea,
    VStack,
    Input, 
    Text,
} from "@chakra-ui/react"
import * as Yup from 'yup'
import FullScreenSection from "./FullScreenSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";





const contactMessage = `Feel free to get in touch with me using the contact form. 
I would love to hear from you and discuss any web development projects or opportunities you may have. 
I am dedicated to delivering high-quality solutions that meet your unique needs and exceed your expectations. 
Let's collaborate and create something amazing together!`
const socials = [
    {
        icon: faEnvelope,
        url: "mailto: Alaozubair@example.com", 
    },
    {
        icon: faGithub,
        url: "https://github.com/ZubairLanre", 
    },
    {
        icon: faLinkedin,
        url: "https://www.linkedin.com/in/zubair-alao-4a95b3174/", 
    },
    {
        icon: faTwitter,
        url: "https://twitter.com/Zubair_Lanre", 
    },
    {
        icon: faWhatsapp,
        url: "https://wa.me/08130030894", 
    },
    {
        icon: faPhone,
        url: "tel:08130030894", 
    },
];
const ContactMeSection = () => {
        /** 
            * Covers a complete form implementation using formik and yup for validation 
        */

    const formik = useFormik({
        initialValues: {
            firstName: "",
            email: "",
            message: "", 
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("Required"),
            email: Yup.string().email("Invalid email address").required("Required"),
            message: Yup.string()
            .min(10, "Must be atleast 15 characters")
            .required("Required"),
        }),
    });

    return (
        <FullScreenSection
            isDarkBackground
            backgroundColor="#141b3d"
            justifyContent="center"
            alignItems="center"
            spacing={8}
            px={{base: "8", md: "24"}}
            py={16}
        >
            <VStack spacing={8}>
                <Heading as="h1" id="contactme"
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
                    Contact Me 
                </Heading> 

                <Stack flexDirection={{base: "column", lg: "row"}}>
                    <VStack flex="1" spacing={4}>
                        <Text>
                            {contactMessage}
                        </Text>
                        <HStack spacing={8} justifyContent="center">
                            {socials.map(({icon, url}) => (
                                <a  
                                    key={url}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon icon={icon} size="2x" key={url} _hover={{color: "#9b59b6"}} />
                                </a>
                            ))}
                        </HStack>
                    </VStack>
                    <VStack maxW="800px" flex="1" px={16}>
                        <Box  rounded="md" w="100%">
                            <form  name="contact" method="POST" data-netlify="true">
                                <input type="hidden" name="form-name" value="contact" />    
                                <VStack spacing={4}>
                                    <FormControl isInvalid={!!formik.errors.firstName  && formik.touched.firstName}>
                                        <FormLabel htmlFor="firstName">Name</FormLabel> 
                                        <Input 
                                            id="firstName" 
                                            name="firstName" 
                                            {...formik.getFieldProps("firstName")} 
                                            borderColor="#9b59b6"
                                        /> 
                                        <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                                    </FormControl>
                                    
                                    <FormControl isInvalid={!!formik.errors.email && formik.touched.email}> 
                                        <FormLabel htmlFor="email">Email Address</FormLabel> 
                                        <Input 
                                            id="email" 
                                            name="email" 
                                            type="email" 
                                            {...formik.getFieldProps("email")} 
                                            borderColor="#9b59b6"
                                        /> 
                                        <FormErrorMessage>{formik.errors.email}</FormErrorMessage> 
                                    </FormControl>

                                    <FormControl isInvalid={!!formik.errors.message && formik.touched.message}> 
                                        <FormLabel htmlFor="message">Your message</FormLabel> 
                                        <Textarea 
                                            id="message" 
                                            name="message" 
                                            height={250} 
                                            {...formik.getFieldProps("message")} 
                                            borderColor="#9b59b6"
                                        /> 
                                        <FormErrorMessage>{formik.errors.message}</FormErrorMessage> 
                                    </FormControl> 

                                    <Button type="submit" colorScheme="purple" width="full"> 
                                        Submit 
                                    </Button>
                                </VStack>
                            </form>
                        </Box>
                    </VStack>
                </Stack>
            </VStack>
        </FullScreenSection>
    )
}

export default ContactMeSection;