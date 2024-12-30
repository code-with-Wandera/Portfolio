//We shall start by importing the library which facilitates routing in the browser
import {BrowserRouter,Routes, Route} from "react-router-dom";

import './App.css'
//importing functions from .jsx file
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Project from "./pages/Projects";

//creating a function 
function App(){

  return(
   <BrowserRouter>
   <Routes>
    <Route path = "/" element = {<Home />} />
    <Route path = "About" element = {<About />} />
    <Route path = "Services" element = {<Services />} />
    <Route path = "Project" element = {<Project />} />
    <Route path = "Contact" element = {<Contact />} />

   </Routes>
   </BrowserRouter>
   
  )

}

export default App
