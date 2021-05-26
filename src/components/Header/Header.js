import React, { Component } from 'react'
import styled from 'styled-components'

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
  margin-left: 4rem;
`

const Input = styled.div`
  input{
    width: 480px;
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
  width: 240px ;
  display: flex;
  justify-content: space-between;
  padding-right: 4rem;
  button{
    width: 100px;
    height: 26px;
    background: #AC1768;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 6px;
    &:hover{
      background: #F72163;

    }
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
              <h1>🥷 LabeNinjas</h1>
            </Logo>

            <Input>
              <input  placeholder='Buscar...'/>
            </Input>

            <Botoes>
              <button>Anuncie</button>
              <button>Encontre</button>
            </Botoes>



          </Header2>



        </ContainerHeader>
      </Main>
    )
  }
}
