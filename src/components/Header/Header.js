import React, { Component } from 'react'
import "./Header.css"
export default class Header extends Component {
  render() {
    return (
      <div>
        <header className='containerHeader'>
          <h1 className='VAI-SER-LOGO'>LabeNinja</h1>
          <nav className='containerNaveHeader'>
            <a className='botaoNav'>Home </a>
            <a className='botaoNav'>Sobre nós </a>
            <a className='botaoNav'>LogIn</a>

          </nav>

        </header>
      </div>
    )
  }
}
