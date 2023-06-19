
import { Box, Divider,Text,AbsoluteCenter, SimpleGrid, Image,  } from "@chakra-ui/react"
import React_Logo from "../assets/react.png"
import Typescript_Logo from "../assets/typescript.png"
import Nodejs_Logo from "../assets/nodejs.png"
import Mongodb_Logo from "../assets/mongodb.png"
import Zustand_Logo from "../assets/zustand_logo.jpg"
import ReactQuery_Logo from "../assets/react-query.png"
import Expressjs_Logo from "../assets/express-js.png"
import ChakraUI_Logo from "../assets/chakraui.png"
const Skill = () => {
  const skills = [

      {id : 1, src :React_Logo, name : "React"  },
      {id : 2, src :Typescript_Logo, name : "TypeScript"  },
      {id : 3, src :Nodejs_Logo, name : "Node JS"  },
      {id : 4, src :Mongodb_Logo, name : "MongoDB"  },
      {id : 5, src :Zustand_Logo, name : "Zustand"  },
      {id : 6, src :ReactQuery_Logo, name : "React Query"  },
      {id : 7, src :Expressjs_Logo, name : "Express JS"  },
      {id : 8, src :ChakraUI_Logo, name : "Chakra UI"  },


  ]
  const gradientBorder = `
  border: 2px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(to right, #29acff, #48BB78);
`;
  return (
   <>
    <Box marginTop={"10rem"} position='relative' padding='10'>
    <Divider />

    <AbsoluteCenter>
      <Text bgGradient="linear(to-l, #29acff, green.200)" bgClip={"text"} fontSize={"6xl"}
        fontFamily={"cursive"}
        fontWeight={"extrabold"} >
      Technologies
      </Text>

    </AbsoluteCenter>
  </Box>


<SimpleGrid marginTop={"5rem"}  columns={{ sm: 2, md: 2, lg: 4, xl: 4,  }} spacingY={10}  >
{
 skills.map((skill) => (


<Box key={skill.id} boxShadow={"dark-lg"} border={"4px"} css= {gradientBorder}>
  <Image  boxSize={"100px"} src={skill.src}  />
   <Text className="text" textAlign={"center"}>{skill.name} </Text>
  </Box>




) )

}
</SimpleGrid>


   
   </>
  )
}

export default Skill