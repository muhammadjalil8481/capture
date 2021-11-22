import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const UseScroll = () => {
  const [element, view] = useInView({ threshold: 0.5 });
  const control = useAnimation();
  view ? control.start("final") : control.start("initial");
  return [element, control];
};
