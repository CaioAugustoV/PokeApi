import React, { Component } from 'react'
import MainDesktop from '../compoments/pokedex/index'

export default class index extends Component {
  render() {
    return (
      <div>
        <MainDesktop />
        <style jsx global>{`
          body{
            padding: 0;
            margin: 0;
          }
        `}</style>
      </div>
    )
  }
}

