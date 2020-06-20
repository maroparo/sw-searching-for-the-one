import PropTypes from "prop-types";

export const MovieType = PropTypes.exact({
  id: PropTypes.string.isRequired,
  episode: PropTypes.string.isRequired,
  openingCrawl: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
});

export const PlanetType = PropTypes.exact({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  population: PropTypes.string.isRequired,
});

export const CharacterType = PropTypes.exact({
  name: PropTypes.string.isRequired,
  species: PropTypes.arrayOf(PropTypes.string).isRequired,
  homeWorld: PlanetType.isRequired,
  movieAppearances: PropTypes.arrayOf(MovieType).isRequired,
});
