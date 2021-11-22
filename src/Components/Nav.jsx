import React from "react";
import { StyledNav } from "../Styles";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { motion } from "framer-motion";
const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <h1>
        <Link to="/capture">Capture</Link>
      </h1>
      <ul>
        <li>
          <Link to="/capture">About Us</Link>
          <motion.div
            className="line"
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/capture" ? "100%" : "0%" }}
            transition={{ duration: 0.75 }}
          ></motion.div>
        </li>
        <li>
          <Link to="/capture/work">Our Work</Link>
          <motion.div
            className="line"
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/capture/work" ? "100%" : "0%" }}
            transition={{ duration: 0.75 }}
          ></motion.div>
        </li>
        <li>
          <Link to="/capture/contact">Contact Us</Link>
          <motion.div
            className="line"
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/capture/contact" ? "100%" : "0%" }}
            transition={{ duration: 0.75 }}
          ></motion.div>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Nav;
