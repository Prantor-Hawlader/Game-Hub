import Prantor_Logo from "../assets/Logos.png";
import {
  Box,
  Flex,
  HStack,
  Text,
  Link,
  IconButton,
  keyframes,
  Image,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const spin = keyframes`
 0% {
   background-position-x: 100px;
  
 }`;

export default function Navbar() {
  const spinAnimation = `${spin} infinite 1s linear`;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const menus = [
    { id: 1, location: "#home", name: "Home" },
    { id: 2, location: "#project", name: "Project" },
    { id: 3, location: "#skill", name: "Skills" },
    { id: 4, location: "#contact", name: "Contact" },
  ];

  return (
    <>
      <Box
        borderRadius="lg"
        marginX={25}
        marginY={5}
        bgGradient="radial-gradient(ellipse at bottom, #0d1e31, #111)"
        px={4}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={300} alignItems={"center"}>
            <Box>
              <Image boxSize="330px" paddingTop={10} src={Prantor_Logo} />
            </Box>
            <HStack
              as={"nav"}
              spacing={5}
              display={{ base: "none", md: "flex" }}
            >
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
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={3}>
              {menus.map((menu) => (
                <Link href={menu.location} key={menu.id}>
                  <Text
                    bgGradient="linear(to-l, #29acff, green.200)"
                    bgClip={"text"}
                    fontWeight={"bold"}
                    fontFamily={"monospace"}
                    fontSize={"20px"}
                    animation={spinAnimation}
                  >
                    {menu.name}
                  </Text>
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
