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
  <Text className="header" fontWeight={"extrabold"} color={"green.200"} fontSize={"40px"}>Hello </Text>
<Text className="gradient-text" color={"green.200"} marginBottom={"15px"}    fontSize={"35px"} fontWeight={"bold"}  >
I am {text}<Cursor/> 

</Text>
<Text className="text" fontSize={"20px"} color={"whiteAlpha.900"}>
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

