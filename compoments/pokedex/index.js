import React, { Component } from 'react'

export default class index extends Component {
  constructor(props){
    super(props)
    this.state = {
      pokemon: [],
    }
  }
  
  getPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/1/")
    .then(res => res.json())
    .then( (result) => {
        this.setState({
          pokemon: result
        });
      })
  }
  render() {
    console.log(this.state.pokemon)
    return (
      <div className="main">
        <div className="pokedex">
          <div className="left">
            {/* HEADER-LEFT */}
            <div className="header">
              <div className="border">
                <div className="loading"></div>
                <div className="types">
                  <div className="type one"></div>
                  <div className="type two"></div>
                  <div className="type three"></div>
                </div>
              </div>
            </div>
            {/* MAIN-LEFT */}
            <div className="main-left">
              <div className="main-complement"/>
              <div className="border">
                <div className="border-complement"/>
                <div className="main-screen">
                  <div className="border-screen">
                  
                  </div>
                </div>
                <div className="test"></div>
              </div>
            </div>
          </div>
          <div className="center"></div>
          <div className="right">
            <div className="border"/>
          </div>
        </div>
        <style jsx>{`
          .test{
            width: 10%;
            height: 15%;
            background: antiquewhite;
          }
          .main{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            width: 100vw;
          }
          .pokedex{
            height: 80vh;
            width: 60vw;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            position: relative;
          }
          .pokedex .left{
            height: 100%;
            width: 48%;
            background: #e84848;
            border: 10px solid #4d4d4d;
            border-radius: 22px 22px 0 0;
          }
          .pokedex .left .header{
            height: 20%;
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            background: #4d4d4d;
            border-radius: 22px 22px 0 0;
            clip-path: polygon(30% 0%,68% 0,100% 0,100% 50%,68% 50%,57% 92%,0 92%,0 0);
          }
          .pokedex .left .header .border{
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            height: 80%;
            width: 100%;
            background: #e84848;
            border-radius: 20px 20px 0 0;
            clip-path: polygon(30% 0%, 68% 0, 100% 0, 100% 50%, 65% 50%, 55% 100%, 0 100%, 0 0);
          }
          .pokedex .left .header .border .loading{
            width: 40px;
            background: #23b1c7;
            height: 40px;
            border-radius: 50%;
            border: 2px solid #f0f4f5;
            margin-left: 4%;
            margin-top: 3%;
          }
          .pokedex .left .header .border .types{
            display: flex;
            flex-direction: row;
            margin-left: 1%;
            margin-top: 3%;
          }
          .pokedex .left .header .border .types .type{
            width: 15px;
            height: 15px;
            border-radius: 50%;
            border: 2px solid #000;
            margin: 0 4px;
          }
          .pokedex .left .header .border .types .one{
            background: #22b598;
          }
          .pokedex .left .header .border .types .two{
            background: #fcee6b;
          }
          .pokedex .left .header .border .types .three{
            background: #e8484a;
          }
          .pokedex .left .main-left{
            width: 90%;
            height: 78%;
            margin-left: 2%;
            background: #4d4d4d;
            position: relative;
            display: flex;
            align-items: center;
          }
          .pokedex .left .main-left .main-complement{
            background: #4d4d4d;
            position: absolute;
            width: 50%;
            height: 10%;
            clip-path: polygon(100% 0,100% 0,100% 100%,75% 100%,25% 100%,0 225%,50% 0);
            right: 0;
            top: -10%;
          }
          .pokedex .left .main-left .border{
            width: 96%;
            height: 97.5%;
            margin-left: 2%;
            background: #e84848;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
          }
          .pokedex .left .main-left .border .border-complement{
            background: #e84848;
            position: absolute;
            width: 50%;
            height: 11%;
            clip-path: polygon(100% 0,100% 0,100% 100%,75% 100%,25% 100%,0 225%,55% 0);
            right: 0;
            top: -10%;
          }

          .pokedex .left .main-left .border .main-screen{
            display: flex;
            align-items: center;
            justify-content: center;
            background: #4d4d4d;
            height: 40%;
            width: 80%;
            clip-path: polygon(0 0,100% 0,100% 100%,10% 100%,0 88%);
          }
          .pokedex .left .main-left .border .main-screen .border-screen{
            background: #e6e6e6;
            height: 68%;
            width: 76%;
            padding: 10%;
            clip-path: polygon(0 0,100% 0,100% 100%,10% 100%,0 88%);
          }
          .pokedex .left .main-left .border .main-screen{}
          .pokedex .left .main-left .border .main-screen{}
          .pokedex .left .main-left .border .main-screen{}
          .pokedex .center{
            height: 90%;
            width: 6%;
            background: #e84848;
            border: 10px solid #4d4d4d;
            position: absolute;
            z-index: 1;
          }
          .pokedex .right{
            height: 90%;
            width: 48%;
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
            background: #4d4d4d;
            border: 10px solid #4d4d4d;
            clip-path: polygon(30% 0%, 49% 10%, 100% 10%, 100% 100%, 70% 100%, 30% 100%, 0 100%, 0 0);
          }
          .pokedex .right .border{
            height: 99.9%;
            width: 100%;
            clip-path: polygon(26% 0%,47% 11%,100% 11%,100% 100%,70% 100%,30% 100%,0 100%,0 0);
            background: #e84848;
          }
        `}</style>
      </div>
    )
  }
}
