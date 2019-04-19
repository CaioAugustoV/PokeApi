import React, { Component } from 'react'
import Pokedex from '../compoments/Pokedex/index'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`

export default class index extends Component {
  render() {
    return ( 
      <React.Fragment>
        <GlobalStyle/>
        <Pokedex />
      </React.Fragment>
    )
  }
}
