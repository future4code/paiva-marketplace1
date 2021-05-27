import React from "react";
import styled from 'styled-components'
import Aula from '../../img/aula.png'
import Webdesign from '../../img/webdesign.png'
import Consultoria from '../../img/consultoria.png'
import Suporte from '../../img/suporte.png'
import Servicos from '../../img/servicos.png'
import Reforma from '../../img/reforma.png'

const Main = styled.div`
  display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin-bottom: 10px;
  
    & ul {
        border-bottom: 1px solid #ddd;
        margin: 20px auto;
        display: flex;
        flex-flow: row nowrap;
  }
  & ul li {
        cursor: pointer;
        position: relative;
        padding: 10px 20px;
        color: blue;
        font-size: medium;
        font-weight: bold;
    }
`
const ContainerServicos = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-left: 4rem;
  margin-right: 4rem;
 
 
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
    padding: 5px 0px;
    width: 50px;
    height: 50px;
    cursor: pointer;
  }

`

export default class FiltroServicos extends React.Component {
  render() {
    return (
      <Main >
          

        <ContainerServicos>
        
          <Logo>
              <ul>
            <li><img src= {Aula} alt="Aulas" />Aulas Particulares</li>
            <li><img src={Webdesign} alt="" />Web Design</li>
            <li><img src={Consultoria} alt="" />Consultoria</li>
            <li><img src={Suporte} alt="" />Suporte Técnico</li>
            <li><img src= {Servicos}alt="" />Serviços Domésticos</li>
            <li><img src= {Reforma} alt="" />Reformas</li>
            </ul>
          </Logo>

        </ContainerServicos>
        
      </Main>



    );
  }
}