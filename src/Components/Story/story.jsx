import React from 'react';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component'; // Import LazyLoadImage
import Seperator from "../../images/separator.svg";
import Hotel from "../../images/about-banner.jpg";
import pic from "../../images/about-abs-image.jpg";
import "./story.css";

const Story = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="story-container" id='about'>
      <motion.div 
        className="story-content"
        initial="hidden" 
        animate="visible" 
        variants={variants}
        transition={{ duration: 0.5 , delay: 3 }}
      >
        <div className="story-header">
          <h2 className="story-title">Our Story</h2>
          <LazyLoadImage src={Seperator} alt="Separator" className="separator" />
          <h3 className="story-subtitle">Every Flavour Tells a Story</h3>
        </div>
        <div className="story-description">
          <p>
            Welcome to our journey! At our establishment, every flavour has a tale to tell. We strive to create unforgettable experiences with each dish. Our passion for culinary excellence drives us to bring you the best flavors from around the world.
          </p>
          <p className="contact-info">
            Book Through Call: <span className="contact-number">150 4928799</span>
          </p>
        </div>
      </motion.div>

      <motion.div 
        className="story-image"
        initial="hidden" 
        animate="visible" 
        variants={variants}
        transition={{ duration: 0.5, delay: 3 }}
      >
        <div className="image-wrapper">
          <LazyLoadImage src={Hotel} alt="Hotel" className="hotel-image" />
          <LazyLoadImage src={pic} alt="About" className="profile-image" />
        </div>
      </motion.div>
    </div>
  );
}

export default Story;
