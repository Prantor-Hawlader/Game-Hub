import {
  Container,
  Flex,
  Box,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Divider,
  AbsoluteCenter
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md';
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';


const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <>
        
    
    
        
    <Box position='relative' padding='10' marginTop={"6rem"}>
  <Divider />
  <AbsoluteCenter  px='4'>
  <Text  fontSize={"6xl"}
        fontFamily={"cursive"}
        fontWeight={"extrabold"}
        paddingTop={"10px"}
        bgGradient="linear(to-l, #29acff, green.200)"
        bgClip={"text"}  textAlign={"center"} >Contact Me  </Text>
  </AbsoluteCenter>
</Box>
    <Container  maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box >
               
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={7} spacing={3} alignItems="flex-start">
                      <Text
                        
                        size="md"
                        height="48px"
                        width="200px"
                        color="#DCE2FF"
                       
                        leftIcon={<MdPhone size="20px" />}>
                        +8801799037182
                      </Text>
                      <Text

                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                      
                        leftIcon={<MdEmail  size="20px" />}>
                        prantor502@gmail.com
                      </Text>
                      <Text
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        
                        leftIcon={<MdLocationOn  size="20px" />}>
                        Dhaka, Bangladesh
                      </Text>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start">
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#29acff' }}
                      icon={<MdFacebook size="28px" />}
                    />
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#29acff' }}
                      icon={<BsGithub size="28px" />}
                    />
                    <IconButton
                      aria-label="discord"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#29acff' }}
                      icon={<BsDiscord size="28px" />}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                   <form onSubmit={handleSubmit}>
                   <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="green.200">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="green.200">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          
                          borderColor="green.200"
                          onClick={{borderColor: "red"}}                          
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          marginTop={"10px"}
                          type= "submit"
                           bg={"#121212"}
                           color={"whiteAlpha.900"}
                          _hover={{bgGradient:"linear(to-l, #29acff, green.200)",color:"#121212"} } >
                          Send Message
                        </Button>
                      </FormControl>


                   </form>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
    <Text className='text' pt={3} fontSize={'md'} textAlign={'center'}>
          © 2023 All rights reserved to Prantor Hawlader.
        </Text>
    
    </>

  );

}

export default Contact