import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Updated import
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/about";
import Story from "./Components/Story/story";
import Special from "./Components/Special/special";
import Menu from "./Components/Menu/menu";
import Fullmenu from "./Components/Menu/fullmenu";
import SingleDish from "./Components/Menu/singledish"; // Import SingleDish component
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
    <Router>
      <Navbar />
      <Routes> {/* Changed from Switch to Routes */}
        <Route path="/menu" element={<Fullmenu />} /> {/* Updated Route syntax */}
        <Route path="/menu/:id" element={<SingleDish />} /> {/* Add SingleDish route */}
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Story />
            <Special />
            <Menu />
            <Choise />
            <Contact />
          </>
        } />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;