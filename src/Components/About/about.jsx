import React from 'react'; 
import "./about.css";
import Seperator from "../../images/separator.svg";
import breakfast from "../../images/service-1.jpg";
import lunch from "../../images/service-2.jpg";
import dinner from "../../images/service-3.jpg";
import { motion } from "framer-motion";

const About = () => {
  // Define the animation variants
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: -20 }, // Move from above
    visible: { opacity: 1, scale: 1, y: 0 },     // Move to original position
  };

  const introVariants = {
    hidden: { opacity: 0, y: -20 },  // Start above
    visible: { opacity: 1, y: 0 },    // End at original position
  };

  return (
    <div className="about-container">
      <motion.div
        className="mini-menu services"
        initial="hidden"
        animate="visible"
        variants={introVariants}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="intro-section">
          <p id="main-head" className="stylish-text"><small>FLAVOURS FOR ROYALTY</small></p>
          <img src={Seperator} alt="Separator" id="seperator" width="100px" />
          <p id="main-2-head" className="stylish-text">We Offer Top Notch</p>
          <p className="intro-description">
            Dive into a world of exquisite flavors that dance on your palate. Join us for breakfast, lunch, and dinner, each with a unique culinary twist that promises to enchant.
          </p>
        </div>
        
        <div className="row service-cards">
          {/* Breakfast Card */}
          <div className="col-12 col-md-4 service-card">
            <motion.div
              className="card-content"
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              transition={{ duration: 2, delay: 0.1, ease: "easeInOut" }}
            >
              <div className="front stylish-card">
                <img src={breakfast} alt="Breakfast" className="service-image" loading="lazy" />
                <h3 className="card-title">Breakfast</h3>
              </div>
              <div className="back stylish-card">
                <h3 className="card-title">Breakfast Details</h3>
                <p>Awaken your senses with our delightful breakfast options, crafted with the freshest ingredients.</p>
                <p className="vm"><a href="#menu" className="view-menu-link">View Menu</a></p>
              </div>
            </motion.div>
          </div>

          {/* Lunch Card */}
          <div className="col-12 col-md-4 service-card">
            <motion.div
              className="card-content"
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              transition={{ duration: 2, delay: 0.2, ease: "easeInOut" }}
            >
              <div className="front stylish-card">
                <img src={lunch} alt="Lunch" className="service-image" loading="lazy" />
                <h3 className="card-title">Lunch</h3>
              </div>
              <div className="back stylish-card">
                <h3 className="card-title">Lunch Details</h3>
                <p>Savor a variety of lunch dishes designed to satisfy your midday cravings with style.</p>
                <p className="vm"><a href="#menu" className="view-menu-link">View Menu</a></p>
              </div>
            </motion.div>
          </div>
          
          {/* Dinner Card */}
          <div className="col-12 col-md-4 service-card">
            <motion.div
              className="card-content"
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
            >
              <div className="front stylish-card">
                <img src={dinner} alt="Dinner" className="service-image" loading="lazy" />
                <h3 className="card-title">Dinner</h3>
              </div>
              <div className="back stylish-card">
                <h3 className="card-title">Dinner Details</h3>
                <p>Indulge in a sumptuous dinner experience with our signature dishes that promise to delight.</p>
                <p className="vm"><a href="#menu" className="view-menu-link">View Menu</a></p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;