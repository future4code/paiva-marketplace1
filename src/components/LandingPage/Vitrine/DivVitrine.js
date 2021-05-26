import Vitrine from "./Vitrine";
import VitrineAulas from "./VitrineAulas";
import VitrineOutros from "./VitrineOutros";
import VitrineServicos from "./VitrineServicos";
import styled from "styled-components";
import React from "react";


const ContainerVitrine = styled.div`
display: flex;
justify-content: space-evenly;
height:auto;
width:100%;
gap:0;
`

export class DivVitrine extends React.Component{
render(){


    return(
        <ContainerVitrine>
            <Vitrine/><VitrineAulas/><VitrineOutros/><VitrineServicos/>
        </ContainerVitrine>
        
    )}
}