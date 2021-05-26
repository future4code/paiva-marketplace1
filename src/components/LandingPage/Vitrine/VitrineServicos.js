import React, { Component } from 'react'
import { useState } from "react";
import styled from 'styled-components'
import { anunciosServicos } from './Anuncio'
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";



const ContainerVitrine = styled.div`
 width: 14%;
  height: 25vh;
  background-color: lightgray;
  color:#000072;

  .Expositor {
    height: 100%;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    border: 3px solid #4D4D81;
    border-radius:9px;
  }
  .DivBotao1 {
    flex: 4%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.0);
    display: grid;
    place-items: center;
    color: #F72163;
    cursor: pointer;
  }
  .DivBotao2 {
    flex: 4%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.0);
    display: grid;
    place-items: center;
    color: #F72163;
    cursor: pointer;
  }
  .Centro {
    flex: 92%;
    height: 100%;
    display: grid;
    place-items: center;
    font-family: Arial, Helvetica, sans-serif;
    text-align: justify;
    text-align-last: center;
  }

  h6 {
    font-size: 0.9rem;
    margin-bottom: 0;
  }

  p {
    font-size: 0.8rem;
    margin-top:0.05rem;
  }

  h6,
  p {
    background-color: rgb(242, 183, 195, 0.8);
    padding: 3px;
    border-radius: 5px;
  }
`

function VitrineServicos() {
  const [currImg, setCurrImg] = useState(0);

  return (
    <ContainerVitrine>
      <a>
      <div  className="Expositor"  style={{ backgroundImage: `url(${anunciosServicos[0].img})` }}>
        
        <div className="DivBotao1"
        onClick={() => {
          currImg > 0 && setCurrImg(currImg - 1)
        }}>
          <ArrowBackIosIcon />
        </div>

        <div className="Centro">
          <h6>{anunciosServicos[currImg].title}</h6>
          <p>{anunciosServicos[currImg].price} <br/> {anunciosServicos[currImg].contact}</p>
          </div>

        <div className="DivBotao2" 
        onClick={() => {
          currImg < anunciosServicos.length - 1 && setCurrImg(currImg + 1)
        }}>

        <ArrowForwardIosIcon />

        </div>

        </div></a>
    </ContainerVitrine>
  );
}
export default VitrineServicos;