import React from "react";
import PropTypes from "prop-types";

import { SeeMoreItem } from "./styles";
import Loading from "components/styled/Loading";

const SeeMoreSection = (props) => {
  const { loading, onSeeMore, error, initialSearch } = props;
  return (
    <SeeMoreItem initialSearch={initialSearch}>
      {!loading && <span onClick={onSeeMore}>Search on other planets</span>}
      {(loading || error.length > 1) && (
        <Loading
          dark={!initialSearch}
          isLoading={initialSearch}
          feedback={loading ? "Searching some other planets..." : error}
        />
      )}
    </SeeMoreItem>
  );
};

SeeMoreSection.propTypes = {
  loading: PropTypes.bool.isRequired,
  onSeeMore: PropTypes.func.isRequired,
  error: PropTypes.string,
  initialSearch: PropTypes.bool.isRequired,
};

export default SeeMoreSection;
