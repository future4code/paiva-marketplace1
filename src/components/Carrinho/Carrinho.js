import React, { Component } from "react";
import { CardCarrinho, PrecoTotal, FlexRow } from "./styled";
import Button from '@material-ui/core/Button';
import { theme } from '../../assets/Theme'
import { ThemeProvider } from '@material-ui/styles';

export default class Carrinho extends Component {

  

  changeTotalValue = () => {
    let soma = 0;
    this.props.carrinho.map((produto) => {
      soma += produto.price
    })
    return soma 
    }


  render() {
    const mostracarrinho = this.props.carrinho.map((produto) => {
      const valorReal = produto.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
      return (
        <FlexRow key={produto.id}>
          <img src={produto.url} alt="imagem" />
          <div className="area-produto">
            <h3>{produto.title}</h3>
            <p>{produto.description}</p>
            <p>Pagamento: {produto.paymentMethods}</p>
            <span onClick={()=>this.props.excluirDoCarrinho(produto.id)}>Excluir</span>
          </div>
          <div className="valor-produto">
            <span>{valorReal}</span>
          </div>

        </FlexRow>
      )
    })


    return (
      <CardCarrinho>
        <div className="carrinho-area">
          <h4>Carrinho</h4>
          {mostracarrinho}
        </div>

        <PrecoTotal>
          <div className="valor-total">
            <p>valor total: {this.changeTotalValue()}</p>
            <p>Prazo 30 dias</p>
          </div>
        </PrecoTotal>
        <div className="button">
          <ThemeProvider theme={theme}>
            <Button variant="contained" color="secondary" onClick={this.props.comprarTudo}>
              Comprar tudo
            </Button>
          </ThemeProvider>
        </div>
      </CardCarrinho >
    );
  }
}
