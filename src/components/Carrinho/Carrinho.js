import React, { Component } from "react";
import { CardCarrinho, PrecoTotal, FlexRow } from "./styled";
import NinjaLogo from './ninja.jpg';
import Button from '@material-ui/core/Button';
import { theme } from '../../assets/Theme'
import { ThemeProvider } from '@material-ui/styles';

export default class Carrinho extends Component {
  state = {
    listaDeCompras: [
      {
        title: "Cortar a grama",
        description: "Manutenção em áreas verdes de até 1000 metros quadrados.",
        price: 40,
        paymentMethods: ["PayPal", "boleto"],
        dueDate: "2021-12-30",
        taken: false
      },
      {
        title: "Cortar a grama2",
        description: "Manutenção em áreas verdes de até 1200 metros quadrados.",
        price: 50,
        paymentMethods: ["PayPal", "boleto"],
        dueDate: "2021-12-10",
        taken: false
      }
    ]
  }
  render() {
    const mostracarrinho = this.state.listaDeCompras.map((produto) => {
      const valorReal = produto.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
      return (
        <FlexRow>
          <img src={NinjaLogo} alt="imagem" />
          <div className="area-produto">
            <h3>{produto.title}</h3>
            <p>{produto.description}</p>
            <p>Pagamento: {produto.paymentMethods}</p>
            <span onClick={null}>Excluir</span>
          </div>

          <div className="quantidade-produto">
            <span>-</span>
            <div>1</div>
            <span>+</span>
          </div>

          <div className="valor-produto">
            <span>{valorReal}</span>
          </div>

        </FlexRow>
      )
    })
    // console.log(this.state.listaDeCompras)
    return (
      <CardCarrinho>
        <div clasName="carrinho-area">
          <h4>Carrinho (2)</h4>
          {mostracarrinho}
        </div>

        <PrecoTotal>
          <div className="valor-total">
            <p>Prazo 30 dias</p>
            <p>Valor Total R$ 00,00</p>
          </div>
        </PrecoTotal>
        <div className="button">
          <ThemeProvider theme={theme}>
            <Button variant="contained" color="secondary" nClick={null}>
              Comprar tudo
            </Button>
          </ThemeProvider>
        </div>
      </CardCarrinho>
    );
  }
}
