import  { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
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
} from '@chakra-ui/react';
import {FiMenu} from "react-icons/fi"
import Prantor_Logo from "../assets/Logos.png"
const Navbar = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setMobileNavOpen(false);
  };

  return (
    <HStack  pos="fixed"
    top={0}
    left={0}
    right={0} zIndex="sticky"
     height={"100px"} width="100%" justify="space-between" padding={3} >
   
        <Box display={{ base: 'block', md: 'none'}}>
          <IconButton
            icon={<FiMenu />}
            variant="ghost"
            aria-label="Menu"
            color="white"
            onClick={toggleMobileNav}
            
          />
        </Box>

        


<Link to={"/"}> 

<Image src={Prantor_Logo} boxSize={"300px"} paddingTop={"40px"} />

 </Link>
        <Flex  justifyContent={"space-between"} display={{ base: 'none', md: 'flex' }}>
          <Link
            
            to="#home"
           smooth
            
          >
            <Text color="green.200" marginRight={5} fontWeight={"bold"} fontFamily={"monospace"}
            fontSize={"20px"} _hover={{borderBottom: "3px solid #29acff", borderBottomRadius:"1px"}}
            
            > &lt;Home/&gt; </Text>
          </Link>

          <Link
            
            to="#project"
           smooth
            
            
          >
                 <Text color="green.200" marginRight={5} fontWeight={"bold"} fontFamily={"monospace"}
            fontSize={"20px"} _hover={{borderBottom: "3px solid #29acff", borderBottomRadius:"1px"}}
            
            >&lt;Project/&gt;</Text>
          </Link>

          <Link
            
            to="#skill"
            smooth
            
            
          >
             <Text color="green.200" marginRight={5} fontWeight={"bold"} fontFamily={"monospace"}
            fontSize={"20px"} _hover={{borderBottom: "3px solid #29acff", borderBottomRadius:"1px"}}
            
            >&lt;Skill/&gt;</Text>
          </Link>

 
          <Link
            
            to="#contact"

            
          >        <Text color="green.200" marginRight={5} fontWeight={"bold"} fontFamily={"monospace"}
          fontSize={"20px"} _hover={{borderBottom: "3px solid #29acff", borderBottomRadius:"1px"}}
          
          >&lt;Contact/&gt;</Text>
          </Link>
        </Flex>

      {/* Mobile Navigation Drawer */}
      <Drawer placement="left" onClose={closeMobileNav} isOpen={isMobileNavOpen}>
        <DrawerOverlay />
        <DrawerContent bg="#121212" color="white">
          <DrawerCloseButton color="white" />
          <DrawerBody>  
            <Flex direction="column">
              <Link
                
                to="/home"
                colorScheme="green"
                variant="ghost"
                _hover={{ borderBottom: '1px solid white' }}
                borderColor="white"
                marginBottom={2}
              >
                Home
              </Link>

              <Link
                
                to="/projects"
                colorScheme="green"
                variant="ghost"
                _hover={{ borderBottom: '1px solid white' }}
                borderColor="white"
                marginBottom={2}
              >
                Projects
              </Link>

              <Link
                
                to="/skills"
                colorScheme="green"
                variant="ghost"
                _hover={{ borderBottom: '1px solid white' }}
                borderColor="white"
                marginBottom={2}
              >
                Skills
              </Link>

              

              <Link
                
                to="/contact"
                colorScheme="green"
                variant="ghost"
                _hover={{ borderBottom: '1px solid white' }}
                borderColor="white"
                marginBottom={2}
              >
                Contact
              </Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </HStack>
  );
};

export default Navbar;
