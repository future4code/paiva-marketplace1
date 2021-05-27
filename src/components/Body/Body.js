import React, { Component } from "react";
import "./Body.css";
import styled from 'styled-components'
import Banner from "../Banner/Banner"
import {DivVitrine} from "../LandingPage/Vitrine/DivVitrine"




const Main = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
  font-family: 'Playfair Display', serif;
  margin: 0rem;
  h1{
    color: #000000;
  }
`

const Produtos = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  caixaProduto{
    width: 180px;
    height: 160px;
    background-color: #c4c4c4;
  }
`

const SobreNos = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 10% ;
  img{
    width: 43%;
    margin: 4vh;
  }
`

const Texto = styled.div `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
  display: flex;
  flex-direction: column;
  width: 50%;
  margin:4vh;
  h3{
    width: 100%;
    font-size: 1.5rem;
    font-family: 'Playfair Display', serif;
    padding: 0;
  }

`
export default class Body extends React.Component {
  render() {
    return (

     
      <Main>
        <Banner/>
        <h1>Produtos</h1>
        <Produtos>
          {/* <caixaProduto>Oie1</caixaProduto>
          <caixaProduto>Oie1</caixaProduto>
          <caixaProduto>Oie1</caixaProduto>
          <caixaProduto>Oie1</caixaProduto> */}
          <DivVitrine/>
        </Produtos>

        <SobreNos>
          <Texto>
            <h1>Sobre Nós</h1>
            <h3 >A LabeNinja é uma empresa que vende trabalhos, é a maior vendedora no marcado atualmente e estamos no mercado desde 2005, nosso diferencial é a agilidade em passar as informações do cliente para o funcionário e assim uma rapidez para maior satisfação do cliente. </h3>
          </Texto>
            <img className="SobreImage" src='./ninjaSobreNos.jpg'/>
        </SobreNos>
      </Main>


    );
  }
}
