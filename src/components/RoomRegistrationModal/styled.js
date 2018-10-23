import styled, { keyframes } from "styled-components";

const intro = keyframes`
  from {
    width: 0vw;
    opacity: 0;
  }
  to {
    width: 600px;
    max-width: calc(100vw - 180px);
    opacity: 1;
  }
`;

const Container = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  background: #333;
  height: 100vh;
  animation: ${intro} 600ms forwards;
  z-index: 10;
  color: white;
  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;
  h1 {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 100;
    font-size: 40px;
  }
`;

const Form = styled.div`
  width: 500px;
  padding: 40px;
  // margin-right: auto;
  // margin-left: auto;
`;
const FieldInput = styled.input`
  margin: 0;
  display: inline-block;
  width: calc(50% - 30px);
  margin-right: 10px;
  outline: 0;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  text-align: left;
  line-height: 1.21428571em;
  padding: 0.4em 0.5em;
  background: #fff;
  border: 1px solid rgba(34, 36, 38, 0.15);
  color: rgba(0, 0, 0, 0.87);
  border-radius: 0.28571429rem;
  -webkit-transition: box-shadow 0.1s ease, border-color 0.1s ease;
  transition: box-shadow 0.1s ease, border-color 0.1s ease;
  font-size: 13px;
  position: relative;
  height: 22px;
  &::placeholder {
    color: #ccc;
  }
`;

const SubmitButton = styled.button`
  background: #ccc;
  color: #333;
  border-radius: 0.28571429rem;
  font-size: 18px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 400;
`;

export { Container, FieldInput, Form, SubmitButton };
