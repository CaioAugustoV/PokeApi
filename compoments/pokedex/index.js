import React, { Component } from 'react'

export default class index extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoaded: true,
      pokemon: [],
      error: '',
    }
  }
  
  getPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/1/")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          pokemon: result
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  render() {
    console.log(this.state.pokemon)
    return (
      <div className="main">
        <div className="pokedex">
          <div className="left">
            <div className="phone">
              <div className="screen">
                <img src={this.state.pokemon.sprites ? this.state.pokemon.sprites.front_default : ''} />
                <p>{this.state.pokemon.name ? this.state.pokemon.name : ''}</p>
              </div>
              <div className="button" onClick={ () => this.getPokemon()}/>
            </div>
          </div>
          <div className="center"></div>
          <div className="right">
            <div className="frame-green">
              <p>Type: {this.state.pokemon.types ? this.state.pokemon.types.map( types => <span key={types.type.name}>{`${types.type.name} `}</span> ) : ''}</p>
              <p>Ability: {this.state.pokemon.abilities ? this.state.pokemon.abilities.map( abilities => <span key={abilities.ability.name}>{`${abilities.ability.name} `}</span> ) : ''}</p>
              <p>ID: <span>{this.state.pokemon.id ? this.state.pokemon.id : ''}</span></p>
            </div>
            <div className="space" />
            <div className="buttons-types">
              <div className="types">
                <div className="one"/>
                <div className="two"/>
                <div className="three"/>
              </div>
              <div className="buttons">
                <div className="next">
                  <p>Prev.</p>
                </div>
                <div className="prev">
                  <p>Next</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          img{
            width: 60%;
          }
          .main{
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .pokedex{
            height: 90vh;
            width: 60vw;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
          }
          .pokedex .left{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 90vh;
            width: 45%;
            background: linear-gradient(to right, rgba(139,0,0,1) 0%, rgba(186,13,13,1) 100%);
            border-radius: 4vw 0 0 4vw;
          }
          .pokedex .center{
            height: 90vh;
            background: linear-gradient(to right, rgba(142,0,0,1) 0%, rgba(191,12,12,1) 50%, rgba(142,0,0,1) 100%);
            width: 9%;
          }
          .pokedex .right{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 90vh;
            width: 45%;
            background: linear-gradient(to right, rgba(186,13,13,1) 0%, rgba(139,0,0,1) 100%);
            border-radius: 0 4vw 4vw 0;
          }
          .pokedex .buttons-types{
            width: 91%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .pokedex .left .phone{
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 85%;
            width: 90%;
            padding-top: 10%;
            background: #181818;
            border-radius: 18px;
          }
          .pokedex .left .phone .screen{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: #fff;
            height: 85%;
            width: 90%;
          }
          .pokedex .left .phone .button{
            border-radius: 50%;
            height: 4vw;
            width: 4vw;
            background: #1f1e1e;
            margin-top: 2vh;
            border: 1px solid;
          }
          .pokedex .right .frame-green{
            background: #57e313;
            width: 75%;
            height: 30%;
            border-radius: 15px;
            padding: 2% 8%;
          }
          .pokedex .right .types{
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            width: 91%;
          }
          .pokedex .right .types div{
            background: #e3e3e3;
            width: 15px;
            height: 15px;
            margin: 15px 5px;
            border-radius: 100%;
            border: 1px solid;
          }
          .pokedex .right .buttons{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            width: 91%;
            height: 6vh;            
          }
          .pokedex .right .buttons div{
            width: 45%;
            height: 100%;
            background: #e3e3e3;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .pokedex .right .buttons .next{
            border-radius: 10px 5px 5px 10px;
          }
          .pokedex .right .buttons .prev{
            border-radius: 5px 15px 15px 5px;
          }
          .space{
            height: 2vh;
          }
        `}</style>
      </div>
    )
  }
}
