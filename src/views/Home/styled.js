import styled from "styled-components";
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;
const LogoContainer = styled.span`
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 50pt;
  font-style: normal;
  font-variant: normal;
  font-weight: 100;
  line-height: 26.4px;
  color: white;
  transition: font-size 200ms linear;
  sup {
    position: relative;
    top: 21px;
  }
  b {
    font-weight: 400;
  }
  &.active {
    font-size: 25pt;
    font-weight: 200;
    b {
      font-weight: 400;
    }
    transition: font-size 200ms linear;
  }
`;
const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 390px;
  height: 400px;
  text-align: center;
  transition: transform 200ms linear, top 200ms linear, left 200ms linear,
    text-align 200ms linear;
  &.active {
    top: 50px;
    left: 50px;
    transform: none;
    text-align: left;
    transition: transform 200ms linear, top 200ms linear, left 200ms linear,
      text-align 200ms linear;
    sup {
      font-size: 24px;
      top: 10px;
    }
  }
`;

export { Wrapper, Container, LogoContainer };
