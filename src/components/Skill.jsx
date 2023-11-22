
import { Box, Divider,Text,AbsoluteCenter, SimpleGrid, Image,  } from "@chakra-ui/react"
import React_Logo from "../assets/react.png"
import Typescript_Logo from "../assets/typescript.png"
import Nodejs_Logo from "../assets/nodejs.png"
import Mongodb_Logo from "../assets/mongodb.png"
import Zustand_Logo from "../assets/zustand_logo.jpg"
import ReactQuery_Logo from "../assets/react-query.png"
import Expressjs_Logo from "../assets/express-js.png"
import NextJs_Logo from "../assets/nextjs_logo.png"
import LottieAnimation from "./Design"
import lottie from "./Styles/animate.json"
const Skill = () => {

  const gradientBorder = `
  border: 2px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(to right, #29acff, #48BB78);
`;
  return (
   <>
    <Box marginTop={"20rem"} position='relative' padding='10' id="skill">
     
    <Divider />

    <AbsoluteCenter>
      <Text bgGradient="linear(to-l, #29acff, green.200)" bgClip={"text"} fontSize={"6xl"}
        fontFamily={"cursive"}
        fontWeight={"extrabold"} >
      Technologies
      </Text>
      <Box width={"300px"} height={"270px"}><LottieAnimation animate={lottie}/></Box>
    </AbsoluteCenter>
  </Box>


<SimpleGrid marginTop={"7rem"}  columns={{ sm: 2, md: 2, lg: 4, xl: 4,  }} spacingY={10}  >



<Box data-aos="fade-down-right"  data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"  boxShadow={"dark-lg"} border={"4px"} css= {gradientBorder}>
  <Image  boxSize={"100px"} src={React_Logo}  />
   <Text className="text" textAlign={"center"}>React </Text>
  </Box>
<Box data-aos="fade-down-right"  data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"  boxShadow={"dark-lg"} border={"4px"} css= {gradientBorder}>
  <Image  boxSize={"100px"} src={Typescript_Logo}  />
   <Text className="text" textAlign={"center"}>TypeScript </Text>
  </Box>
<Box data-aos="fade-down-left"  data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"  boxShadow={"dark-lg"} border={"4px"} css= {gradientBorder}>
  <Image  boxSize={"100px"} src={NextJs_Logo}  />
   <Text className="text" textAlign={"center"}>NextJS </Text>
  </Box>
<Box data-aos="fade-down-left"  data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"  boxShadow={"dark-lg"} border={"4px"} css= {gradientBorder}>
  <Image  boxSize={"100px"} src={Nodejs_Logo}  />
   <Text className="text" textAlign={"center"}>NodeJS </Text>
  </Box>
<Box data-aos="fade-up-right"  data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"  boxShadow={"dark-lg"} border={"4px"} css= {gradientBorder}>
  <Image  boxSize={"100px"} src={Mongodb_Logo}  />
   <Text className="text" textAlign={"center"}>MongoDB </Text>
  </Box>
<Box data-aos="fade-up-right"  data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"  boxShadow={"dark-lg"} border={"4px"} css= {gradientBorder}>
  <Image  boxSize={"100px"} src={Zustand_Logo}  />
   <Text className="text" textAlign={"center"}>Zustand </Text>
  </Box>
<Box data-aos="fade-up-left"  data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"  boxShadow={"dark-lg"} border={"4px"} css= {gradientBorder}>
  <Image  boxSize={"100px"} src={ReactQuery_Logo}  />
   <Text className="text" textAlign={"center"}>ReactQuery </Text>
  </Box>
<Box data-aos="fade-up-left"  data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"  boxShadow={"dark-lg"} border={"4px"} css= {gradientBorder}>
  <Image  boxSize={"100px"} src={Expressjs_Logo}  />
   <Text className="text" textAlign={"center"}>ExpressJS </Text>
  </Box>


</SimpleGrid>


   
   </>
  )
}

export default Skill