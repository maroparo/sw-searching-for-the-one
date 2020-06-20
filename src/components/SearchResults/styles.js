import styled, { css } from "styled-components";

import { flexCenterContent } from "utils/theme";

export const ResultsWrapper = styled.div`
  ${flexCenterContent};
  flex-direction: column;
  margin: 24px 0;
  width: 100%;
`;

export const ResultsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

export const ResultItem = styled.li`
  background-color: ${(props) => (props.isEven ? "#fff" : "#f5f5f5")};
  padding: 0;
`;

export const SeeMoreItem = styled.li`
  ${flexCenterContent};
  ${(props) =>
    props.initialSearch
      ? css`
          margin-top: 24px;
        `
      : css`
          background-color: #fff;
          border-top: 1px solid #f5f5f5;
          &:hover {
            background-color: #efc8ca;
          }
          cursor: pointer;
        `};

  padding: 6px;
  height: 40px;
  font-family: StarJedi, arial, serif;
  font-size: 15px;
`;

export const CharacterInfo = styled.div`
  height: 40px;
`;

export const CharacterName = styled.span`
  font-family: Soloist, arial, serif;
  display: block;
  font-size: 15px;
  margin-bottom: 4px;
`;

export const CharacterSideNotes = styled.div`
  display: flex;
  font-size: 12px;
  & > span {
    & > img {
      margin-right: 4px;
    }
    margin-right: 10px;
    ${flexCenterContent};
  }
`;
