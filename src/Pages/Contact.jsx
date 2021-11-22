import React from "react";
import { motion } from "framer-motion";
import { ContactStyled, Info, Frame1, Frame2, Frame3, Frame4 } from "../Styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import {
  pageAnimation,
  sliderAnimation,
  sliderContainer,
  lineAnimation,
  fadeAnimation,
} from "./animation";

const Contact = () => {
  return (
    <ContactStyled
      variants={pageAnimation}
      initial="initial"
      animate="final"
      exit="exit"
      style={{ background: "white" }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={sliderAnimation} />
        <Frame2 variants={sliderAnimation} />
        <Frame3 variants={sliderAnimation} />
        <Frame4 variants={sliderAnimation} />
      </motion.div>
      <motion.h2 variants={fadeAnimation}>Contact Us</motion.h2>
      <motion.div variants={lineAnimation} className="line"></motion.div>
      <div>
        <motion.p variants={fadeAnimation}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
          officiis animi error, nihil ex vel voluptatum ducimus neque mollitia
          possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Excepturi, suscipit.
        </motion.p>
        <Info variants={fadeAnimation}>
          <FontAwesomeIcon className="icon" icon={faMapMarkedAlt} />
          <h3>123 Street</h3>
        </Info>
        <Info variants={fadeAnimation}>
          <FontAwesomeIcon className="icon" icon={faPhone} />
          <h3>+92 301 9288010</h3>
        </Info>
        <Info className="icons" variants={fadeAnimation}>
          <a href="#">
            <FontAwesomeIcon className="icon social-icon" icon={faFacebook} />
          </a>
          <a href="#">
            <FontAwesomeIcon className="icon social-icon" icon={faLinkedin} />
          </a>
          <a href="#">
            <FontAwesomeIcon className="icon social-icon" icon={faGoogle} />
          </a>
        </Info>
      </div>
    </ContactStyled>
  );
};

export default Contact;
