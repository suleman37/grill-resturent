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
        transition={{ duration: 0.5 }}
      >
        <div className="intro-section">
          <p id="main-head"><small>FLAVOURS FOR ROYALTY</small></p>
          <img src={Seperator} alt="Separator" id="seperator" width="100px" />
          <p id="main-2-head">We Offer Top Notch</p>
          <p>
            Experience exquisite flavors that tantalize your taste buds. Join us for breakfast, lunch, and dinner with a unique culinary twist.
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
              transition={{ duration: 2, delay: 0.1 }}
            >
              <div className="front">
                <img src={breakfast} alt="Breakfast" className="service-image" loading="lazy" />
                <h3>Breakfast</h3>
              </div>
              <div className="back">
                <h3>Breakfast Details</h3>
                <p>Start your day with our delicious breakfast options, crafted with fresh ingredients.</p>
                <p className="vm"><a href="#menu">View Menu</a></p>
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
              transition={{ duration: 2, delay: 0.2 }}
            >
              <div className="front">
                <img src={lunch} alt="Lunch" className="service-image" loading="lazy" />
                <h3>Lunch</h3>
              </div>
              <div className="back">
                <h3>Lunch Details</h3>
                <p>Enjoy a variety of lunch dishes made to satisfy your midday cravings.</p>
                <p className="vm"><a href="#menu">View Menu</a></p>
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
              transition={{ duration: 2, delay: 0.3 }}
            >
              <div className="front">
                <img src={dinner} alt="Dinner" className="service-image" loading="lazy" />
                <h3>Dinner</h3>
              </div>
              <div className="back">
                <h3>Dinner Details</h3>
                <p>Indulge in a delightful dinner experience with our signature dishes.</p>
                <p className="vm"><a href="#menu">View Menu</a></p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
