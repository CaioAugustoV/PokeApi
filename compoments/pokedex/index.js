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
            <div className="header">
              <div className="border"/>
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
            border: 2px solid;
            border-radius: 20px 20px 0 0;
          }
          .pokedex .left .header{
            height: 20%;
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            background: #000;
            border-radius: 15px 15px 0 0;
            clip-path: polygon(30% 0%, 68% 0, 100% 0, 100% 50%, 65% 50%, 55% 100%, 0 100%, 0 0);
          }
          .pokedex .left .header .border{
            height: 99.2%;
            width: 99.9%;
            background: #e84848;
            border-radius: 20px 20px 0 0;
            clip-path: polygon(30% 0%, 68% 0, 100% 0, 100% 50%, 65% 50%, 55% 100%, 0 100%, 0 0);
          }
          .pokedex .center{
            height: 90%;
            width: 6%;
            background: #e84848;
            border: 2px solid;
            position: absolute;
            z-index: 1;
          }
          .pokedex .right{
            height: 90%;
            width: 48%;
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
            background: #000;
            border: 2px solid;
            clip-path: polygon(30% 0%, 49% 10%, 100% 10%, 100% 100%, 70% 100%, 30% 100%, 0 100%, 0 0);
          }
          .pokedex .right .border{
            height: 99.9%;
            width: 100%;
            clip-path: polygon(30% 0%, 49% 10%, 100% 10%, 100% 100%, 70% 100%, 30% 100%, 0 100%, 0 0);
            background: #e84848;
          }
        `}</style>
      </div>
    )
  }
}
