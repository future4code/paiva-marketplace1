import React from "react";
import { ContainerProduto, HeaderProduto, ContainerCardProduto, Filtro, ContainerTotal } from "./styled"
import ProdutosCard from './ProdutosCard'
import Button from '@material-ui/core/Button';
import { theme } from '../../assets/Theme'
import { ThemeProvider } from '@material-ui/styles';
import { CardContainer, FotoProduto, InfoContainer } from "./styled";
import Carrinho from "../Carrinho/Carrinho";

export class ListaDeServico extends React.Component {

  state = {
    ordem: "crescente",
    produtos: [...this.props.produtos],
    valorMaximo: '',
    valorMinimo: '',
    buscarProduto: '',
    todosOsProdutos: [...this.props.produtos],
    select: "",
    carrinho: []
  }

  //componentDidMount () {this.filtrar()}
  //Aqui começa a lógica do filtro de produtos \\

  //onChange dos produtos para mudar o estado dos state \\

  
  onChangeOrdenacao = (event) => {
    return this.setState({ ordem: event.target.value });
  };

  handleValorMinimo = (event) => {
    this.setState({
      valorMinimo: event.target.value,
    });
  };

  handleValorMaximo = (event) => {
    this.setState({
      valorMaximo: event.target.value,
    });
  };

  handleBuscarProduto = (event) => {
    this.setState({
      buscarProduto: event.target.value,
    });
  };

  handleSelect = (event) => {
    this.setState({ select: event.target.value })
    console.log(event.target.value)
  }

  filtrar = () => {
    const listaDeProdutos = [...this.state.todosOsProdutos]
    if (this.state.valorMaximo === "") {
      this.setState({
        produtos: listaDeProdutos
          .filter(produto => produto.price >= this.state.valorMinimo)
          .filter(produto => produto.title.toLowerCase().includes(this.state.buscarProduto.toLowerCase()))
          .filter(produto => produto.catServ.toLowerCase().includes(this.state.select.toLowerCase()))

      })
    } else {
      this.setState({
        produtos: listaDeProdutos
          .filter(produto => produto.price >= this.state.valorMinimo)
          .filter(produto => produto.price <= this.state.valorMaximo)
          .filter(produto => produto.title.toLowerCase().includes(this.state.buscarProduto.toLowerCase()))
          .filter(produto => produto.catServ.toLowerCase().includes(this.state.select.toLowerCase())
          )

      })
    }
  }

  render() {
        const listaFiltrada = [...this.state.produtos].sort((a,b) =>{
          if(this.state.ordem === "crescente"){
            return a.price - b.price
          }else if (this.state.ordem === "decrescente"){
            return b.price - a.price
          }
        })

    return (
      <ContainerTotal>
        <ThemeProvider theme={theme}>
          <Filtro>
            <div>
              <h3>Filtrar Produtos:</h3>

              <h5>Valor Maximo</h5>
              {/* recebendo por props os valores enviados do appContainer */}
              <input value={this.state.valorMaximo} onChange={this.handleValorMaximo} placeholder='R$' type='number'></input>

              <h5>Valor Mínimo</h5>
              <input value={this.state.valorMinimo} onChange={this.handleValorMinimo} placeholder='R$' type='number'></input>

              <h5>Buscar produto por nome</h5>
              <input value={this.state.buscarProduto} onChange={this.handleBuscarProduto} placeholder='Nome do Produto'></input>

              <h5>Filtrar por categoria</h5>
              <select onChange={this.handleSelect} className="options">
                <option value="">Selecione</option>
                <option value="">Todas</option>
                <option value="Aulas Particulares">Aulas Particulares</option>
                <option value="Web Design">Web Design</option>
                <option value="Consultoria">Consultoria</option>
                <option value="Assistência Técnica">Assistência Técnica</option>
                <option value="Serviços Domésticos">Serviços Domésticos</option>
                <option value="Reformas">Reformas</option>
                <option value="Diversos">Diversos</option>
              </select>
              <Button variant="contained" color="primary" onClick={this.filtrar}>Filtrar</Button>
            </div>
          </Filtro>
          <ContainerProduto>
            <HeaderProduto>
              <label>Ordenação:
                <select
                  value={this.state.ordem}
                  onChange={this.onChangeOrdenacao}
                >
                  <option value="crescente">Crescente</option>
                  <option value="decrescente">Decrescente</option>
                </select>
              </label>
            </HeaderProduto>
            <ContainerCardProduto>
              {/* recebe a lista filtrada e mapea para a visualização */}
              {listaFiltrada.map((produtos) => {
                const valorReal = produtos.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
                  return (
                  <ThemeProvider theme={theme} key={produtos.id}>
                    <CardContainer>
                      <FotoProduto src={produtos.url} alt="" />
                      <InfoContainer>
                        <p>{produtos.title}</p>
                        <p>{valorReal}</p>
                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={() => this.props.addProdutoAoCarrinho(produtos)}
                        >
                          Adicionar ao Carrinho
                        </Button>

                      </InfoContainer>
                    </CardContainer>
                  </ThemeProvider>)
              })}
            </ContainerCardProduto>
          </ContainerProduto>
        </ThemeProvider>
      </ContainerTotal>
    )
  }

}