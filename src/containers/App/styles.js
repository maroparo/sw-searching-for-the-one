import styled, { css } from "styled-components";

import { media, flexCenterContent } from "utils/theme";
import backgroundImage from "assets/images/star-wars-background.jpg";

export const App = styled.div`
  ${flexCenterContent};
  height: 100%;
  background: radial-gradient(#c41e243d, #f28d1a57),
    url(${backgroundImage}) no-repeat center;
  background-size: cover;
`;

export const Wrapper = styled.div`
  ${flexCenterContent};
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: absolute;
  overflow-y: scroll;
`;

export const LogoWrapper = styled.div`
  ${flexCenterContent};
  color: #440b0b;
  flex-direction: column;
  margin-bottom: 8px;
  font-family: StarJedi, arial, serif;
  font-size: 15px;
  text-align: center;
  & > img {
    height: 80px;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  position: absolute;
  top: 150px;
  ${media.phoneSmToLg} {
    width: 80%;
  }
  ${media.tablet} {
    width: 50%;
  }
  ${media.desktopLg} {
    width: 40%;
  }
  ${(props) =>
    props.animate &&
    css`
      transform: translateY(-100px);
    `};
  transition: transform 0.5s cubic-bezier(0.37, 0.11, 0.36, 1);
`;
