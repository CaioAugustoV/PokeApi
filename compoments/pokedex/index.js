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
                    <div className="screen">
                    </div>
                    <div className="camera">
                      <div className="item"></div>
                      <div className="item"></div>
                    </div>
                    <div className="itens">
                      <div className="button"></div>
                      <div className="alto-falante">
                        <div className="saida"></div>
                        <div className="saida"></div>
                        <div className="saida"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="buttons">
                  <div className="reset"></div>
                  <div className="voice"></div>
                  <div className="directions">
                    <div className="top">
                      <img className="arrow" src="./static/images/next.png" />
                    </div>
                      <div className="vertical">
                        <div className="button-left">
                          <img className="arrow" src="./static/images/next.png" />
                        </div>
                        <div className="button-center">
                          <div className="icon"/>
                        </div>
                        <div className="button-right">
                          <img className="arrow" src="./static/images/next.png" />                        
                        </div>
                      </div>
                    <div className="bottom">
                      <img className="arrow" src="./static/images/next.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="center"></div>
          <div className="right">
            <div className="border"/>
          </div>
        </div>
        <style jsx>{`
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
            height: 10.2%;
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
            height: 94%;
            width: 95%;
            clip-path: polygon(0 0,100% 0,100% 100%,10% 100%,0 88%);
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
          }
          .pokedex .left .main-left .border .main-screen .border-screen .screen{
            background: #4d4d4d;
            width: 80%;
            height: 75%;
          }
          .pokedex .left .main-left .border .main-screen .border-screen .camera{
            position: absolute;
            top: 4%;
            display: flex;
            flex-direction: row;
          }
          .pokedex .left .main-left .border .main-screen .border-screen .camera .item{
            background: #dfdfdf;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            border: 1px solid #4d4d4d;
            margin: 0 25px;
          }
          .pokedex .left .main-left .border .main-screen .border-screen .itens{
            position: absolute;
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            bottom: 0;
          }
          .pokedex .left .main-left .border .main-screen .border-screen .itens .button{
            background: #e84848;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: 1px solid #4d4d4d;
          }
          .pokedex .left .main-left .border .main-screen .border-screen .itens .alto-falante{}
          .pokedex .left .main-left .border .main-screen .border-screen .itens .alto-falante .saida{
            width: 20px;
            height: 2px;
            background: #4d4d4d;
            border-radius: 50%;
            border: 1px solid #4d4d4d;
            margin: 3px 0;
          }
          .pokedex .left .main-left .border .buttons{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            width: 100%;
          }
          .pokedex .left .main-left .border .buttons .voice{
            background: #22b598;
            width: 100px;
            height: 40px;
            border: 3px solid #444d4c;
            border-radius: 15px;
          }
          .pokedex .left .main-left .border .buttons .reset{
            background: #4d4d4d;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 3px solid #4b4b4b;
          }
          .pokedex .left .main-left .border .buttons .directions{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .pokedex .left .main-left .border .buttons .directions .vertical{
            display: flex;
            flex-direction: row;
          }
          .pokedex .left .main-left .border .buttons .directions .top{
            background: #666666;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 6px 6px 0 0;
            border-top: 1px solid #4b4b4b;
            border-right: 1px solid #4b4b4b;
            border-bottom: 0 solid #4b4b4b;
            border-left: 1px solid #4b4b4b;
          }
          .pokedex .left .main-left .border .buttons .directions .top .arrow{
            transform: rotate(270deg);
          }
          .pokedex .left .main-left .border .buttons .directions .bottom{
            background: #666666;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 0 0 6px 6px;
            border-top: 0 solid #4b4b4b;
            border-right: 1px solid #4b4b4b;
            border-bottom: 1px solid #4b4b4b;
            border-left: 1px solid #4b4b4b;
          }
          .pokedex .left .main-left .border .buttons .directions .bottom .arrow{
            transform: rotate(90deg);
          }
          .pokedex .left .main-left .border .buttons .directions .button-center{
            background: #666666;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-top: 1px solid #666666;
            border-right: 1px solid #666666;
            border-bottom: 1px solid #666666;
            border-left: 1px solid #666666;
          }
          .pokedex .left .main-left .border .buttons .directions .button-center .icon{
            height: 15px;
            width: 15px;
            background: #656565;
            border-radius: 50%;
            border: 1px solid #4b4b4b;
          }
          .pokedex .left .main-left .border .buttons .directions .button-left{
            background: #666666;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 6px 0 0 6px;
            border-top: 1px solid #4b4b4b;
            border-right: 0 solid #4b4b4b;
            border-bottom: 1px solid #4b4b4b;
            border-left: 1px solid #4b4b4b;
          }
          .pokedex .left .main-left .border .buttons .directions .button-left .arrow{
            transform: rotate(180deg);
          }
          .pokedex .left .main-left .border .buttons .directions .button-right{
            background: #666666;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 0 6px 6px 0;
            border-top: 1px solid #4b4b4b;
            border-right: 1px solid #4b4b4b;
            border-bottom: 1px solid #4b4b4b;
            border-left: 0 solid #4b4b4b;
          }
          .pokedex .left .main-left .border .buttons .directions .button-right .arrow{}
          .pokedex .left .main-left .border .buttons .arrow{
            width: 15px;
          }
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
