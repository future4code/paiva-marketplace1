import React, { Component } from "react";
import "./Footer.css";
import styled from 'styled-components'

const Main = styled.div`
  width: 100%;
  height: 20vh;
  background-color: #000;


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


`

const Logo = styled.div`
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


export class Footer extends Component {
  render() {
    return (

      


    <Main >
      <ContainerFooter>
        <Logo>
          <p>LOGO AQUI!</p>
          <img src={null} alt=""/>
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