import React from "react";
import PropTypes from "prop-types";

import { SpinnerSection, Spinner, Feedback } from "./styles";
const LoadingStatusIndicator = (props) => {
  const { feedback = "Loading...", isLoading = true, dark = false } = props;
  return (
    <SpinnerSection>
      {isLoading && <Spinner dark={dark} />}
      <Feedback dark={dark}>
        {feedback.split("\n").map((item, i) => {
          return <p key={i}>{item}</p>;
        })}
      </Feedback>
    </SpinnerSection>
  );
};

LoadingStatusIndicator.propTypes = {
  feedback: PropTypes.string,
  isLoading: PropTypes.bool,
  dark: PropTypes.bool,
};

export default LoadingStatusIndicator;
