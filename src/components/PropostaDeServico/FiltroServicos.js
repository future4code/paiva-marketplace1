import React from "react";
import styled from 'styled-components'

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
        <ContainerServicos>
          
          <Logo>
            <img src='./aula.png' alt="" />
            <img src='./web-desgin.png' alt="" />
            <img src='./consultoria.png' alt="" />
            <img src='./suporte-tecnico.png' alt="" />
            <img src='./servicos-domesticos.png' alt="" />
            <img src='./reforma.png' alt="" />
          </Logo>

        </ContainerServicos>
        
      </Main>



    );
  }
}