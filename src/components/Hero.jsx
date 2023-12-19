import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import lottie from "./Styles/new.json";

import LottieAnimation from "./Design";
const Hero = () => {
  const [text] = useTypewriter({
    words: ["Prantor Hawlader", "Full Stack React Developer"],
    typeSpeed: 80,
    deleteSpeed: 90,
    loop: true,
  });

  return (
    <SimpleGrid id="home" columns={{ sm: 1, md: 1, lg: 2, xl: 2 }}  mx="2rem" >
      <Box >
        <LottieAnimation animate={lottie} />
      </Box>

      <Box marginTop={"6rem"} >
        <Text
          className="header"
          fontWeight={"extrabold"}
          color={"whiteAlpha.900"}
          fontSize={"40px"}
        >
          Hello{" "}
        </Text>
        <Text
          bgGradient="linear(to-l, #29acff, green.200)"
          bgClip={"text"}
          marginBottom={"15px"}
          fontSize= {{ base: "22px", lg: "35px" }}
         
          fontWeight={"bold"}
        >
         <Box>I am {text}<Cursor cursorColor="Black"/></Box>
          
        </Text>
       <Box> <Text className="text" fontSize={"20px"} color={"blackAlpha.900"}>
          I believe that hard work beats talent. I am a full stack web developer
          and I love how collaboration and knowledge sharing happened through
          open-source.
        </Text></Box>
      </Box>
    </SimpleGrid>
  );
};

export default Hero;
