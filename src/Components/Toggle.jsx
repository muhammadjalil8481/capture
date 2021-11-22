import React, { useState } from "react";
import { AnimateSharedLayout } from "framer-motion";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div layout className="question">
      <QuesContainer onClick={() => setToggle(!toggle)}>
        <motion.h4 layout="position">{title}</motion.h4>
        <FontAwesomeIcon icon={toggle ? faAngleDown : faAngleUp} size="2x" />
      </QuesContainer>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {toggle && children}
      </motion.div>
      <div className="faq-line"></div>
    </motion.div>
  );
};

const QuesContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export default Toggle;
