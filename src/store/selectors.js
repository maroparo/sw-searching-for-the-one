import { createSelector } from "reselect";

export const appContainerSelector = createSelector(
  (state) => state.storageOngoingRequests,
  (state) => state.error,
  (ongoingRequests, error) => ({
    loading: ongoingRequests > 0,
    error,
  })
);

export const searchResultsSelector = createSelector(
  (state) => state.searchOngoing,
  (state) => state.searchError,
  (state) => state.searchResults,
  (state) => state.nextBatchOfResults,
  (ongoingSearch, error, searchResults, nextBatch) => ({
    loading: ongoingSearch,
    error,
    results: searchResults,
    nextBatch,
  })
);
