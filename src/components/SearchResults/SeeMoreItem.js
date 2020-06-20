import React from "react";
import PropTypes from "prop-types";

import { SeeMoreItem } from "./styles";
import Loading from "components/styled/Loading";

const SeeMoreSection = (props) => {
  const { loading, onSeeMore, error, initialSearch } = props;
  return (
    <SeeMoreItem initialSearch={initialSearch}>
      {!loading && !error && (
        <span onClick={onSeeMore}>Search on other planets</span>
      )}
      {(loading || error) && (
        <Loading
          dark={!initialSearch}
          isLoading={initialSearch && !error}
          feedback={loading ? "Searching some other planets..." : error}
        />
      )}
    </SeeMoreItem>
  );
};

SeeMoreSection.propTypes = {
  loading: PropTypes.bool.isRequired,
  onSeeMore: PropTypes.func.isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  initialSearch: PropTypes.bool.isRequired,
};

export default SeeMoreSection;
