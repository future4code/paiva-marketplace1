import React, { Component } from 'react'
import styled from 'styled-components'
import Anuncio from './Anuncio'
import ButtonRight from './img/buttonright.png'
import ButtonLeft from './img/buttonleft.png'
import './Vitrine.css'

const ContainerVitrine = styled.div`
width: 25%;
height: 60vh;
background-color: lightgray;
align-items: center;
justify-content: center;
display: grid;
grid-template-columns:10%, 80%,10%;
grid-template-rows:1fr,1fr,1fr;
`
const Expositor = styled.div`
border: 1px solid black;
width: 100%;
height: 99.5%;
grid-column: 2/3;
grid-row:1;

`
const DivBotao1=styled.div`
    grid-column: 1/2;
 `
 const DivBotao2 = styled.div `
    grid-column: 3/4;

`


export default class Vitrine extends React.Component{
    render (){

        return (
          <ContainerVitrine>
              <DivBotao1>
              <a>
                <img  className="Botao1" src={ButtonLeft} />
              </a>
              </DivBotao1>
              <DivBotao2>
              <a>
                <img className="Botao2" src={ButtonRight} />
              </a>
              </DivBotao2>
              <Expositor>
              <Anuncio />
            </Expositor>
          </ContainerVitrine>
        );
    }
}