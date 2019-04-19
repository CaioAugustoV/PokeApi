import React, { Component } from "react";
import styled from "styled-components";

const MainBorder = styled.div`
  height: 90%;
  width: 48%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  background: #4d4d4d;
  border: 10px solid #4d4d4d;
  clip-path: polygon(
    30% 0%,
    49% 10%,
    100% 10%,
    100% 100%,
    70% 100%,
    30% 100%,
    0 100%,
    0 0
  );
`;

const Main = styled.div`
  height: 99.9%;
  width: 100%;
  clip-path: polygon(
    26% 0%,
    47% 11%,
    100% 11%,
    100% 100%,
    70% 100%,
    30% 100%,
    0 100%,
    0 0
  );
  background: #e84848;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

const BorderMainRight = styled.div`
  width: 86%;
  height: 84%;
  margin-right: 4%;
  margin-bottom: 4%;
  background: #4d4d4d;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainRightBorderExtencion = styled.div`
  clip-path: polygon(35% 0%, 100% 100%, 100% 100%, 50% 100%, 0 100%, 0 0);
  background: #4d4d4d;
  height: 14%;
  width: 42%;
  position: absolute;
  top: -13%;
  left: 0;
`;

const MainRight = styled.div`
  background: #e84848;
  width: 95%;
  height: 96%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const MainRightExtencion = styled.div`
  clip-path: polygon(33% 0%,100% 100%,100% 100%,50% 100%,0 100%,0 0);
  background: #e84848;
  height: 13%;
  width: 38%;
  position: absolute;
  left: 2.5%;
  top: -10%;
`;

const Screen = styled.div`
  width: 89%;
  height: 49%;
  background: #666666;
  border: 4px solid #4d4d4d;
`;

const MainButtons = styled.div`
  width: 90%;
`;

const ButtonsLineOne = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 4vh;
`;

const ChangeImages = styled.div`
  display: flex;
  flex-direction: row;
  div{
    height: 3vw;
    width: 4vw;
    background: #e6e6e6;
    border: 2px solid #4d4d4d;
  }
  div:nth-child(1){
    border-radius: 8px 0 0 8px;
  }
  div:nth-child(2){
    border-radius: 0 8px 8px 0;
  }
`;

const Reset = styled.div`
  height: 3vw;
  width: 3vw;
  background: #fcee6b;
  border-radius: 50%;
  border: 2px solid #4d4d4d;
`;

const ButtonsLineTwo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  div:nth-child(1){
    height: 3vw;
    width: 10vw;
    background: #666666;
    border-radius: 8px;
    border: 2px solid #4d4d4d;
  }
  div:nth-child(2){
    height: 3vw;
    width: 8vw;
    background: #666666;
    border-radius: 8px;
    border: 2px solid #4d4d4d;
  }
`;

export default class TabRight extends Component {
  render() {
    return (
      <MainBorder>
        <Main>
          <BorderMainRight>
            <MainRightBorderExtencion/>
            <MainRight>
              <MainRightExtencion/>
              <Screen/>
              <MainButtons>
                <ButtonsLineOne>
                  <ChangeImages>
                    <div/>
                    <div/>
                  </ChangeImages>
                  <Reset/>
                </ButtonsLineOne>
                <ButtonsLineTwo>
                  <div/>
                  <div/>
                </ButtonsLineTwo>
              </MainButtons>
            </MainRight>
          </BorderMainRight>
        </Main>
      </MainBorder>
    );
  }
}
