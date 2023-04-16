import React from "react";
import Navbar from "./component/Navbar"
import Home from "./component/Home"
import About from "./component/About"
import Projects from "./component/Projects/Projects"
import Contact from "./component/Contact"
import Footer from "./component/Footer"
import "./App.css"


const App = () => {
    return(
      <>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
      </ >
    )
}
export default App;