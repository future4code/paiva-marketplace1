import React from "react";
import {ContainerProduto, HeaderProduto, ContainerCardProduto} from "./styled"
import ProdutosCard from './ProdutosCard'

export class ListaDeServico extends React.Component {

state = {
  ordem: "crescente",
  produtos: [
    {
      title: "Cortar a grama",
      description: "Manutenção em áreas verdes de até 1000 metros quadrados.",
      value: 40,
      quantidade:1,
      imagem:
      "https://centraldagrama.com/dist/img/bermuda/large/1-grama-bermuda.jpg",
      paymentMethods: ["PayPal", "boleto"],
      dueDate: "2021-12-30",
      taken: false
    },
    {
      title: "Cortar a grama2",
      description: "Manutenção em áreas verdes de até 1200 metros quadrados.",
      value: 50,
      quantidade:1,
      imagem:
      "https://centraldagrama.com/dist/img/bermuda/large/1-grama-bermuda.jpg",
      paymentMethods: ["PayPal", "boleto"],
      dueDate: "2021-12-10",
      taken: false
    },
    {
      title: "Cortar a grama2",
      description: "Manutenção em áreas verdes de até 1200 metros quadrados.",
      value: 50,
      quantidade:1,
      imagem:
      "https://centraldagrama.com/dist/img/bermuda/large/1-grama-bermuda.jpg",
      paymentMethods: ["PayPal", "boleto"],
      dueDate: "2021-12-10",
      taken: false
    },   {
      title: "Cortar a grama2",
      description: "Manutenção em áreas verdes de até 1200 metros quadrados.",
      value: 50,
      quantidade:1,
      imagem:
      "https://centraldagrama.com/dist/img/bermuda/large/1-grama-bermuda.jpg",
      paymentMethods: ["PayPal", "boleto"],
      dueDate: "2021-12-10",
      taken: false
    },   {
      title: "Cortar a grama2",
      description: "Manutenção em áreas verdes de até 1200 metros quadrados.",
      value: 50,
      quantidade:1,
      imagem:
      "https://centraldagrama.com/dist/img/bermuda/large/1-grama-bermuda.jpg",
      paymentMethods: ["PayPal", "boleto"],
      dueDate: "2021-12-10",
      taken: false
    },   {
      title: "Cortar a grama2",
      description: "Manutenção em áreas verdes de até 1200 metros quadrados.",
      value: 50,
      quantidade:1,
      imagem:
      "https://centraldagrama.com/dist/img/bermuda/large/1-grama-bermuda.jpg",
      paymentMethods: ["PayPal", "boleto"],
      dueDate: "2021-12-10",
      taken: false
    },   {
      title: "Cortar a grama2",
      description: "Manutenção em áreas verdes de até 1200 metros quadrados.",
      value: 50,
      quantidade:1,
      imagem:
      "https://centraldagrama.com/dist/img/bermuda/large/1-grama-bermuda.jpg",
      paymentMethods: ["PayPal", "boleto"],
      dueDate: "2021-12-10",
      taken: false
    },   {
      title: "Cortar a grama2",
      description: "Manutenção em áreas verdes de até 1200 metros quadrados.",
      value: 50,
      quantidade:1,
      imagem:
      "https://centraldagrama.com/dist/img/bermuda/large/1-grama-bermuda.jpg",
      paymentMethods: ["PayPal", "boleto"],
      dueDate: "2021-12-10",
      taken: false
    },   {
      title: "Cortar a grama2",
      description: "Manutenção em áreas verdes de até 1200 metros quadrados.",
      value: 50,
      quantidade:1,
      imagem:
      "https://centraldagrama.com/dist/img/bermuda/large/1-grama-bermuda.jpg",
      paymentMethods: ["PayPal", "boleto"],
      dueDate: "2021-12-10",
      taken: false
    },
  ]
}

  render() {
    const listaFiltrada = [...this.state.produtos]
    return (
      <ContainerProduto>
      <HeaderProduto>
          <label>Ordenação: 
              <select 
              value={this.props.ordenacao}
              onChange={this.onChangeOrdenacao}
              >
                  <option value="crescente">Crescente</option>
                  <option value="decrescente">Decrescente</option>
              </select>
          </label>
      </HeaderProduto>
      <ContainerCardProduto>
          {/* recebe a lista filtrada e mapea para a visualização */}
          {listaFiltrada.map((produtos)=> {
              return <ProdutosCard 
              imagem={produtos.imagem}
              nome={produtos.title}
              valor={produtos.value}
              id = {produtos.id}
              addProdutoAoCarrinho = {this.props.addProdutoAoCarrinho}
              somaProduto = {this.props.somaProduto}
              />
          })}
      </ContainerCardProduto>
  </ContainerProduto>
  )
}

}