import React, { Component } from 'react'
import Pokedex from '../compoments/Pokedex/index'

import { connect } from 'react-redux'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`

class index extends Component {
  render() {
    return ( 
      <React.Fragment>
        <GlobalStyle/>
        <Pokedex />
      </React.Fragment>
    )
  }
}

export default connect()(index)