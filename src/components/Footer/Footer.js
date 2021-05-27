import React, { Component } from "react";
import "./Footer.css";
import styled from 'styled-components'
import logoNinja from "../../img/icone-ninja3.png"
const Main = styled.div`
  width: 100%;
  height: 20vh;
  background-color: #000072;
  p{
    font-size: 0.6rem;
    text-align: center;
    color: white;
  }
`
const ContainerFooter = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-left: 4rem;
  margin-right: 4rem;
  h4{
    color:#D3D3D3
  }
img {
  height: 100px;
}
`

const Logo = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 500px;
  img{
    width: 50px;
    height: 50px;
    cursor: pointer;
  }

`

const ContainerDireitosContatos = styled.div`
  display: flex;
  justify-content: space-around;
  width: 500px;
  padding-top: 3vh;
  h4{
    padding: 1vh;
    cursor: pointer;
    color: #D3D3D3;
  }
`

const DireitosETermos = styled.div``
const Contato = styled.div``

const RedesSociais = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 1vh;
  width: 400px;
`

export default class Footer extends React.Component {
  render() {
    return (


    <Main >
      <ContainerFooter>
        <Logo>
            <img src='./insta.png' href='https://www.instagram.com/'/>
            <img src='./linkedin.png' href='https://www.linkedin.com/'/>
            <img src='./twt.png' href='https://twitter.com/'/>
            <img src='./face.png' href='https://www.facebook.com/'/>
            <img src='./youtube.png' href='https://www.youtube.com/'/>
        </Logo>

        <ContainerDireitosContatos>
          <DireitosETermos>
            <h4>Direitos Autorais</h4>
            <h4>Termos e serviços </h4>
          </DireitosETermos>
          <Contato>
          <h4>Contatos</h4>
            <h4>labeNinjas@ninjas.com</h4>
            <h4>São Paulo/SP - Brasil</h4>
          </Contato>
        </ContainerDireitosContatos>
      </ContainerFooter>
      <p>©2005 - 2021, labeNinjas Serviços de Internet. São Paulo/SP - Brasil</p>
    </Main>



    );
  }
}