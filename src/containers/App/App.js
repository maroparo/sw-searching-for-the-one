import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { populateLocalStorage } from "store/actions";
import { appContainerSelector } from "store/selectors";
import SearchBox from "components/SearchBox";
import Loading from "components/styled/Loading";
import SearchResults from "components/SearchResults";
import logo from "assets/images/logo.png";
import {
  App as AppContainer,
  Wrapper,
  SearchWrapper,
  LogoWrapper,
} from "./styles";

function App() {
  const [animate, setAnimate] = useState(false);
  const dispatch = useDispatch();
  const { loading, error } = useSelector(appContainerSelector);

  useEffect(() => {
    dispatch(populateLocalStorage());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppContainer>
      <Wrapper>
        {loading || error.length > 1 ? (
          <Loading
            isLoading={loading}
            feedback={
              loading ? "The Force will be with you! In a bit..." : error
            }
          />
        ) : (
          <SearchWrapper animate={animate}>
            <LogoWrapper>
              <img
                src={logo}
                alt={"Search for characters in the Star Wars universe!"}
              />
              Searching for The 0ne
            </LogoWrapper>
            <SearchBox animate={setAnimate} />
            <SearchResults />
          </SearchWrapper>
        )}
      </Wrapper>
    </AppContainer>
  );
}

export default App;
