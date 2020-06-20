import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { searchCharacter, searchCharacterSuccess } from "store/actions";
import { SearchField } from "./styles";
import PropTypes from "prop-types";

const SearchBox = (props) => {
  const { animate } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const onSearchKeyPress = (e) => {
    if (e.key === "Enter" && searchTerm.length > 0) {
      dispatch(searchCharacter(searchTerm));
      animate(true);
    }
  };

  const onSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value.length === 0) {
      dispatch(
        searchCharacterSuccess({
          charactersResult: [],
          nextBatch: null,
        })
      );
    }
  };

  return (
    <SearchField
      placeholder={"Search for characters..."}
      title={"Search for characters in the Star Wars universe!"}
      onChange={onSearchTermChange}
      onKeyPress={onSearchKeyPress}
      value={searchTerm}
    />
  );
};

SearchBox.propTypes = {
  animate: PropTypes.func,
};

export default SearchBox;
