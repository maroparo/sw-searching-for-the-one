import styled, { keyframes } from "styled-components";

export const SpinnerSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SpinnerKeyFrames = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  margin: 15px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(255, 255, 255, 0.2);
  border-right: 1.1em solid rgba(255, 255, 255, 0.2);
  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
  border-left: 1.1em solid ${(props) => (props.dark ? "#000" : "#fff")};
  transform: translateZ(0);
  animation: ${SpinnerKeyFrames} 1.1s infinite linear;
  border-radius: 50%;
  width: ${({ theme }) => theme.BaseUnit * 5}px;
  height: ${({ theme }) => theme.BaseUnit * 5}px;
  &:after {
    border-radius: 50%;
    width: ${({ theme }) => theme.BaseUnit * 5}px;
    height: ${({ theme }) => theme.BaseUnit * 5}px;
  }
`;

export const Feedback = styled.span`
  font-family: StarJedi, arial, serif;
  font-size: 15px;
  color: ${(props) => (props.dark ? "#000" : "#fff")};
  text-align: center;
  & > p {
    margin: 5px;
  }
`;
