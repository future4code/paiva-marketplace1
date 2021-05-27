import React, { Component } from 'react'
import styled from 'styled-components'
import logoNinja from "../../img/nome-labeninja.png"
import Button from '@material-ui/core/Button';
import { theme } from './Theme.js'
import { ThemeProvider } from '@material-ui/styles';



const Main = styled.div`
  width: 100%;
`

const ContainerHeader = styled.div`
  width: 100%;
  height: 120px;
  border-bottom: 2px solid #6F6F87;
`
const Header1 = styled.div`
  width: 100%;
  /* height: 4rem; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #000072;
  h4{
    padding: 1%;
    color: white;
    cursor: pointer;
    &:hover{
      background: #4D4D81;
    }
  }
  
`
const H1 = styled.h4`
  margin-right: 4rem;
`

const Header2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header2-container{
    display: flex;
    align-items: flex-start;
  }
`

const Logo = styled.div`
padding: 2vh;
  margin-left: 1rem;
  img{
    height: 50px;
  }
`

const Input = styled.div`
 padding: 2vh;
 align-items: center;
 display: flex;
 justify-content: center;
 width: 80%;
 input{
    width: 80%;
    height: 26px;
    padding-left: 1rem;
    font-weight: bold;
    border: 1px solid #B7B7C3;
    &:focus {
  border-color: #cccccc;
  outline: 0;
  -webkit-box-shadow: none;
          box-shadow: none;
    }
  }

`

const Botoes = styled.div`
display: flex;
margin-right: 4rem;
  justify-content: center;
  button{
    margin-left: 4px;
  }
`

export default class Header extends React.Component {


  render() {
    return (
      <Main>
        <ContainerHeader>
          <Header1>
            <h4>HOME</h4>
            <h4>CARRINHO</h4>
            <H1>LOGIN</H1>
          </Header1>

          <Header2>
            <Logo>
              <img src={logoNinja} alt="logo" />
            </Logo>

            <Input>
              <input placeholder='Buscar...' />
            </Input>
            <div className="header2-container">
              <ThemeProvider theme={theme}>
                <Botoes>
                  <Button variant="contained" color="secondary">Anuncie</Button>
                  <Button variant="contained" color="secondary">Encontre</Button>
                </Botoes>
              </ThemeProvider>
            </div>
          </Header2>
        </ContainerHeader>
      </Main>
    )
  }
}
