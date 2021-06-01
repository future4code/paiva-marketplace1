import Vitrine from "./Vitrininhas/Vitrine";
import VitrineAulas from "./Vitrininhas/VitrineAulas";
import VitrineOutros from "./Vitrininhas/VitrineOutros";
import VitrineServicos from "./Vitrininhas/VitrineServicos";
import styled from "styled-components";
import React from "react";



const ContainerVitrine = styled.div`
display: flex;
justify-content: space-between;
height:auto;
width:100%;
gap:0;
padding:4vh;
`



export class DivVitrine extends React.Component{
 render(){


    return(
        <ContainerVitrine>
            <Vitrine /><VitrineAulas/><VitrineOutros/><VitrineServicos/>
          </ContainerVitrine>
        
    )}
}