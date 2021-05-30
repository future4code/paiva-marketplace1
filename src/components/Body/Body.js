import React from "react";
import styled from 'styled-components'
import Banner from "../Banner/Banner"
import { DivVitrine } from "../LandingPage/Vitrine/DivVitrine"




const Main = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
  font-family: 'Playfair Display', serif;
  margin: 0rem;
  h1{
    color: #000;
  }
`

const Produtos = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  flex-direction: column;
  margin: 0 auto;
  caixaProduto{
    width: 180px;
    height: 160px;
    background-color: #c4c4c4;
  }
  h1 {
    padding-left: 4vh;
    text-align: start;
    font-weight: 800;
  }
`

const SobreNos = styled.div`
  width: 80%;
  display: flex;
  margin: 5% auto;
  justify-content: space-between;
  img{
    width: 20%;
  }
`

const Texto = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
  display: flex;
  flex-direction: column;
  width: 50%;
  h3{
    width: 100%;
    font-size: 1rem;
    font-family: 'Playfair Display', serif;
    padding: 0;
  }

`
export default class Body extends React.Component {
  render() {
    return (

      <Main>
        <Banner />
        <Produtos>
          <DivVitrine />
        </Produtos>
        <SobreNos>
          <Texto>
            <h1>Sobre Nós</h1>
            <h3 >A LabeNinja é uma empresa que vende trabalhos, é a maior vendedora no mercado atualmente e estamos no mercado desde 2005, nosso diferencial é a agilidade em passar as informações do cliente para o funcionário e assim uma rapidez para maior satisfação do cliente. </h3>
          </Texto>
          <img className="SobreImage" src='./icone-ninja3.png' alt="" />
        </SobreNos>
      </Main>


    );
  }
}
