import API from "utils/api";
import { getFromStorage, putInStorage } from "utils/storage";
import {
  SET_ERROR,
  INCREASE_ONGOING_REQUESTS,
  SET_SEARCH_ONGOING,
  GET_ALL_MOVIES_SUCCESS,
  GET_ALL_PLANETS_SUCCESS,
  GET_ALL_SPECIES_SUCCESS,
  SEARCH_FOR_CHARACTER_SUCCESS,
  SEARCH_FOR_MORE_CHARACTER_SUCCESS,
  SEARCH_FOR_CHARACTER_ERROR,
} from "./types";

export const setError = (error = "") => ({
  type: SET_ERROR,
  error,
});

export const setSearchOngoing = (searchOngoing = true) => ({
  type: SET_SEARCH_ONGOING,
  searchOngoing,
});

export const increaseStorageOngoingRequests = () => ({
  type: INCREASE_ONGOING_REQUESTS,
});

export const getMoviesSuccess = (movies) => ({
  type: GET_ALL_MOVIES_SUCCESS,
  movies,
});

export const getPlanetsSuccess = (planets) => ({
  type: GET_ALL_PLANETS_SUCCESS,
  planets,
});

export const getSpeciesSuccess = (species) => ({
  type: GET_ALL_SPECIES_SUCCESS,
  species,
});

export const searchCharacterSuccess = (results) => ({
  type: SEARCH_FOR_CHARACTER_SUCCESS,
  results,
});

export const searchCharacterError = (message) => ({
  type: SEARCH_FOR_CHARACTER_ERROR,
  message,
});

export const searchForMoreCharactersSuccess = (results) => ({
  type: SEARCH_FOR_MORE_CHARACTER_SUCCESS,
  results,
});

export const getMovies = () => {
  return function (dispatch) {
    dispatch(increaseStorageOngoingRequests());
    API.getAllMovies([])
      .then((response) => {
        putInStorage("movies", response);
        dispatch(getMoviesSuccess(response));
      })
      .catch((error) => dispatch(setError(error)));
  };
};

export const getPlanets = () => {
  return function (dispatch) {
    dispatch(increaseStorageOngoingRequests());
    API.getAllPlanets([])
      .then((response) => {
        putInStorage("planets", response);
        dispatch(getPlanetsSuccess(response));
      })
      .catch((error) => dispatch(setError(error)));
  };
};

export const getSpecies = () => {
  return function (dispatch) {
    dispatch(increaseStorageOngoingRequests());
    API.getAllSpecies([])
      .then((response) => {
        putInStorage("species", response);
        dispatch(getSpeciesSuccess(response));
      })
      .catch((error) => dispatch(setError(error)));
  };
};

export const populateLocalStorage = () => {
  return function (dispatch) {
    try {
      if (!getFromStorage("planets")) dispatch(getPlanets());
      if (!getFromStorage("species")) dispatch(getSpecies());
      if (!getFromStorage("movies")) dispatch(getMovies());
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};

export const searchCharacter = (searchTerm, nextBatch = null) => {
  return function (dispatch) {
    dispatch(setSearchOngoing());
    API.searchForCharacter(searchTerm, nextBatch)
      .then((response) => {
        if (nextBatch) {
          dispatch(searchForMoreCharactersSuccess(response));
        } else {
          dispatch(searchCharacterSuccess(response));
        }
      })
      .catch((error) => {
        dispatch(searchCharacterError(error));
      });
  };
};
