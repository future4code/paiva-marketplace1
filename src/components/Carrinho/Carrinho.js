import React, { Component } from "react";
import {CardCarrinho, PrecoTotal, DisplayFlex, FlexColumn, FlexRow, FlexRowSepara, ImgCart} from "./styled"

export default class Carrinho extends Component {
  state ={
    listaDeCompras: [
      {title:"Cortar a grama",
      description:"Manutenção em áreas verdes de até 1000 metros quadrados.",
      price:40,
      paymentMethods:["PayPal", "boleto"],
      dueDate:"2021-12-30",
      taken: false},
      {title:"Cortar a grama2",
      description:"Manutenção em áreas verdes de até 1200 metros quadrados.",
      price:50,
      paymentMethods:["PayPal", "boleto"],
      dueDate:"2021-12-10",
      taken: false}
    ]
  }
  render() {
  const mostracarrinho = this.state.listaDeCompras.map((produto)=>{
    return (
      <FlexRow>
          <ImgCart src = "" alt="imagem"/>
          <FlexColumn>
        <p>Titulo do produto:{produto.title}</p>
        <FlexRowSepara>
        <p>Preço: R${produto.price}</p>
        <p>Pagamentos aceitos:{produto.paymentMethods}</p>
        </FlexRowSepara>
        </FlexColumn>
      </FlexRow>
    )
  })
    console.log(this.state.listaDeCompras)
    return (
      <CardCarrinho>

        <div>
          {mostracarrinho}
        </div>

        <PrecoTotal>
        <p>Prazo</p>
        <p>Valor Total</p>
        <button>Finalizar compra</button>
        </PrecoTotal>
      </CardCarrinho>

    );
  }
}
