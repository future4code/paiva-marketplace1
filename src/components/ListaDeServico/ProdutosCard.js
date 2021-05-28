import React from 'react'
import {CardContainer, FotoProduto, InfoContainer, } from './styled'
import Button from '@material-ui/core/Button';
import { theme } from '../../assets/Theme'
import { ThemeProvider } from '@material-ui/styles';


export default class ProductsCard extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <CardContainer>
          <FotoProduto src={this.props.imagem} alt={""} />
          <InfoContainer>
            <p>{this.props.nome}</p>
            <p>R$ {this.props.price}</p>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => this.props.addProdutoAoCarrinho(this.props.id)}
            >
              Adicionar ao Carrinho
            </Button>
          </InfoContainer>
        </CardContainer>
      </ThemeProvider>
    );
  }
}