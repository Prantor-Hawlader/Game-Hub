import { SimpleGrid ,AbsoluteCenter,Box,Text,Button, Image, Heading, Divider} from "@chakra-ui/react"
import "./Styles/Project.css"
import Web_Template from "../assets/web-template.png"
import items from "./ProjectList"

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


  
  {items.map((item,index)=> (
<SimpleGrid  columns={{base : 1 ,sm: 1, md: 2, lg : 2, xl : 2}}   marginX={"5rem"} marginTop={"10rem"} 
       key={index}>
 {/* css={{
        "&:nth-child(2n + 1)": {
          flexDirection: "row-reverse",
        },
      }} */}
<Box marginBottom={"3rem"} >

<div className="card-container">
  <Box className="card" >
  <Image src={item.img}  height="full"  width={"full"}/>
      
  </Box> 
</div>

</Box>

<Box marginX={"4rem"}>
<Box  data-aos="fade-right"  data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" >
<Heading  bgGradient="linear(to-l, #29acff, green.200)" bgClip={"text"}>
{item.title}
</Heading>
<Text  className="text" color={"blackAlpha.900"} marginTop={"1.5rem"} fontWeight={"semibold"} fontSize={"20px"} >
{item.details}

</Text>
</Box>

<Button color={"blackAlpha.900"} data-aos="flip-down"  data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"  _hover={{bgGradient:"linear(to-l, #29acff, green.200)"}} as={"a"} target="_blank" marginTop={"2rem"} href={item.link} > Let&apos;s Visit </Button>

</Box>

   </SimpleGrid>
    
  ))}



</>
  )
}

export default Project