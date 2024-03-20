import {
  SimpleGrid,
  AbsoluteCenter,
  Box,
  Text,
  Button,
  Image,
  Heading,
  Divider,
} from "@chakra-ui/react";
import "./Styles/Project.css";
import Web_Template from "../assets/web-template.png";
import items from "./ProjectList";

const Project = () => {
  return (
    <>
      <Box position="relative" padding="10" marginTop={"15rem"} id="project">
        <Divider />
        <AbsoluteCenter px="4">
          <Text
            fontSize={"6xl"}
            fontFamily={"cursive"}
            fontWeight={"extrabold"}
            paddingTop={"10px"}
            bgGradient="linear(to-l, #29acff, green.200)"
            bgClip={"text"}
            textAlign={"center"}
          >
            My Projects{" "}
          </Text>
          <Image src={Web_Template} boxSize={"200px"} />
        </AbsoluteCenter>
      </Box>

      {items.map((item, index) => (
        <SimpleGrid
          width={"full"}
          columns={{ base: 1, sm: 1, md: 2, lg: 2, xl: 2 }}
          paddingX={"3rem"}
          marginTop={"12rem"}
          key={index}
        >
          {/* css={{
        "&:nth-child(2n + 1)": {
          flexDirection: "row-reverse",
        },
      }} */}

          <Box className="card-container" marginBottom={"2rem"}>
            <Box className="card">
              <Image src={item.img} height="full" width={"full"} />
            </Box>
          </Box>

          <Box>
            <Box
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <Heading
                textAlign={{ base: "center" }}
                bgGradient="linear(to-l, #29acff, green.200)"
                bgClip={"text"}
              >
                {item.title}
              </Heading>
              <Text
                textAlign={{ base: "center" }}
                className="text"
                color={"whiteAlpha.900"}
                marginTop={"1.5rem"}
                fontWeight={"semibold"}
                fontSize={"20px"}
              >
                {item.details}
              </Text>
            </Box>

            <Box display={"block"} textAlign={{ base: "center" }}>
              <Button
                color={"whiteAlpha.900"}
                _hover={{ bgGradient: "linear(to-l, #29acff, green.200)" }}
                as={"a"}
                target="_blank"
                marginTop={"2rem"}
                mr={2}
                href={item.link}
                backgroundColor="black"
              >
                Let&apos;s Visit
              </Button>
              <Button
                color={"green.200"}
                _hover={{ color: "green.400" }}
                as={"a"}
                target="_blank"
                marginTop={"2rem"}
                href={item.sourceCode}
                backgroundColor="black"
              >
                Source Code
              </Button>
            </Box>
          </Box>
        </SimpleGrid>
      ))}
    </>
  );
};

export default Project;
