import styled, { css } from "styled-components";

import { media } from "utils/theme";

export const Component = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
`;

export const Header = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 8px;
  transition: all 125ms ease-out;
  ${(props) =>
    props.expanded &&
    css`
      background-color: #f28d1a45;
    `};
  &:hover {
    background-color: #f28d1a45;
  }
  & > div {
    margin: 0;
    flex-grow: 1;
  }
`;

export const Arrow = styled.span`
  transition: all 300ms cubic-bezier(0.25, 0.76, 0.43, 0.96);
  ${media.phoneLg} {
    margin-right: 8px;
  }
  transform-origin: center;
  ${(props) =>
    props.expanded &&
    css`
      transform: rotateZ(180deg);
    `};
`;

export const Wrapper = styled.div`
  transition: all 255ms ease-out;
`;
export const Container = styled.div``;
