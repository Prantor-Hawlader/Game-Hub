
import { Box, Divider,Heading,AbsoluteCenter } from "@chakra-ui/react"

const Skill = () => {
  return (
    <Box marginTop={"10rem"} position='relative' padding='10'>
    <Divider />
    <AbsoluteCenter  bgGradient="linear(to-l, #29acff, green.200)" bgClip={"text"} px='4'>
      <Heading bgGradient="linear(to-l, #29acff, green.200)" bgClip={"text"} fontSize={"6xl"}
        fontFamily={"cursive"}
        fontWeight={"extrabold"} >
      Technologies
      </Heading>
    </AbsoluteCenter>
  </Box>
  )
}

export default Skill