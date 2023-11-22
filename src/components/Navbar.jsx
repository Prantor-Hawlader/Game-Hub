import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import {
  Box,
  Flex,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  HStack,
  Text,
  Image,
  keyframes,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import Prantor_Logo from "../assets/Logos.png";
const spin = keyframes`  
0% {
  background-position-x: 390px;
  
} 
`;
const Navbar = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setMobileNavOpen(false);
  };

  const spinAnimation = `${spin} infinite 1s linear`;
  const menus = [
    { id: 1,location : "#home", name: "Home" },
    { id: 2,location : "#project", name: "Project" },
    { id: 3,location : "#skill", name: "Skills" },
    { id: 4, location : "#contact",name: "Contact" },
  ];

  return (
    <HStack height={"4rem"} justify="space-between" margin={3}>
      <Box display={{ base: "block", md: "none" }}>
        <IconButton
          icon={<FiMenu />}
          variant="ghost"
          aria-label="Menu"
          cv
          color="white"
          onClick={toggleMobileNav}
        />
      </Box>

      <Link to={"#home"}>
        <Box>
        
          <Image src={Prantor_Logo} paddingTop="3rem" boxSize={"330px"} />
        </Box>
      </Link>
      <Flex
          
          justifyContent={"space-between"}
          display={{ base: "none", md: "flex" }}
        >
      {menus.map((menu) => (
       
          <Link to={menu.location} key={menu.id}>
            <Text
              bgGradient="linear(to-l, #29acff, green.200)"
              bgClip={"text"}
              marginRight={5}
              fontWeight={"bold"}
              fontFamily={"monospace"}
              fontSize={"20px"}
              _hover={{
                animation: spinAnimation,
                borderBottom: "5px solid #29acff",
              }}
            >
            
              {menu.name}
            </Text>
          </Link>
        
      ))}
</Flex>
      {/* Mobile Navigation Drawer */}
      <Drawer
        placement="left"
        onClose={closeMobileNav}
        isOpen={isMobileNavOpen}
      >
        <DrawerOverlay />
        <DrawerContent bg="#121212" color="white">
          <DrawerCloseButton color="white" />
          <DrawerBody>
            <Flex direction="column">
              {menus.map((menu) => (
                <Link key={menu.id} to={menu.location}>
                  <Text
                    bgGradient="linear(to-l, #29acff, green.200)"
                    bgClip={"text"}
                    paddingTop={"1rem"}
                    fontWeight={"hairline"}
                    fontFamily={"monospace"}
                    fontSize={"20px"}
                    _hover={{
                      borderBottom: "3px solid #29acff",
                      borderBottomRadius: "1px ",
                    }}
                  >
                    {" "}
                    {menu.name}{" "}
                  </Text>
                </Link>
              ))}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </HStack>
  );
};

export default Navbar;
