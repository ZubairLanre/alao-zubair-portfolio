import * as React from "react";
import {VStack} from "@chakra-ui/react";

/**
 * Illustrates the use of children prop and spread operator
 */

const FullScreenSection = ({children, isDarkBackground, ...boxProps}) => {
    return (
        <VStack
            backgroundColor={boxProps.backgroundColor}
            // bgGradient="linear(to-r, #0d1b2a, #7f7f7f)"
            color={isDarkBackground ? "white" : "#0d1432"}
        >
            <VStack maxWidth="1280px" minHeight="100vh" {...boxProps}>
                {children}
            </VStack>
        </VStack>
    )
}

export default FullScreenSection;