import React from 'react'
import {CardContainer, FotoProduto, InfoContainer, } from './styled'


export default class ProductsCard extends React.Component {
    render() {
        return (
            <CardContainer>
                <FotoProduto src={this.props.imagem} alt={''}/>
                <InfoContainer>
                    <p>{this.props.nome}</p>
                    <p>R$ {this.props.valor}</p>
                    <button onClick={ () => this.props.addProdutoAoCarrinho(this.props.id)}><img  alt={'icone carrinho'} />Adiciona ao Carrinho</button>

                </InfoContainer>
            </CardContainer>
        )
    }
}