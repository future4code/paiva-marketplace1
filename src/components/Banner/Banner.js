import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { banners } from "./Images";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const ContainerBanner = styled.div`
  width: 100%;
  margin: 10px auto;
  height: 280px;

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
    display: grid;
    place-items: center;
  }
  .BotaoEsquerda:hover {
    color: #b7b7c3;
    cursor: pointer;
    background-color: rgb(183, 183, 195, 0.2);
  }

  .Centro {
    flex: 92%;
    height: 100%;
    display: grid;
    place-items: center;
  }

  .BotaoDireita {
    flex: 4%;
    height: 100%;
    display: grid;
    place-items: center;
  }

  .BotaoDireita:hover {
    color: #b7b7c3;
    cursor: pointer;
    background-color: rgb(183, 183, 195, 0.2);
  }
`;

function Banner() {
  const [currImg, setCurrImg] = useState(0);

  return (
    <ContainerBanner>
      <div
        className="BannerImg"
        style={{ backgroundImage: `url(${banners[currImg].img})` }}
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
            currImg < banners.length - 1 && setCurrImg(currImg + 1);
          }}
        >
          <ArrowForwardIosIcon style={{ fontSize: 30 }} />
        </div>
      </div>
    </ContainerBanner>
  );
}
export default Banner;