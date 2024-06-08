import React from "react";
import { Button } from "./components/ui/button";
import { Routes , Route } from "react-router-dom";
import Home from "./scomponents/Home";
import About from "./scomponents/About";
import Contact from "./scomponents/Contact";
import Navbar from "./scomponents/Navbar";
import Footer from "./scomponents/Footer";
//import { NavigationMenu } from "./components/ui/navigation-menu";


function App() {
  return (
    <div className="w-full h-full">
      {/* <Navbar /> */}
      <Navbar/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
      </Routes>
      {/* <Footer/> */}
      <Footer/>
    </div>
  );
}

export default App;
