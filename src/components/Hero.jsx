import { Box, SimpleGrid, Text } from "@chakra-ui/react"
import { useTypewriter } from "react-simple-typewriter"
import Design from "./Design"

const Hero = () => {


    const [text] =useTypewriter({
        words : [ "Prantor Hawlader","Full Stack React Developer" ],
        typeSpeed : 50,
        deleteSpeed : 100,
        loop : true
        
      }) 
    
  return (



<SimpleGrid  columns={{ sm: 1, md: 1, lg: 2, xl: 2,  }}   >
<Box height={"100vh"} ><Design/> </Box>

<Box  paddingTop={"140px"}  >
  <Text fontWeight={"extrabold"} color={"whiteAlpha.900"} fontSize={"25px"}>Hello </Text>
<Text color={"green.200"}    fontSize={"25px"} fontWeight={"bold"}  >
I'm {text}

</Text>
<Text fontSize={"20px"} fontWeight={"semibold"} color={"whiteAlpha.900"}>
I believe that hard work beats talent.
I am a full stack web developer and
I love how collaboration and knowledge
sharing happened through open-source.
</Text>


</Box>
</SimpleGrid>
  )
}

export default Hero

