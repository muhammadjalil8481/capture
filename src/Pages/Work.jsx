import React from "react";
import athlete from "../img/athlete-small.png";
import goodtimes from "../img/goodtimes-small.png";
import racer from "../img/theracer-small.png";
import { Link } from "react-router-dom";
import ScrollTop from "../Components/ScrollTop";
import { OurWork, Movie, Frame1, Frame2, Frame3, Frame4 } from "../Styles";
import { motion } from "framer-motion";
import {
  pageAnimation,
  fadeAnimation,
  titleAnimation,
  imageAnimation,
  lineAnimation,
  sliderAnimation,
  sliderContainer,
} from "./animation";

const Work = () => {
  return (
    <OurWork
      variants={pageAnimation}
      initial="initial"
      animate="final"
      exit="exit"
      style={{ backgroundColor: "#fff" }}
    >
      <ScrollTop />
      <motion.div variants={sliderContainer}>
        <Frame1 variants={sliderAnimation} />
        <Frame2 variants={sliderAnimation} />
        <Frame3 variants={sliderAnimation} />
        <Frame4 variants={sliderAnimation} />
      </motion.div>
      <Movie>
        <motion.h2 variants={fadeAnimation}>The Athlete</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <div className="hide">
            <motion.img
              variants={imageAnimation}
              src={athlete}
              className="img-athlete"
            />
          </div>
        </Link>
      </Movie>
      <Movie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <img src={racer} class="img-racer" />
        </Link>
      </Movie>
      <Movie>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link to="/work/good-times">
          <img src={goodtimes} class="img-goodtimes" />
        </Link>
      </Movie>
    </OurWork>
  );
};

export default Work;
