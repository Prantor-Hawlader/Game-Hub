import { SimpleGrid ,Box, Image} from "@chakra-ui/react"
import "./Project/Project.css"
import Project1 from "../assets/game_hub.png"
const Project = () => {
  return (
    <SimpleGrid marginTop={"100px"} id="project"   columns={{ sm: 1, md: 1, lg: 2, xl: 2,  }}   >
  <Box>

  <div className="card-container">
    <div className="card">
    <Image src={Project1}  height={"full"}/>
        
    </div> 
  </div>
  
  </Box>

  <Box>

  <div className="card-container">
    <div className="card">
      <h3>Hover me</h3><br/>
    

    </div> 
  </div>
  </Box>

   </SimpleGrid>
  )
}

export default Project