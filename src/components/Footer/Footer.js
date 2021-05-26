import React, { Component } from "react";
import "./Footer.css";
import styled from 'styled-components'
import logoNinja from "../../img/icone-ninja3.png"
const Main = styled.div`
  width: 100%;
  height: 20vh;
  background-color: #000000;


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
  p{
    color:white;
  }
`

const Pagamento = styled.div`
`

const DireitosETermos = styled.div`
  h4{
      color: #D3D3D3;
    }
`

const Contato = styled.div`
  h4{
    color: #D3D3D3;
  }
`


export default class Footer extends React.Component {
  render() {
    return (


    <Main >
      <ContainerFooter>
        <Logo>

          <img src={logoNinja}/>
        </Logo>

        <Pagamento>
          <img src='./pagamento.png' alt='Formas de pagamento'/>
        </Pagamento>

        <DireitosETermos>
          <h4>Direitos Autorais</h4>
          <h4>Termos e serviços </h4>
        </DireitosETermos>

        <Contato>
        <h4>Contatos</h4>
          <h4>labeNinjas@ninjas.com</h4>
          <h4>São Paulo/SP - Brasil</h4>
        </Contato>
        
      </ContainerFooter>
    </Main>



    );
  }
}