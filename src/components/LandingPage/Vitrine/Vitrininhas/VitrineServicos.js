import React from 'react'
import { useState } from "react";
import styled from 'styled-components'
import { anunciosWeb } from '../Anuncio'
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";



const ContainerVitrine = styled.div`
 width: 19%;
  height: 35vh;
  color:#000072;

  .Expositor {
    height: 100%;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    border: 3px solid #000072;
    border-radius:2px;
    border-radius:5px;
    box-shadow: 5px 5px 5px 5px #DCDCDC;
  }
  .DivBotao1 {
    flex: 4%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.0);
    display: grid;
    place-items: center;
    color: #b7b7c3;
    cursor: pointer;
  }
  .DivBotao1:hover{
    color:#F72163
  }
  .DivBotao2:hover{
    color:#F72163
  }

  .DivBotao2 {
    flex: 4%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.0);
    display: grid;
    place-items: center;
    color: #b7b7c3;
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
    margin-top:1.5rem;
    font-size: 0.9rem;
    margin-bottom: 0;
  }

  p {
    font-size: 0.8rem;
    margin-top:0.03rem;
  }

  h6,
  p {
    background-color: rgb(242, 183, 195, 0.8);
    padding: 3px;
    border-radius: 2px;
  }
`

function VitrineServicos() {
  const [currImg, setCurrImg] = useState(0);

  return (
    <ContainerVitrine>
      <a>
      <div  className="Expositor"  style={{ backgroundImage: `url(${anunciosWeb[0].img})` }}>
        
        <div className="DivBotao1"
        onClick={() => {
          currImg > 0 && setCurrImg(currImg - 1)
        }}>
          <ArrowBackIosIcon />
        </div>

        <div className="Centro">
          <h6>{anunciosWeb[currImg].title}</h6>
          <p>{anunciosWeb[currImg].price} <br/> {anunciosWeb[currImg].contact}</p>
          </div>

        <div className="DivBotao2" 
        onClick={() => {
          currImg < anunciosWeb.length - 1 && setCurrImg(currImg + 1)
        }}>

        <ArrowForwardIosIcon />

        </div>

        </div></a>
    </ContainerVitrine>
  );
}
export default VitrineServicos;