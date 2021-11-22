import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { MovieState } from "../movieState";
import { motion } from "framer-motion";
import { pageAnimation } from "./animation";
import { Details, Headline, Awards, Award, SecondaryImage } from "../Styles";
import ScrollTop from "../Components/ScrollTop";

const MovieDetails = () => {
  // console.log(useHistory());
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [currentMovie, setCurrentMovie] = useState(null);
  useEffect(() => {
    const movie = movies.filter((movie) => movie.url === url);
    setCurrentMovie(movie);
    console.log(movie);
  }, [movies, url]);

  return (
    <div>
      {currentMovie && (
        <Details
          variants={pageAnimation}
          initial="initial"
          animate="final"
          exit="exit"
        >
          <ScrollTop />
          <Headline>
            <h2>{currentMovie[0].title}</h2>
            <img src={currentMovie[0].mainImg} />
          </Headline>
          <Awards>
            {currentMovie[0].awards.map((award) => (
              <Award key={award.title}>
                <h3>{award.title}</h3>
                <div className="line"></div>
                <p>{award.description}</p>
              </Award>
            ))}
          </Awards>
          <SecondaryImage>
            <img src={currentMovie[0].secondaryImg} alt="" />
          </SecondaryImage>
        </Details>
      )}
    </div>
  );
};
export default MovieDetails;
