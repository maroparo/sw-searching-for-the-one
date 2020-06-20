import React, { useState } from "react";
import PropTypes from "prop-types";

import { AppearancesItem, MovieInfo } from "./styles";
import MovieCrawl from "components/MovieAppearances/MovieCrawl";
import Collapsible from "components/styled/Collapsible";
import PremieredIcon from "assets/icons/premiered-icon.png";
import moment from "moment";

const AppearancesItemComponent = (props) => {
  const { isEven, movie } = props;
  const [expanded, setExpanded] = useState(false);
  const movieInfo = (movie) => {
    return (
      <MovieInfo>
        <span>{movie.title}</span>
        <span>
          <img src={PremieredIcon} alt="Release Date" title="Release Date" />
          {moment(movie.releaseDate).format("MMMM Do YYYY")}
        </span>
      </MovieInfo>
    );
  };
  return (
    <AppearancesItem isEven={isEven}>
      <Collapsible
        content={movieInfo(movie)}
        displayArrow={false}
        setExpandedCallback={setExpanded}
      >
        <MovieCrawl movie={movie} expanded={expanded} />
      </Collapsible>
    </AppearancesItem>
  );
};

AppearancesItemComponent.propTypes = {
  isEven: PropTypes.bool,
};

export default AppearancesItemComponent;
