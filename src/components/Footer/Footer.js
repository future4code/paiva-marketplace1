import React from "react";
import "./Footer.css";
import styled from 'styled-components'

const Main = styled.div`
  width: 100%;
  height: 20vh;
  background-color: #000072;
  p{
    margin-top:0;
    background-color: #000072;
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
  margin-top:0;
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
  a{
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
    padding-bottom:0;
    color: #D3D3D3;
  }
`

const Contato = styled.div`
padding-bottom:0;`

const RedesSociais = styled.div`
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
          <a href="https://www.instagram.com/" target="_blank"><img border="0" src="./insta.png" /></a>
          <a href="https://www.linkedin.com/" target="_blank"><img border="0" src="./linkedin.png" /></a>
          <a href="https://www.twitter.com/" target="_blank"><img border="0" src="./twt.png" /></a>
          <a href="https://www.facebook.com/" target="_blank"><img border="0" src="./face.png" /></a>
          <a href="https://www.youtube.com/" target="_blank"><img border="0" src="./youtube.png" /></a>
          </Logo>

          <ContainerDireitosContatos>
        
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