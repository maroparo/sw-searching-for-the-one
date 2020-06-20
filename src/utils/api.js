import axios from "axios";
import { getFromStorage } from "utils/storage";
import { formatToRomanNumber } from "utils/helpers";

const baseUrl = "https://swapi.dev/api";

const extractEntityIdFromUrl = (url) => {
  const urlExploded = url.split("/");
  return urlExploded[urlExploded.length - 2];
};

const getAllPlanets = (
  planets,
  resolve,
  reject,
  url = `${baseUrl}/planets`
) => {
  axios
    .get(url)
    .then((response) => {
      const receivedPlanets = planets.concat(
        response.data.results.map((planet) => ({
          id: extractEntityIdFromUrl(planet.url),
          name: planet.name,
          population: planet.population,
        }))
      );
      if (response.data.next !== null) {
        getAllPlanets(receivedPlanets, resolve, reject, response.data.next);
      } else {
        resolve(receivedPlanets);
      }
    })
    .catch((error) => {
      reject(
        `Something went wrong while fetching the planets!\n${error.message}`
      );
    });
};

const getAllSpecies = (
  species,
  resolve,
  reject,
  url = `${baseUrl}/species`
) => {
  axios
    .get(url)
    .then((response) => {
      const receivedSpecies = species.concat(
        response.data.results.map((species) => ({
          id: extractEntityIdFromUrl(species.url),
          name: species.name,
        }))
      );

      if (response.data.next !== null) {
        getAllSpecies(receivedSpecies, resolve, reject, response.data.next);
      } else {
        resolve(receivedSpecies);
      }
    })
    .catch((error) => {
      reject(
        `Something went wrong while fetching the species!\n${error.message}`
      );
    });
};

const getAllMovies = (movies, resolve, reject, url = `${baseUrl}/films`) => {
  axios
    .get(url)
    .then((response) => {
      const receivedMovies = movies.concat(
        response.data.results.map((movie) => ({
          id: extractEntityIdFromUrl(movie.url),
          title: movie.title,
          episode: formatToRomanNumber(movie.episode_id),
          releaseDate: movie.release_date,
          openingCrawl: movie.opening_crawl,
        }))
      );
      if (response.data.next !== null) {
        getAllMovies(receivedMovies, resolve, reject, response.data.next);
      } else {
        resolve(receivedMovies);
      }
    })
    .catch((error) => {
      reject(
        `Something went wrong while fetching the movies!\n${error.message}`
      );
    });
};

const searchForCharacter = (searchTerm, resolve, reject, nextBatch) => {
  axios
    .get(
      nextBatch
        ? nextBatch
        : `${baseUrl}/people/?search=${encodeURI(searchTerm)}`
    )
    .then((response) => {
      if (
        !getFromStorage("planets") ||
        !getFromStorage("movies") ||
        !getFromStorage("species")
      ) {
        reject(
          "Seems like the dark side got to some important data first.\nPlease refresh and try searching again!"
        );
      } else {
        const movies = getFromStorage("movies");
        const planets = getFromStorage("planets");
        const species = getFromStorage("species");
        const charactersResult = response.data.results.map((character) => {
          const characterSpecies = character.species.map((speciesUrl) => {
            const speciesIndex = species.findIndex(
              (specie) => specie.id === extractEntityIdFromUrl(speciesUrl)
            );
            return species[speciesIndex].name;
          });
          const movieAppearances = character.films
            .map((movieUrl) => {
              const movieIndex = movies.findIndex(
                (movie) => movie.id === extractEntityIdFromUrl(movieUrl)
              );
              return movies[movieIndex];
            })
            .sort((a, b) => {
              return new Date(b.releaseDate) - new Date(a.releaseDate);
            });

          const planetIndex = planets.findIndex(
            (planet) =>
              planet.id === extractEntityIdFromUrl(character.homeworld)
          );

          return {
            name: character.name,
            homeWorld: planets[planetIndex],
            species: characterSpecies,
            movieAppearances,
          };
        });
        resolve({
          charactersResult,
          nextBatch: response.data.next,
        });
      }
    })
    .catch((error) => {
      reject(
        `Something went wrong while fetching the movies!\n${error.message}`
      );
    });
};

export default {
  getAllPlanets,
  getAllSpecies,
  getAllMovies,
  searchForCharacter,
};
