import React, { Component } from "react";

import { CardCarrinho, FlexR, ImgCart, FlexColuna, MostraCarrinho, Container, } from "./styled"


export default class MeusJobs extends Component {
 
  componentDidMount() {
    this.props.meuHistorico()
   
  }

  render() {
  const mostraHistorico = this.props.compraFinalizada.map((produto)=>{
    return (
      <FlexR>
        <Container>
          <ImgCart src = {produto.url} alt="imagem"/>
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
  const meusProdutos = this.props.meusProdutos.map((produto)=>{
    return (
      <FlexR>
        <Container>
          <ImgCart src = {produto.url} alt="imagem"/>
          <FlexColuna>
          <h1>Serviço: {produto.title}</h1>
          <FlexR>
          <h1>Preço: R$ {produto.price}</h1>
         
          </FlexR>
          <button onClick={() => this.props.apagar(produto.id)}>deletar</button>  
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
            {mostraHistorico}
          </MostraCarrinho>
         
        </CardCarrinho>

        <CardCarrinho>
        <h2>Meus anuncios:</h2>
        <br/>
          <MostraCarrinho>
            {meusProdutos}
          </MostraCarrinho>
  
        </CardCarrinho>


      </FlexR>
    );
  }
}