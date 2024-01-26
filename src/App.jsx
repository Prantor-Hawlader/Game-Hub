import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Skill from "./components/Skill";
import { Grid, GridItem } from "@chakra-ui/react";
import Contact from "./components/Contact";
import PreLoader from "./components/Preloader";
import { useState, useEffect } from "react";

import Star from "./components/Star";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data) that takes some time.

    setTimeout(() => {
      setLoading(false); // Set loading to false when the operation is complete.
    }, 3500); // Simulating a 2-second loading delay
  }, []);

  return (
    <>
    <Star/>
      {loading ? (
        <PreLoader />
      ) : (
        <Grid bgGradient="radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)" templateAreas={`"nav nav" "main main"`}>
          <GridItem scrollBehavior={"smooth"} area={"nav"} width={"full"}>
          
            <Navbar />
          </GridItem>

          <GridItem
            width={"full"}
            scrollBehavior={"smooth"}
            area={"main"}
            paddingTop={"4rem"}
          >
           
            <Hero />
            <Project />
            <Skill />
            <Contact />
          </GridItem>
        </Grid>
      )}
    </>
  );
}

export default App;
