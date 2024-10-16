import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/about";
import Story from "./Components/Story/story";
import Special from "./Components/Special/special";
import Menu from "./Components/Menu/menu";
import Choise from "./Components/Choise/choise";
import Contact from "./Components/Contact/contact";
import Loader from "./Components/Loader/loader"; 
import Footer from "./Components/Footer/footer"; 

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer); 
  }, []);

  if (loading) {
    return <Loader />; 
  }

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Story />
      <Special />
      <Menu />
      <Choise />
      <Contact />
      <Footer/>
    </>
  );
};

export default App;