
import {  BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Project from './components/Project';
import Skill from './components/Skill';
import { Grid, GridItem } from '@chakra-ui/react';
import Contact from './components/Contact';
import PreLoader from './components/Preloader';

function App() {
  

  return (
    <div>
      <PreLoader/>
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



