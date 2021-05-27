import React, { Component } from 'react'
import FiltroServicos from "./PropostaDeServico/FiltroServicos";
import  Header  from "./Header/Header";
import  Footer  from "./Footer/Footer";
import  Body  from "./Body/Body";
import Login from './Login/Login';
import { AppContainerDiv } from './styled';
import Carrinho from "./Carrinho/Carrinho"
import MeusJobs from './Login/Meus Jobs/MeusJobs';
import PropostaDeServico from "./PropostaDeServico/PropostaDeServico"
import { ListaDeServico } from './ListaDeServico/ListaDeServico';


export class AppContainer extends Component {
 state = {
    pagina: 'lista',
     logado: false,
     valorMaximo: '',
     valorMinimo: '',
     nomeProduto: '',
  }

  //lógica dos botões para mudar de página\\
  
  confLogin = () => {
    this.setState({logado: true})
    this.setState({pagina: 'proposta'})
  }

  vaiParaOCarrinho = () => {
    this.setState({pagina: 'carrinho'})
  }

  vaiParaAHome = () => {
    this.setState({pagina: 'landingPage'})
  }

  vaiParaOLogin = () => {
    this.setState({pagina: 'login'})
  }

  vaiParaProposta = () => {
    this.setState({pagina: 'proposta'})
  }

  vaiParaEncontrarLista = () => {
    this.setState({pagina: 'lista'})
  }
  
  vaiParaMinhaPagina = () =>{
    this.setState({pagina: 'pos-login'})
  }
  

  // switch case para paginas
 mudaPagina = (() => {
  switch (this.state.pagina){
    case 'carrinho': return(<Carrinho/>)
    case 'landingPage': return (<Body/>)
    case 'proposta': return (<PropostaDeServico/>)
    case 'lista': return (<ListaDeServico/> )
    case 'login': return (<Login confLogin={this.confLogin} />)
    case 'pos-login': return (<MeusJobs/>)
  }
})

//Aqui começa a lógica do filtro de produtos \\

//onChange dos produtos para mudar o estado dos state \\

handleValorMinimo = (event) => {
  this.setState({
    valorMinimo: event.target.value,
  });
};

handleValorMaximo = (event) => {
  this.setState({
    valorMinimo: event.target.value,
  });
};

handleBuscarProduto = (event) => {
  this.setState({
    valorMinimo: event.target.value,
  });
};


  render() {
    console.log(this.state.pagina, 'oie')
    return (
      <div>
<Header logado={this.state.logado} vaiParaMinhaPagina={this.vaiParaMinhaPagina} vaiParaOCarrinho = {this.vaiParaOCarrinho} vaiParaAHome = {this.vaiParaAHome} vaiParaOLogin = {this.vaiParaOLogin} vaiParaProposta = {this.vaiParaProposta} vaiParaEncontrarLista = {this.vaiParaEncontrarLista}/>
      
      <FiltroServicos 
        valorMinimo={this.state.valorMinimo} //enviando as informaçoes de filtro para o FIltroServiços\\ 
        valorMaximo={this.state.valorMaximo}
        nomeProduto={this.state.buscarProduto}
        handleValorMaximo={this.handleValorMaximo}
        handleValorMinimo={this.handleValorMinimo}
        handleBuscarProduto={this.handleBuscarProduto}
      />
      <AppContainerDiv>
        

        {this.mudaPagina()}
        <Footer/>
      </AppContainerDiv>
</div>
    )
  }
}
