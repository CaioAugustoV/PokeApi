import React, { Component } from 'react';
import TabLeft from './TabLeft';
import TabRight from './TabRight';
import styled from "styled-components";

const Main = styled.div`
  width: 60%;
  height: 80%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
`;

const Center = styled.div`
  height: 90%;
  width: 6%;
  background: #e84848;
  border: 10px solid #4d4d4d;
  position: absolute;
  z-index: 1;
`;

export default class MainPokedex extends Component {
  render() {
    return (
      <Main>
        <TabLeft />
        <Center />
        <TabRight />
      </Main>
    )
  }
}
