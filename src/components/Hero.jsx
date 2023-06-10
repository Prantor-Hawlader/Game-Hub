import { Box, SimpleGrid, Text } from "@chakra-ui/react"
import { useTypewriter ,Cursor} from "react-simple-typewriter"
import Design from "./Design"

const Hero = () => {


    const [text] =useTypewriter({
        words : [ "Prantor Hawlader","Full Stack React Developer" ],
        typeSpeed : 80,
        deleteSpeed : 90,
        loop : true
        
      }) 
    
  return (

<SimpleGrid id="home"  columns={{ sm: 1, md: 1, lg: 2, xl: 2,  }}   >

<Box marginTop={"100px"} marginLeft={"75px"}  >
  <Text fontWeight={"extrabold"} color={"whiteAlpha.900"} fontSize={"40px"}>Hello </Text>
<Text color={"green.200"}    fontSize={"35px"} fontWeight={"bold"}  >
I am {text}<Cursor/> 

</Text>
<Text fontSize={"20px"} fontWeight={"semibold"} color={"whiteAlpha.900"}>
I believe that hard work beats talent.
I am a full stack web developer and
I love how collaboration and knowledge
sharing happened through open-source.
</Text>
</Box>
{/* <Box height={"100wh"}><Design/> </Box> */}

</SimpleGrid>
  )
}

export default Hero

