import React, { Component } from 'react'
import styled from 'styled-components'
import logoNinja from "../../img/nome-labeninja.png"
import Button from '@material-ui/core/Button';
import { theme } from '../assets/Theme'
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
  height: 26px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #000072;
  h4{
    padding-left: 1%;
    padding-right: 1%;
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
  height: 96px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
 input{
    width: 25rem;
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
  width:280vh;
  justify-content: space-evenly;
  padding: 2vh;


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
              <img src={logoNinja} alt="logo"/>
            </Logo>

            <Input>
              <input  placeholder='Buscar...'/>
            </Input>
            <ThemeProvider theme={theme}>
            <Botoes>
            <Button variant="contained" color="secondary">Anuncie</Button>
            <Button variant="contained" color="secondary">Encontre</Button>
            </Botoes>
            </ThemeProvider>


          </Header2>



        </ContainerHeader>
      </Main>
    )
  }
}
