import React, { Component } from "react";
import MainPokedex from './compoments/Main'
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;  
  width: 100vw;
  height: 100vh;
  background: lightgray;
`;
export default class index extends Component {
  render() {
    return <Main><MainPokedex/></Main>;
  }
}
