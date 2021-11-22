import React from "react";
import { motion } from "framer-motion";
import home1 from "../img/home1.png";
import { Layout, Description, Image, Hide } from "../Styles";
import {
  titleAnimation,
  fadeAnimation,
  imageAnimation,
  btnAnimation,
} from "../Pages/animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <Layout>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnimation}>We Want To Make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              Your <span>Dreams</span> Come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>True</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fadeAnimation}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills
        </motion.p>
        <motion.button
          variants={btnAnimation}
          initial="initial"
          animate="final"
        >
          Contact Us
        </motion.button>
      </Description>
      <Image>
        <motion.img
          src={home1}
          alt="Man with camera"
          variants={imageAnimation}
        />
      </Image>
      <Wave />
    </Layout>
  );
};

// Styled Components

export default AboutSection;
