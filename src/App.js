import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/about";
import Story from "./Components/Story/story";
import Special from "./Components/Special/special";
import Menu from "./Components/Menu/menu";
import Fullmenu from "./Components/Menu/fullmenu";
import SingleDish from "./Components/Menu/singledish"; 
import Choise from "./Components/Choise/choise";
import Newsletter from "./Components/NewsLetter/newsletter";
import Loader from "./Components/Loader/loader"; 
import Footer from "./Components/Footer/footer"; 
import Contact from "./Components/Contact/contact";
import Checkout from "./Components/checkout";

const stripePromise = loadStripe("pk_test_51QWcQnIo1YrH9OGQls99RmFFyGLJyhjoaIpXbhw8GWwyYDhkJsB30wAy0dYVSLp3xZMecFMYjrUbgl18eFHsbMyJ00PuvmbW4C");

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
      <Routes> 
        <Route path="/menu" element={<Fullmenu />} /> 
        <Route path="/menu/:id" element={<SingleDish />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout/:id" element={
          <Elements stripe={stripePromise}>
            <Checkout />
          </Elements>
        } />
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Story />
            <Special />
            <Menu />
            <Choise />
            <Newsletter />
          </>
        } />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;