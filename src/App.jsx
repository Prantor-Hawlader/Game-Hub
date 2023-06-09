
import {  BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Project from './components/Project';
import Skill from './components/Skill';
import { Grid, GridItem } from '@chakra-ui/react';
import ParticlesBackground from "./components/ParticlesBackground"
import Contact from './components/Contact';

function App() {
  

  return (
    <div>
      <ParticlesBackground/>
   <BrowserRouter>

  <Grid templateAreas={`"nav nav" "main main"`} backgroundColor={"#121212"} width={"100%"} >

<GridItem area={"nav"} > <Navbar/>

 </GridItem>

<GridItem    area={"main"} paddingTop={"100px"}>


   <Hero/>

   <Project/>
   <Skill/> 
 <Contact/>
</GridItem>

  </Grid>
   
   </BrowserRouter>

    
    </div>
  )
}

export default App



