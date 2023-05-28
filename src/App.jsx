
import {  BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Project from './components/Project';
import Skill from './components/Skill';
function App() {
  

  return (
    <>
   <BrowserRouter>
   
   <Navbar/>
   <Home/>
   <Project/>
   <Skill/>
   
   </BrowserRouter>

    
    </>
  )
}

export default App
