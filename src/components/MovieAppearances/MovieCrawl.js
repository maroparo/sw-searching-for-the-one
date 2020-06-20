import React from "react";

import {
  MovieCrawl,
  CrawlFade,
  MovieCrawlContainer,
  CrawlTitle,
  CrawlWrapper,
} from "./styles";
import { MovieType } from "utils/types";

//While searching for fonts online, I found this cool Star Wars movie crawl effect.
//Credits go to : https://css-tricks.com/snippets/css/star-wars-crawl-text/

const MovieCrawlComponent = (props) => {
  const { movie, expanded } = props;
  return (
    expanded && (
      <MovieCrawl>
        <CrawlFade />
        <MovieCrawlContainer>
          <CrawlWrapper>
            <CrawlTitle>
              <p>Episode {movie.episode}</p>
              <h1>{movie.title}</h1>
            </CrawlTitle>
            <p>
              {/*The requirement was to display only the first 150 characters but I*/}
              {/*thought it would look cooler if all the crawl text is displayed.*/}
              {/*Trimming to 150 characters would be as follows.*/}
              {/*{movie.openingCrawl.substring(0, 150)}*/}
              {/*{movie.openingCrawl.length > 150 ? "..." : ""}*/}
              {movie.openingCrawl}
            </p>
          </CrawlWrapper>
        </MovieCrawlContainer>
      </MovieCrawl>
    )
  );
};

MovieCrawlComponent.propTypes = {
  movie: MovieType.isRequired,
};

export default MovieCrawlComponent;
