
import { Box, Divider,Text,AbsoluteCenter } from "@chakra-ui/react"

const Skill = () => {
  return (
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
  )
}

export default Skill