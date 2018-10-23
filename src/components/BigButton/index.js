import styled from "styled-components";
const BigButton = styled.button`
  position: relative;
  border: none;
  background-color: rgba(255, 255, 255, 0.8);
  color: #4b4b4b;
  font-size: 22pt;
  height: 55px;
  width: 100%;
  margin: 0;
  padding: 0;
  margin-top: 100px;
  border-radius: 5px;
  box-shadow: 5px 5px rgba(0, 0, 0, 0.1);
  outline: none;
  cursor: pointer;
  opacity: 1;
  transition: top 100ms linear, box-shadow 200ms linear,
    background-color 200ms linear;
  top: 0;
  &:hover {
    top: -4px;
    box-shadow: 5px 5px rgba(0, 0, 0, 0.3);
    background-color: #fff;
    transition: top 200mss linear, box-shadow 200ms linear,
      background-color 200ms linear;
  }
  &.true {
    opacity: 0;
    height: 200vh;
    // cursor: default;
    margin: 0;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0px;
    left: 0px;
  }
`;
export default BigButton;
