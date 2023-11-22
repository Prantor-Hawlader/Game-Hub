
import {  BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Project from './components/Project';
import Skill from './components/Skill';
import { Grid, GridItem } from '@chakra-ui/react';
import Contact from './components/Contact';
import PreLoader from './components/Preloader';
import  { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data) that takes some time.
    // Replace this with your actual initialization logic.
    setTimeout(() => {
      setLoading(false); // Set loading to false when the operation is complete.
    }, 3500); // Simulating a 2-second loading delay
  }, []);

  return (
   
     
   <BrowserRouter>
   {loading ?  <PreLoader/> :  <Grid  templateAreas={`"nav nav" "main main"`} backgroundColor={"#121212"}  >

<GridItem  area={"nav"} width={"100%"}> <Navbar/>

 </GridItem>

<GridItem scrollBehavior={"smooth"}   area={"main"} paddingTop={"4rem"} width={"100%"} mx={"auto"}>


   <Hero/>

   <Project/>
   <Skill/> 
 <Contact/>
</GridItem>

  </Grid>}
  
 
   
   </BrowserRouter>

    
   
  )
}

export default App



