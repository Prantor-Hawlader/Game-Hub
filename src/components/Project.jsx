import { SimpleGrid ,AbsoluteCenter,Box,Text,Button, Image, Heading, Divider} from "@chakra-ui/react"
import "./Styles/Project.css"
import Project1 from "../assets/game_hub.png"
import Web_Template from "../assets/web-template.png"

const Project = () => {
  return (
<>
<Box position='relative' padding='10' marginTop={"15rem"} id="project">
  <Divider />
  <AbsoluteCenter  px='4'>
  <Text  fontSize={"6xl"}
        fontFamily={"cursive"}
        fontWeight={"extrabold"}
        paddingTop={"10px"}
        bgGradient="linear(to-l, #29acff, green.200)"
        bgClip={"text"}  textAlign={"center"} >My Projects  </Text>
        <Image src={Web_Template} boxSize={"200px"} />
  </AbsoluteCenter>
</Box>


<SimpleGrid marginX={"5rem"} marginTop={"12rem"}  columns={{ sm: 1, md: 1, lg: 2, xl: 2,  }}   >
  <Box marginBottom={"5rem"}   >

  <div className="card-container">
    <Box className="card" >
    <Image src={Project1}  height="full"/>
        
    </Box> 
  </div>
  
  </Box>

<Box>

<Heading bgGradient="linear(to-l, #29acff, green.200)" bgClip={"text"}>
  Game Hub
</Heading>
<Text className="text" marginTop={"1.5rem"} fontSize={"20px"} >
This is a fun project where different genres of games have been sorted.I built this website using React,Typescript,React Query and Zustand for state management.
  
</Text>
<Button _hover={{bgGradient:"linear(to-l, #29acff, green.200)"}} as={"a"} target="_blank" marginTop={"2rem"} href="https://prantor-gamer-world.vercel.app/" > Let&apos;s Visit </Button>

</Box>

   </SimpleGrid>


</>
  )
}

export default Project