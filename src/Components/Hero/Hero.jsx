import React from "react";
import Seperator from "../../images/separator.svg";
import { motion } from "framer-motion";
import "./Hero.css";

const fontFamily = "'Roboto', sans-serif"; // Define the font family

const Hero = () => {
  return (
     <>
      <div className="container-fluid bg" style={{ fontFamily: fontFamily }}>
        <div className="row">
          <div className="col">
            <motion.div animate={{ scale: 1 }} initial={{ scale: 0 }}>
              <p id="main-head" style={{ fontFamily: fontFamily }}>
                <small>DELIGHTFUL EXPERIENCE</small>
              </p>
              <img src={Seperator} alt="" id="seperator" width="100px" />
              <p id="main-2-head" style={{ fontFamily: fontFamily }}>
                <b>
                Flavours Inspired by
                <br />
                the Seasons
                </b>
              </p>
              <p style={{ fontFamily: fontFamily }}>Come with the Family & feel the joy of mouthwatering food</p>
              <a href="#menu">
                <button type="button" id="btn2" className="" style={{ fontFamily: fontFamily }}>
                  <small>View our Menu</small>
                </button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;