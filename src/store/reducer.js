import {
  GET_ALL_MOVIES_SUCCESS,
  GET_ALL_PLANETS_SUCCESS,
  GET_ALL_SPECIES_SUCCESS,
  INCREASE_ONGOING_REQUESTS,
  SEARCH_FOR_CHARACTER_ERROR,
  SET_SEARCH_ONGOING,
  SET_ERROR,
  SEARCH_FOR_CHARACTER_SUCCESS,
  SEARCH_FOR_MORE_CHARACTER_SUCCESS,
} from "./actions/types";
import { getFromStorage } from "utils/storage";

const initialState = {
  storageOngoingRequests: 0,
  error: "",
  searchOngoing: false,
  searchError: "",
  movies: !getFromStorage("movies") ? [] : getFromStorage("movies"),
  planets: !getFromStorage("planets") ? [] : getFromStorage("planets"),
  species: !getFromStorage("species") ? [] : getFromStorage("species"),
  searchResults: [],
  nextBatchOfResults: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, error: action.error, storageOngoingRequests: 0 };
    case INCREASE_ONGOING_REQUESTS:
      return {
        ...state,
        storageOngoingRequests: state.storageOngoingRequests + 1,
      };
    case SET_SEARCH_ONGOING:
      return {
        ...state,
        searchOngoing: action.searchOngoing,
      };
    case GET_ALL_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.movies,
        storageOngoingRequests: state.storageOngoingRequests - 1,
      };
    case GET_ALL_SPECIES_SUCCESS:
      return {
        ...state,
        species: action.species,
        storageOngoingRequests: state.storageOngoingRequests - 1,
      };
    case GET_ALL_PLANETS_SUCCESS:
      return {
        ...state,
        planets: action.planets,
        storageOngoingRequests: state.storageOngoingRequests - 1,
      };
    case SEARCH_FOR_CHARACTER_ERROR:
      return { ...state, searchError: action.message, searchOngoing: false };
    case SEARCH_FOR_CHARACTER_SUCCESS:
      return {
        ...state,
        searchResults: action.results.charactersResult,
        nextBatchOfResults: action.results.nextBatch,
        searchOngoing: false,
        searchError: "",
      };
    case SEARCH_FOR_MORE_CHARACTER_SUCCESS:
      return {
        ...state,
        searchResults: [
          ...state.searchResults,
          ...action.results.charactersResult,
        ],
        nextBatchOfResults: action.results.nextBatch,
        searchOngoing: false,
        searchError: "",
      };
    default:
      return state;
  }
};
