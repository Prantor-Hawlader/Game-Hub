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
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <PreLoader />
      ) : (
        <Grid
          bgGradient="radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)"
          templateAreas={`"nav nav" "main main"`}
        >
          <GridItem scrollBehavior={"smooth"} area={"nav"} width={"full"}>
            <Star />
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
            <Star />
            <Skill />
            <Contact />
            <Star />
          </GridItem>
        </Grid>
      )}
    </>
  );
}

export default App;
