import React from "react";
import AboutSection from "../Components/AboutSection";
import FaqSection from "../Components/FaqSection";
import ServicesSection from "../Components/ServicesSection";
import { motion } from "framer-motion";
import { pageAnimation } from "./animation";
import ScrollTop from "../Components/ScrollTop";

const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="initial"
      animate="final"
      exit="exit"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
      <ScrollTop />
    </motion.div>
  );
};
export default AboutUs;
