import React, { Component } from 'react'
import Header from './Header/Header'
import Body from './Body/Body'
import Trabalho from './Trabalho/Trabalho'
import Talento from './Talento/Talento'

export class AppContainer extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Trabalho />
        <Talento />
      </div>
    )
  }
}
