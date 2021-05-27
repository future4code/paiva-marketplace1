import React from "react";
import {ContainerProduto, HeaderProduto, ContainerCardProduto, Filtro, ContainerTotal} from "./styled"
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
      <ContainerTotal>
        <Filtro>
          <div>
          <h3>Filtrar Produtos:</h3>
          
          <h5>Valor Maximo</h5> {/* recebendo por props os valores enviados do appContainer */}
          <input value={this.props.valorMaximo} onChange={this.props.HandleValorMaximo} placeholder='R$' type='number'></input>
          
          <h5>Valor Mínimo</h5>
          <input value={this.props.valorMinimo} onChange={this.props.HandleValorMinimo} placeholder='R$' type='number'></input>
          
          <h5>Buscar produto por nome</h5>
          <input value={this.props.buscarProduto} onChange={this.props.HandleBuscarProduto} placeholder='Nome do Produto'></input>
          
          <h5>Filtrar por categoria</h5>
            <select className="options">
              <option>Selecione</option>
              <option>Todas</option>
              <option>Aulas Particulares</option>
              <option>Web Design</option>
              <option>Consultoria</option>
              <option>Consultoria</option>
              <option>Assistência Técnica</option>
              <option>Serviços Domésticos</option>
              <option>Reformas</option>
              <option>Diversos</option>
            </select>
          </div>
        </Filtro>
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
      </ContainerTotal>
  )
}

}