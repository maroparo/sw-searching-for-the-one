import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { searchResultsSelector } from "store/selectors";
import { searchCharacter } from "store/actions";
import { ResultsWrapper, ResultsList } from "./styles";
import ResultItem from "components/SearchResults/ResultItem";
import SeeMoreItem from "components/SearchResults/SeeMoreItem";

const SearchResults = () => {
  const { loading, error, results, nextBatch } = useSelector(
    searchResultsSelector
  );
  console.log(error);
  const dispatch = useDispatch();

  const onSeeMore = () => {
    if (nextBatch) {
      dispatch(searchCharacter("", nextBatch));
    }
  };

  return (
    <ResultsWrapper>
      <ResultsList>
        {results.map((character, index) => {
          return (
            <ResultItem
              isEven={index % 2 === 0}
              key={character.name.replace(" ", "-").toLowerCase()}
              character={character}
            />
          );
        })}
        {(nextBatch || loading || error) && (
          <SeeMoreItem
            initialSearch={results.length === 0}
            key="see-more"
            loading={loading}
            error={error}
            onSeeMore={onSeeMore}
          />
        )}
      </ResultsList>
    </ResultsWrapper>
  );
};

export default SearchResults;
