import React from "react";
import { Faq } from "../Styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How do I start ?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, libero.
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule ">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, libero.
            </p>
          </div>
        </Toggle>
        <Toggle title="Different payment methods ">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, libero.
            </p>
          </div>
        </Toggle>
        <Toggle title="What products do you offer ?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, libero.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

export default FaqSection;
