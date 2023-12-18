// import { useState } from "react";
// import { HashLink as Link } from "react-router-hash-link";
// import {
//   Box,
//   Flex,
//   IconButton,
//   Drawer,
//   DrawerBody,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   HStack,
//   Text,
//   Image,
//   keyframes,
// } from "@chakra-ui/react";
// import { FiMenu } from "react-icons/fi";
// import Prantor_Logo from "../assets/Logos.png";
// const spin = keyframes`  
// 0% {
//   background-position-x: 390px;
  
// } 
// `;
import React from "react";
import {
  useColorModeValue,
  chakra,
  Flex,
  HStack,
  Button,
  Box,
  IconButton,
  VStack,
  CloseButton,
  useDisclosure,
  VisuallyHidden,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
// Assuming Logo is a component you have defined elsewhere
// import Logo from "../assets/Logos.png"; // Replace with the actual path to your Logo component


const Navbar = () => {
  
    const bg = useColorModeValue("white", "green.800");
    const mobileNav = useDisclosure();
    return (
      <React.Fragment>
        <chakra.header
          bg={bg}
          w="full"
          px={{
            base: 2,
            sm: 4,
          }}
          py={4}
          shadow="md"
        >
          <Flex alignItems="center" justifyContent="space-between" mx="auto">
            <Flex>
              <chakra.a
                href="/"
                title="Choc Home Page"
                display="flex"
                alignItems="center"
              >
                {/* <Logo /> */}
                <VisuallyHidden>Choc</VisuallyHidden>
              </chakra.a>
              <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
                Choc
              </chakra.h1>
            </Flex>
            <HStack display="flex" alignItems="center" spacing={1}>
              <HStack
                spacing={1}
                mr={1}
                color="brand.500"
                display={{
                  base: "none",
                  md: "inline-flex",
                }}
              >
                <Button variant="ghost">Features</Button>
                <Button variant="ghost">Pricing</Button>
                <Button variant="ghost">Blog</Button>
                <Button variant="ghost">Company</Button>
                <Button variant="ghost">Sign in</Button>
              </HStack>
              <Button colorScheme="brand" size="sm">
                Get Started
              </Button>
              <Box
                display={{
                  base: "inline-flex",
                  md: "none",
                }}
              >
                <IconButton
                  display={{
                    base: "flex",
                    md: "none",
                  }}
                  aria-label="Open menu"
                  fontSize="20px"
                  color="gray.800"
                  _dark={{
                    color: "inherit",
                  }}
                  variant="ghost"
                  icon={<AiOutlineMenu />}
                  onClick={mobileNav.onOpen}
                />
  
                <VStack
                  pos="absolute"
                  top={0}
                  left={0}
                  right={0}
                  display={mobileNav.isOpen ? "flex" : "none"}
                  flexDirection="column"
                  p={2}
                  pb={4}
                  m={2}
                  bg={bg}
                  spacing={3}
                  rounded="sm"
                  shadow="sm"
                >
                  <CloseButton
                    aria-label="Close menu"
                    onClick={mobileNav.onClose}
                  />
  
                  <Button w="full" variant="ghost">
                    Features
                  </Button>
                  <Button w="full" variant="ghost">
                    Pricing
                  </Button>
                  <Button w="full" variant="ghost">
                    Blog
                  </Button>
                  <Button w="full" variant="ghost">
                    Company
                  </Button>
                  <Button w="full" variant="ghost">
                    Sign in
                  </Button>
                </VStack>
              </Box>
            </HStack>
          </Flex>
        </chakra.header>
      </React.Fragment>
    );
 

 
//   const [isMobileNavOpen, setMobileNavOpen] = useState(false);

//   const toggleMobileNav = () => {
//     setMobileNavOpen(!isMobileNavOpen);
//   };

//   const closeMobileNav = () => {
//     setMobileNavOpen(false);
//   };

//   const spinAnimation = `${spin} infinite 1s linear`;
//   const menus = [
//     { id: 1,location : "#home", name: "Home" },
//     { id: 2,location : "#project", name: "Project" },
//     { id: 3,location : "#skill", name: "Skills" },
//     { id: 4, location : "#contact",name: "Contact" },
//   ];

//   return (
//     <HStack height={"4rem"} justify="space-between" margin={3}>
//       <Box display={{ base: "block", md: "none" }}>
//         <IconButton
//           icon={<FiMenu />}
//           variant="ghost"
//           aria-label="Menu"
//           cv
//           color="white"
//           onClick={toggleMobileNav}
//         />
//       </Box>

//       <Link to={"#home"}>
//         <Box>
        
//           <Image src={Prantor_Logo} paddingTop="3rem" boxSize={"330px"} />
//         </Box>
//       </Link>
//       <Flex
          
//           justifyContent={"space-between"}
//           display={{ base: "none", md: "flex" }}
//         >
//       {menus.map((menu) => (
       
//           <Link to={menu.location} key={menu.id}>
//             <Text
//               bgGradient="linear(to-l, #29acff, green.200)"
//               bgClip={"text"}
//               marginRight={5}
//               fontWeight={"bold"}
//               fontFamily={"monospace"}
//               fontSize={"20px"}
//               _hover={{
//                 animation: spinAnimation,
//                 borderBottom: "5px solid #29acff",
//               }}
//             >
            
//               {menu.name}
//             </Text>
//           </Link>
        
//       ))}
// </Flex>
//       {/* Mobile Navigation Drawer */}
//       <Drawer
//         placement="left"
//         onClose={closeMobileNav}
//         isOpen={isMobileNavOpen}
//       >
//         <DrawerOverlay />
//         <DrawerContent bg="#121212" color="white">
//           <DrawerCloseButton color="white" />
//           <DrawerBody>
//             <Flex direction="column">
//               {menus.map((menu) => (
//                 <Link key={menu.id} to={menu.location}>
//                   <Text
//                     bgGradient="linear(to-l, #29acff, green.200)"
//                     bgClip={"text"}
//                     paddingTop={"1rem"}
//                     fontWeight={"hairline"}
//                     fontFamily={"monospace"}
//                     fontSize={"20px"}
//                     _hover={{
//                       borderBottom: "3px solid #29acff",
//                       borderBottomRadius: "1px ",
//                     }}
//                   >
//                     {" "}
//                     {menu.name}{" "}
//                   </Text>
//                 </Link>
//               ))}
//             </Flex>
//           </DrawerBody>
//         </DrawerContent>
//       </Drawer>
//     </HStack>

};

export default Navbar;
