import React, { Component } from 'react'
import styled from "styled-components";


const Direction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 15px;
  }
`;

const Top = styled.div`
  background: #666;
  width: 3vw;
  height: 3vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px 6px 0 0;
  border-top: 1px solid #4b4b4b;
  border-right: 1px solid #4b4b4b;
  border-bottom: 0 solid #4b4b4b;
  border-left: 1px solid #4b4b4b;
  position: relative;
  ${ props => {
    switch (props.active) {
      case 'left':
        return 'box-shadow: 4px 5px 0 #4d4d4d, 4px 0 0 #4d4d4d; top: 1.2px'
      case 'top':
        return 'box-shadow: none; top: -1px'
      case 'right':
        return 'box-shadow: -4px 5px 0 #4d4d4d, -4px 0 0 #4d4d4d, 0 5px 0 #4d4d4d; top: 0.8px'
      case 'bottom':
        return 'box-shadow: 0 -5px 0 #4d4d4d; top: 0.8px'
      default:
        break
    }
  }}
	transition: .1s ease;
  img {
    transform: rotate(270deg);
  }
`;

const Vertical = styled.div`
  display: flex;
  flex-direction: row;
`;

const Left = styled.div`
  background: #666;
  width: 3vw;
  height: 3vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px 0 0 6px;
  border-top: 1px solid #4b4b4b;
  border-right: 0 solid #4b4b4b;
  border-bottom: 1px solid #4b4b4b;
  border-left: 1px solid #4b4b4b;
  position: relative;
  box-shadow: 0 5px 0 #4d4d4d;
  ${ props => {
    switch (props.active) {
      case 'left':
        return 'box-shadow: none; top: 1px'
      case 'top':
        return 'box-shadow: 0 3px 0 #4d4d4d; top: -1px'
      case 'right':
        return 'box-shadow: -4px 5px 0 #4d4d4d, -4px 0 0 #4d4d4d, 0 5px 0 #4d4d4d; top: 0.8px'
      case 'bottom':
        return 'box-shadow: 0 -5px 0 #4d4d4d; top: 0.8px'
      default:
        break
    }
  }}
	transition: .1s ease;
  img {
    transform: rotate(180deg);
  }
`;

const Center = styled.div`
  background: #666;
  width: 3vw;
  height: 3vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #666;
  border-right: 1px solid #666;
  border-bottom: 1px solid #666;
  border-left: 1px solid #666;
  position: relative;
  ${ props => {
    switch (props.active) {
      case 'left':
        return 'top: 1px'
      case 'top':
        return 'top: -1px'
      case 'right':
        return 'top: 0.8px'
      case 'bottom':
        return 'top: 0.8px'
      default:
        break;
    }
  }}
	transition: .1s ease;
  div {
    height: 15px;
    width: 15px;
    background: #656565;
    border-radius: 50%;
    border: 1px solid #4b4b4b;
  }
`;

const Right = styled.div`
  background: #666;
  width: 3vw;
  height: 3vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 6px 6px 0;
  border-top: 1px solid #4b4b4b;
  border-right: 1px solid #4b4b4b;
  border-bottom: 1px solid #4b4b4b;
  border-left: 0 solid #4b4b4b;
  position: relative;
  box-shadow: 0 5px 0 #4d4d4d;
  ${ props => {
    switch (props.active) {
      case 'left':
        return 'box-shadow: 4px 5px 0 #4d4d4d, 4px 0 0 #4d4d4d, 0 5px 0 #4d4d4d; top: 1px'
      case 'top':
        return 'box-shadow: 0 3px 0 #4d4d4d; top: -1px'
      case 'right':
        return 'box-shadow: none; top: 0.8px'
      case 'bottom':
        return 'box-shadow: 0 -5px 0 #4d4d4d; top: 0.8px'
      default:
        break
    }
  }}
	transition: .1s ease;
