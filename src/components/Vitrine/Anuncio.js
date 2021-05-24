import React, { Component } from 'react'
import styled from 'styled-components'

const AnuncioContainer = styled.div`
align-items: center;
display:flex;
flex-direction: column;
`
const AnuncieAqui = styled.div`
text-align: center;
`
const Marketing = styled.div`
`
const Gratis = styled.div`
margin-top: 40px;
`

export default class Anuncio extends React.Component{
    render (){

        return(
            <AnuncioContainer>
           
            <AnuncieAqui>
                <h3>Seu Serviço ou Produto aqui !!</h3>
            </AnuncieAqui>
            <Marketing>
               <b> Fácil e Rápido</b>
            </Marketing>
            <Gratis>
                Anúncie Grátis
            </Gratis>

             </AnuncioContainer>
        )
    }
}