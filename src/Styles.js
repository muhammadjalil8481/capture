import styled from "styled-components";
import { motion } from "framer-motion";

// Nav bar styles
export const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  background-color: #282828;
  justify-content: space-between;
  padding: 1rem 10rem;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  h1 a {
    font-size: 2.5rem;
    font-family: "lobster", cursive;
    font-weight: lighter;
    letter-spacing: 1px;
  }
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    li {
      margin-top: 0.5rem;
      padding-left: 8rem;
      position: relative;
      a {
        font-size: 1.5rem;
        letter-spacing: 1px;
      }
      .line {
        /* position: absolute; */
        width: 0%;
        height: 0.3rem;
        background-color: #23d997;
        top: 0;
        left: 0;
        margin-top: 0.5rem;
      }
    }
  }
`;

// About Section Styles
export const Layout = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;
export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
  p {
    letter-spacing: 0.8px;
  }
`;
export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    /* width: 50rem; */
    height: 85vh;
    object-fit: cover;
  }
`;
export const Hide = styled.div`
  overflow: hidden;
`;
// Services Section Styles
export const Services = styled(Layout)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0 4rem 0;
  }
`;
export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const Card = styled.div`
  flex-basis: 25rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1.5rem;
      background-color: white;
      color: black;
      padding: 1rem;
      font-size: 1.5rem;
    }
  }
  p {
    font-size: 1.6rem;
  }
`;
// Faq Section Styles
export const Faq = styled(Layout)`
  flex-direction: column;
  align-items: flex-start;
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    width: 100%;
    height: 0.2rem;
    background: white;
    margin: 2rem 0;
  }
  .question {
    width: 100%;
    padding: 3rem 0;
    cursor: pointer;
    h4 {
      font-size: 2rem;
    }
    .answer {
      padding: 2rem 0;
      p {
        padding: 1rem 0;
      }
    }
  }
`;

// Our Work Page Styles

export const OurWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 7.5rem;
  h2 {
    padding: 1rem 0;
  }
`;
export const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background-color: #23d997;
    margin-bottom: 3rem;
  }
  .hide {
    overflow: hidden;
  }
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
  .img-racer {
    object-position: 20% 30%;
  }
  .img-goodtimes {
    object-position: 20% 100%;
  }
`;
export const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
export const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
export const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
export const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
// Movie Details Page Styles

export const Details = styled(motion.div)`
  /* background: white; */
`;
export const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    color: whitesmoke;
    top: 8%;
    left: 50%;
    transform: translate(-50%, -8%);
    /* padding-bottom: 20rem; */
  }
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;
export const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 3rem 10rem;
  align-items: center;
  /* justify-content: space-around; */
`;
export const Award = styled.div`
  padding: 5rem;
  /* flex-basis: 40%; */
  h3 {
    font-size: 2rem;
    letter-spacing: 0.5px;
  }
  .line {
    width: 100%;
    height: 0.5rem;
    background-color: #23d997;
    margin: 1rem 0;
  }
  p {
    padding: 2rem 0;
    color: #bfbfbf;
    font-size: 1.5rem;
    letter-spacing: 1px;
  }
`;
export const SecondaryImage = styled.div`
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

// Contact Section Styles
export const ContactStyled = styled(OurWork)`
  .line {
    height: 0.5rem;
    background-color: #23d997;
    margin-bottom: 3rem;
  }
`;
export const Info = styled(motion.div)`
  display: flex;
  align-items: center;

  h3 {
    color: black;
    font-weight: 600;
    font-size: 2rem;
    padding: 1rem;
  }
  .icon {
    margin-right: 2rem;
    font-size: 2.5rem;
  }
  .social-icon {
    font-size: 3rem;
  }
  a {
    margin-top: 1.5rem;
    color: black;
    :hover {
      color: #0000ff;
    }
  }
`;
