import {
  Container,
  Flex,
  Box,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Divider,
  AbsoluteCenter,
} from "@chakra-ui/react";
import { MdFacebook, MdOutlineEmail } from "react-icons/md";
import { BsGithub, BsLinkedin, BsPerson } from "react-icons/bs";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_dcnq78i",
        "template_o0p3bph",
        ref.current,
        "ARxoRUFtF4_hYyAKZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <>
      <Box position="relative" padding="10" marginTop={"6rem"} id="contact">
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
            Contact Me{" "}
          </Text>
        </AbsoluteCenter>
      </Box>
      <Container
        maxW="full"
        mt={0}
        centerContent
        overflow="hidden"
        marginTop={"5rem"}
      >
        <Flex align={"center"} justifyContent={"center"}>
          <Box
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}
          >
            <Box textAlign={{ base: "center" }}>
              <WrapItem>
                <Box>
                  <HStack
                    mt={{ lg: 20, md: 10 }}
                    spacing={5}
                    mx={{ base: "auto" }}
                    alignItems="flex-start"
                  >
                    <IconButton
                      as={"a"}
                      href="https://www.facebook.com/prantor.azijul/"
                      target="_blank"
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#29acff" }}
                      icon={<MdFacebook size="28px" />}
                    />
                    <IconButton
                      as={"a"}
                      href="https://github.com/Prantor-Hawlader"
                      target="_blank"
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#29acff" }}
                      icon={<BsGithub size="28px" />}
                    />
                    <IconButton
                      as={"a"}
                      href="https://www.linkedin.com/in/prantor-hawlader-04937b1b3/"
                      target="_blank"
                      aria-label="linkedin"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#29acff" }}
                      icon={<BsLinkedin size="28px" />}
                    />
                  </HStack>
                </Box>
              </WrapItem>

              <Box
                css={{
                  backgroundImage:
                    "linear-gradient(45deg, #29acff, rgb(100, 209, 123))",
                  backgroundOrigin: "border-box",
                  backgroundClip: "content-box, border-box",
                }}
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                borderRadius="lg"
                py={10}
              >
                <Box m={8} color="#0B0E3F">
                  <VStack spacing={5}>
                    <form ref={ref} onSubmit={handleSubmit}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="green.200">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson />}
                          />
                          <Input type="text" size="md" name="name" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="green.200">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail />}
                          />
                          <Input type="text" size="md" name="email" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          name="message"
                          borderColor="green.200"
                          onClick={{ borderColor: "red" }}
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        {success ? (
                          <Button
                            marginTop={"10px"}
                            type="submit"
                            bg={"#121212"}
                            color={"whiteAlpha.900"}
                            _hover={{
                              bgGradient: "linear(to-l, #29acff, green.200)",
                              color: "#121212",
                            }}
                          >
                            Successfully message has sent
                          </Button>
                        ) : (
                          <Button
                            marginTop={"10px"}
                            type="submit"
                            bg={"#121212"}
                            color={"whiteAlpha.900"}
                            _hover={{
                              bgGradient: "linear(to-l, #29acff, green.200)",
                              color: "#121212",
                            }}
                          >
                            Send Message
                          </Button>
                        )}
                      </FormControl>
                    </form>
                  </VStack>
                </Box>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Container>
      <Text className="text" pt={3} fontSize={"md"} textAlign={"center"}>
        © 2023 All rights reserved to Prantor Hawlader.
      </Text>
    </>
  );
};

export default Contact;
