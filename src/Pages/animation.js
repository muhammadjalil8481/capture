export const pageAnimation = {
  initial: { opacity: 0, y: 300 },
  final: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};
export const titleAnimation = {
  initial: { y: 200 },
  final: {
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};
export const fadeAnimation = {
  initial: { opacity: 0 },
  final: { opacity: 1, transition: { duration: 1.5 } },
};
export const btnAnimation = {
  initial: { x: -300 },
  final: {
    x: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 1 },
  },
};
export const imageAnimation = {
  initial: { scale: 1.5, opacity: 0 },
  final: {
    scale: 1,
    opacity: 1,
    transition: { duartion: 1, ease: "easeOut", delay: 1 },
  },
};
export const waveSvgAnimation = {
  initial: { pathLength: 0, pathOffset: 1, opacity: 1 },
  final: {
    pathLength: 1,
    pathOffset: 0,
    opacity: 0,
    transition: { duration: 2 },
  },
};
export const lineAnimation = {
  initial: { width: "0%" },
  final: { width: "100%", transition: { duration: 1 } },
};
export const sliderContainer = {
  initial: { opacity: 1 },
  final: {
    opacity: 1,
    transition: { staggerChildren: 0.15, ease: "easeOut" },
  },
};
export const sliderAnimation = {
  initial: { x: "-140%", skew: "45deg" },
  final: {
    x: "100%",
    skew: "0deg",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};
