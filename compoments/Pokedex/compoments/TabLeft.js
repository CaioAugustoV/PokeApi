import React, { Component } from "react";
import styled from "styled-components";
import Joystick from './tabLeft/Joystick';

const Main = styled.div`
  height: 100%;
  width: 48%;
  background: #e84848;
  border: 10px solid #4d4d4d;
  border-radius: 22px 22px 0 0;
  box-shadow: inset -4px -7px 79px -64px rgba(0, 0, 0, 0.7);
`;

const HeaderBorder = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  background: #4d4d4d;
  clip-path: polygon(
    30% 0%,
    68% 0,
    100% 0,
    100% 50%,
    68% 50%,
    57% 92%,
    0 92%,
    0 0
  );
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 80%;
  width: 100%;
  background: #e84848;
  border-radius: 20px 20px 0 0;
  clip-path: polygon(
    30% 0%,
    68% 0,
    100% 0,
    100% 50%,
    65% 50%,
    55% 100%,
    0 100%,
    0 0
  );
  box-shadow: inset 0px -70px 38px -23px rgba(0, 0, 0, 0.2);
`;

const Loading = styled.div`
  width: 4vw;
  background: #23b1c7;
  height: 4vw;
  border-radius: 50%;
  border: 2px solid #f0f4f5;
  margin-left: 4%;
  margin-top: 3%;
  box-shadow: inset -10px -3px 6px 0px rgba(255, 255, 255, 0.3),
    -1px -1px 8px 3px rgba(0, 0, 0, 0.3),
    inset 4px 0px 6px 0px rgba(12, 129, 148, 0.5);
  animation: flash linear 1s infinite;
  @keyframes flash {
    0% {
      background: rgb(35, 177, 199);
    }
    50% {
      background: rgb(35, 177, 199, 0.7);
    }
    100% {
      background: rgb(35, 177, 199);
    }
  }
`;

const Types = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 1%;
  margin-top: 3%;
  div {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 2px solid #4d4d4d;
    margin: 0 4px;
    box-shadow: inset -2px -2px 4px 0px rgba(0, 0, 0, 0.3),
      -1px -1px 1px 0px rgba(0, 0, 0, 0.3);
  }
  div:nth-child(1) {
    background: #22b598;
  }
  div:nth-child(2) {
    background: #fcee6b;
  }
  div:nth-child(3) {
    background: #e8484a;
  }
`;

const MainLeftBorder = styled.div`
  width: 90%;
  height: 78%;
  margin-left: 2%;
  background: #4d4d4d;
  position: relative;
  display: flex;
  align-items: center;
`;

const MainLeftBorderExtencion = styled.div`
  background: #4d4d4d;
  position: absolute;
  width: 50%;
  height: 10.2%;
  clip-path: polygon(
    100% 0,
    100% 0,
    100% 100%,
    75% 100%,
    25% 100%,
    0 225%,
    50% 0
  );
  right: 0;
  top: -10%;
`;

const MainLeft = styled.div`
  width: 96%;
  height: 97.5%;
  margin-left: 2%;
  background: #e84848;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const MainLeftExtencion = styled.div`
  background: #e84848;
  position: absolute;
  width: 50%;
  height: 11%;
  clip-path: polygon(
    100% 0,
    100% 0,
    100% 100%,
    75% 100%,
    25% 100%,
    0 225%,
    55% 0
  );
  right: 0;
  top: -10%;
`;

const MainScreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #4d4d4d;
  height: 40%;
  width: 80%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 10% 100%, 0 88%);
`;

const BorderScreen = styled.div`
  background: #e6e6e6;
  height: 94%;
  width: 95%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 10% 100%, 0 88%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Screen = styled.div`
  background: #4d4d4d;
  width: 80%;
  height: 75%;
`;

const Camera = styled.div`
  position: absolute;
  top: 2%;
  display: flex;
  flex-direction: row;
  div {
    background: #dfdfdf;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid #4d4d4d;
    margin: 0 25px;
  }
`;

const ContentScreen = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  bottom: 0;
`;

const ButtonScreen = styled.div`
  background: #e84848;
  width: 1vw;
  height: 1vw;
  border-radius: 50%;
  border: 1px solid #4d4d4d;
`;

const AltoFalante = styled.div`
  div {
    width: 2vw;
    height: 0.1vw;
    background: #4d4d4d;
    border-radius: 50%;
    margin: 3px 0;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

const Reset = styled.div`
  background: #666;
  width: 3vw;
  height: 3vw;
  border-radius: 50%;
  border: 3px solid #4b4b4b;
  position: relative;
  box-shadow: ${props  => props.active ? 'none' : '-2px 2px 0 #4d4d4d'};
  top: ${props  => props.active ? '2px' : '0'};
  left: ${props  => props.active ? '-2px' : '0'};
	transition: .1s ease;
`;

const Voice = styled.div`
  background: #22b598;
  width: 8vw;
  height: 3vw;
  border: 3px solid #444d4c;
  border-radius: 15px;
	position: relative;
	box-shadow: ${props => props.active ? 'none' : '0 5px 0 #4d4d4d'};
	top: ${props => props.active ? '5px' : '0'};
	transition: .1s ease;
`;

export default class TabLeft extends Component {
	constructor(props){
		super(props);
		this.state = {
      voice: false,
      reset: false,
		}
	};

  buttonResetActive = () => {
    this.setState({
			reset: true,
		}, () => {
			setTimeout( () => {
				this.setState({
					reset: false,
				})
			}, 300)
		})
  }

	buttonVoiceActive = () => {
		this.setState({
			voice: true,
		}, () => {
			setTimeout( () => {
				this.setState({
					voice: false,
				})
			}, 300)
		})
  }
  
  render() {
    return (
      <Main>
        <HeaderBorder>
          <Header>
            <Loading />
            <Types>
              <div />
              <div />
              <div />
            </Types>
          </Header>
        </HeaderBorder>

        <MainLeftBorder>
          <MainLeftBorderExtencion />
          <MainLeft>
            <MainLeftExtencion />
            <MainScreen>
              <BorderScreen>
                <Camera>
                  <div />
                  <div />
                </Camera>
                <Screen />
                <ContentScreen>
                  <ButtonScreen />
                  <AltoFalante>
                    <div />
                    <div />
                    <div />
                  </AltoFalante>
                </ContentScreen>
              </BorderScreen>
            </MainScreen>
            <Buttons>
              <Reset onClick={ () => this.buttonResetActive()} active={this.state.reset}/>
              <Voice onClick={ () => this.buttonVoiceActive()} active={this.state.voice}/>
              <Joystick />
            </Buttons>
          </MainLeft>
        </MainLeftBorder>
      </Main>
    );
  }
}
