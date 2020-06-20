import React from "react";
import PropTypes from "prop-types";

import { AppearancesWrapper, AppearancesList } from "./styles";
import AppearancesItem from "components/MovieAppearances/AppearancasItem";
import { MovieType } from "utils/types";

const Appearances = (props) => {
  const { movies, character } = props;

  return (
    <AppearancesWrapper>
      <span> Movie Appearances</span>
      <AppearancesList>
        {movies.map((movie, index) => (
          <AppearancesItem
            movie={movie}
            isEven={index % 2 === 0}
            key={character + "-" + movie.title}
          />
        ))}
      </AppearancesList>
    </AppearancesWrapper>
  );
};

Appearances.propTypes = {
  character: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(MovieType.isRequired),
};

export default Appearances;
