import {
  Box,
  Flex,
  
  Text,
  Image,
  keyframes,
  Link,
} from "@chakra-ui/react";

import Prantor_Logo from "../assets/Logos.png";
import "./Styles/Star.css";

const spin = keyframes`  
0% {
  background-position-x: 100px;
  
} 
`;

const Navbar = () => {
  const spinAnimation = `${spin} infinite 1s linear`;
  const menus = [
    { id: 1, location: "#home", name: "Home" },
    { id: 2, location: "#project", name: "Project" },
    { id: 3, location: "#skill", name: "Skills" },
    { id: 4, location: "#contact", name: "Contact" },
  ];

  return (
    <Flex 
      as="header" position="fixed" w="100%"
      // direction={{base : "column", md : "row"}}
      borderRadius="lg"
      bgGradient="radial-gradient(ellipse at bottom, #0d1e31, #111)"
      overflow="hidden"
      alignItems="center"
      
      m={3}
      height={"4rem"}
      
    >
     
      <Box paddingTop="50px">
        <Link href={"https://prantor-portfolio.vercel.app/"}>
          <Image src={Prantor_Logo} boxSize={"330px"} />
        </Link>
      </Box>
            

      <Box display="flex" justifyContent="space-between" justifySelf="center" justifyItems="center">
        {menus.map((menu) => (
          <Link href={menu.location} key={menu.id}>
            <Text
              bgGradient="linear(to-l, #29acff, green.200)"
              bgClip={"text"}
              marginRight={5}
              fontWeight={"bold"}
              fontFamily={"monospace"}
              fontSize={"20px"}
              animation={spinAnimation}
            >
              {menu.name}
            </Text>
          </Link>
        ))}
      </Box>
    </Flex>
  );
};

export default Navbar;
