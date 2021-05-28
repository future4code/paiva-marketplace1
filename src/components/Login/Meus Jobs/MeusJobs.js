import React, { Component } from "react";

import { CardCarrinho, FlexR, ImgCart, FlexColuna, MostraCarrinho, Container, } from "./styled"


export default class MeusJobs extends Component {
  state = {
    listaDeCompras: [
      {
        title: "Cortar a grama",
        description: "Manutenção em áreas verdes de até 1000 metros quadrados.",
        price: 40,
        paymentMethods: ["PayPal", "boleto"],
        dueDate: "2021-12-30",
        taken: false,
      },
      {
        title: "Cortar a grama2",
        description: "Manutenção em áreas verdes de até 1200 metros quadrados.",
        price: 50,
        paymentMethods: ["PayPal", "boleto"],
        dueDate: "2021-12-10",
        taken: false,
      },
    ],
  };
  render() {
  const mostracarrinho = this.state.listaDeCompras.map((produto)=>{
    return (
      <FlexR>
        <Container>
          <ImgCart src = "" alt="imagem"/>
          <FlexColuna>
          <h1>Serviço: {produto.title}</h1>
          <FlexR>
          <h1>Preço: R$ {produto.price}</h1>
          </FlexR>
        </FlexColuna>
      </Container>

      </FlexR>
    )
  })
    return (
      <FlexR>
        
        <CardCarrinho>
        <h2>Histórico de serviços contratados:</h2>
        <br/>
          <MostraCarrinho>
            {mostracarrinho}
          </MostraCarrinho>
         
        </CardCarrinho>

        <CardCarrinho>
        <h2>Meus anuncios:</h2>
        <br/>
          <MostraCarrinho>
            {mostracarrinho}
          </MostraCarrinho>
  
        </CardCarrinho>


      </FlexR>
    );
  }
}