import React, { Component } from "react";
import { CardCarrinho, PrecoTot, FlexR, ImgCart, FlexColuna } from "./styled"

export default class MeusJobs extends Component {
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
      <FlexR>
          <ImgCart src = "" alt="imagem"/>
          <FlexColuna>
        <p>Titulo do produto:{produto.title}</p>
        <FlexR>
        <p>Preço: R${produto.price}</p>
        <p>Pagamentos aceitos:{produto.paymentMethods}</p>
        </FlexR>
        </FlexColuna>
      </FlexR>
    )
  })
    return (
      <FlexR>
        <CardCarrinho>
        <h2>Aqui os serviços contratados</h2>
        <br/>
          <div>
            {mostracarrinho}
          </div>
          <PrecoTot>
          <p>Prazo</p>
          <p>Valor Total</p>
          <button>Finalizar compra</button>
          </PrecoTot>
        </CardCarrinho>
        <CardCarrinho>
        <h2>Aqui pode ser qqer coisa, da pra unificar com o carrinho de compras ou publicar novos jobs</h2>

        </CardCarrinho>
      </FlexR>
    );
  }
}