import React, { Component } from "react";
import { useState } from "react";
import styled from "styled-components";
import { banners } from "./Images";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const ContainerBanner = styled.div`
  width: 85%;
  height: 300px;
  background-color: black;

  .BannerImg {
    height: 100%;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
  }

.BotaoEsquerda {
    flex: 4%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.6);
    display: grid;
    place-items: center;
    color: white;
    cursor: pointer;
  }

.Centro {
    flex: 92%;
    height: 100%;
    display: grid;
    place-items: center;
  }

.BotaoDireita{
    flex: 4%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.6);
    display: grid;
    place-items: center;
    color: white;
    cursor: pointer;
  }

`;

function Banner() {
  const [currImg, setCurrImg] = useState(0);

  return (
    <ContainerBanner>
      <div
        className="BannerImg"
        style={{ backgroundImage:`url(${banners[currImg].img})` }}
      >
        
        <div
          className="BotaoEsquerda"
          onClick={() => {
           currImg > 0 && setCurrImg(currImg - 1);
          }}
        >          
          <ArrowBackIosIcon style={{ fontSize: 30 }} />
        </div>
<div className="Centro"></div>
        <div
          className="BotaoDireita"
          onClick={() => {
           currImg < banners.length -1 && setCurrImg(currImg + 1);
          }}
        >
          <ArrowForwardIosIcon style={{ fontSize: 30 }} />
        </div>
      </div>
    </ContainerBanner>
  );
}
export default Banner;