`;

const Bottom = styled.div`
  background: #666;
  width: 3vw;
  height: 3vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 6px 6px;
  border-top: 0 solid #4b4b4b;
  border-right: ${ props => props.active == 'left' ? '5px solid #4b4b4b' : '1px solid #4b4b4b'};
  border-right: 1px solid #4b4b4b;
  border-bottom: 1px solid #4b4b4b;
  border-left: 1px solid #4b4b4b;
  position: relative;
  box-shadow: 0 5px 0 #4d4d4d;
  ${ props => {
    switch (props.active) {
      case 'left':
        return 'box-shadow: 4px 5px 0 #4d4d4d, 4px 0 0 #4d4d4d, 0 5px 0 #4d4d4d; top: 0.8px'
      case 'top':
        return 'box-shadow: 0 7px 0 #4d4d4d; top: -1px'
      case 'right':
        return 'box-shadow: -4px 5px 0 #4d4d4d, -4px 0 0 #4d4d4d, 0 5px 0 #4d4d4d; top: 0.8px'
      case 'bottom':
        return 'box-shadow: none; top: 0.8px'
      default:
        break
    }
  }}
	transition: .1s ease;
  img {
    transform: rotate(90deg);
  }
`;

export default class Joystick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      JoystickTop: false,
      JoystickRight: false,
      JoystickBottom: false,
      JoystickLeft: false,
      JoystickCenter: false,
    }
  };

  buttonJoystickActive = (key) => {
    switch (key) {
      case 'Left':
        this.buttonJoystickLeft()
        break;
      case 'Top':
        this.buttonJoystickTop()
        break;
      case 'Right':
        this.buttonJoystickRight()
        break;
      case 'Bottom':
        this.buttonJoystickBottom()
        break;
      default:
        console.log("error button Joystick");
        break;
    }
  }

  buttonJoystickTop = () => {
    this.setState({
      JoystickTop: 'top',
      JoystickRight: 'top',
      JoystickBottom: 'top',
      JoystickLeft: 'top',
      JoystickCenter: 'top',
    }, () => {
      setTimeout(() => {
        this.setState({
          JoystickTop: false,
          JoystickRight: false,
          JoystickBottom: false,
          JoystickLeft: false,
          JoystickCenter: false,
        })
      }, 300)
    })
  }
  buttonJoystickRight = () => {
    this.setState({
      JoystickTop: 'right',
      JoystickRight: 'right',
      JoystickBottom: 'right',
      JoystickLeft: 'right',
      JoystickCenter: 'right',
    }, () => {
      setTimeout(() => {
        this.setState({
          JoystickTop: false,
          JoystickRight: false,
          JoystickBottom: false,
          JoystickLeft: false,
          JoystickCenter: false,
        })
      }, 300)
    })
  }
  buttonJoystickBottom = () => {
    this.setState({
      JoystickTop: 'bottom',
      JoystickRight: 'bottom',
      JoystickBottom: 'bottom',
      JoystickLeft: 'bottom',
      JoystickCenter: 'bottom',
    }, () => {
      setTimeout(() => {
        this.setState({
          JoystickTop: false,
          JoystickRight: false,
          JoystickBottom: false,
          JoystickLeft: false,
          JoystickCenter: false,
        })
      }, 300)
    })
  }
  buttonJoystickLeft = () => {
    this.setState({
      JoystickTop: 'left',
      JoystickRight: 'left',
      JoystickBottom: 'left',
      JoystickLeft: 'left',
      JoystickCenter: 'left',
    }, () => {
      setTimeout(() => {
        this.setState({
          JoystickTop: false,
          JoystickRight: false,
          JoystickBottom: false,
          JoystickLeft: false,
          JoystickCenter: false,
        })
      }, 300)
    })
  }
  render() {
    return (
      <Direction>
        <Top onClick={() => this.buttonJoystickActive('Top')} active={this.state.JoystickTop}>
          <img src="./static/images/next.png" />
        </Top>
        <Vertical>
          <Left onClick={() => this.buttonJoystickActive('Left')} active={this.state.JoystickLeft}>
            <img src="./static/images/next.png" />
          </Left>
          <Center active={this.state.JoystickCenter}>
            <div />
          </Center>
          <Right onClick={() => this.buttonJoystickActive('Right')} active={this.state.JoystickRight}>
            <img src="./static/images/next.png" />
          </Right>
        </Vertical>
        <Bottom onClick={() => this.buttonJoystickActive('Bottom')} active={this.state.JoystickBottom}>
          <img src="./static/images/next.png" />
        </Bottom>
      </Direction>
    )
  }
}
