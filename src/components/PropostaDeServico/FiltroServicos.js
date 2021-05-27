import React from "react";
import styled from 'styled-components'
import aula from '../../img/aula.png'
import webdesign from '../../img/webdesign.png'
import consultoria from '../../img/consultoria.png'
import suporte from '../../img/suporte.png'
import servicos from '../../img/servicos.png'
import reforma from '../../img/reforma.png'

const Main = styled.div`
  display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin-bottom: 80px;
  
  p{
    font-size: 0.6rem;
    text-align: center;
    color: white;
  }
`
const ContainerServicos = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-left: 4rem;
  margin-right: 4rem;
  h4{
    padding: 1%;
    color: white;
    cursor: pointer;
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
  position: relative;
  padding: 10px 20px;

  img{
    padding: 5px 80px;
    width: 50px;
    height: 50px;
    cursor: pointer;
  }

`

export default class FiltroServicos extends React.Component {
  render() {
    return (
      <Main >
          <h4>TESTE</h4>
          <h4>TESTE</h4>
          <h4>TESTE</h4>
          <h4>TESTE</h4>
          <h4>TESTE</h4>

        <ContainerServicos>
        
          <Logo>
            <img src={aula} alt="" />
            <img src={webdesign} alt="" />
            <img src={consultoria} alt="" />
            <img src={suporte} alt="" />
            <img src= {servicos}alt="" />
            <img src= {aula} alt="" />
          </Logo>

        </ContainerServicos>
        
      </Main>



    );
  }
}