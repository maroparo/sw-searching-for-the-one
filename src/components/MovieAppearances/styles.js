import styled, { keyframes } from "styled-components";

import { flexCenterContent } from "utils/theme";

export const AppearancesWrapper = styled.div`
  padding: 16px;
  border-bottom: #f5f5f5 1px solid;
  background-color: #fff;
  & > span {
    font-family: Soloist, arial, serif;
    font-size: 13px;
  }
`;

export const AppearancesList = styled.ul`
  list-style: none;
  margin: 8px 0 0 0;
  padding: 0;
  width: 100%;
  border: 1px solid #f5f5f5;
`;
export const AppearancesItem = styled.li`
  background-color: ${(props) => (props.isEven ? "#fff" : "#f5f5f5")};
  padding: 0;
`;

export const MovieInfo = styled.div`
  height: 35px;
  display: flex;
  justify-content: space-between;
  & > span {
    font-size: 12px;
    &:first-child {
      font-family: Soloist, arial, serif;
    }
    & > img {
      margin-right: 4px;
    }
    margin-right: 10px;
    ${flexCenterContent};
  }
`;

export const MovieCrawl = styled.div`
  height: 140px;
  width: 100%;
  overflow: hidden;
  background: #000;
`;

export const CrawlFade = styled.div`
  position: relative;
  width: 100%;
  min-height: 10vh;
  top: -25px;
  background-image: linear-gradient(0deg, transparent, black 75%);
  z-index: 1;
`;

export const MovieCrawlContainer = styled.section`
  display: flex;
  justify-content: center;
  height: 800px;
  perspective: 600px;
  color: #feda4a;
  font-family: "Pathway Gothic One", sans-serif;
  font-size: 180%;
  font-weight: 600;
  letter-spacing: 6px;
  line-height: 150%;
  text-align: justify;
`;

const CrawlKeyframe = keyframes`
  0% {
    top: -100px;
    transform: rotateX(20deg)  translateZ(0);
  }
  100% { 
    top: -6000px;
    transform: rotateX(25deg) translateZ(-2500px);
  }
`;

export const CrawlWrapper = styled.div`
  position: relative;
  top: 99999px;
  transform-origin: 50% 100%;
  animation: ${CrawlKeyframe} 120s linear;
`;

export const CrawlTitle = styled.div`
  font-size: 90%;
  text-align: center;
  margin: 0 0 100px;
  text-transform: uppercase;
  & > h1 {
    margin: 0 0 100px;
    text-transform: uppercase;
  }
`;
