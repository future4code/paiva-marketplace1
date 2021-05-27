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
  


  state = {
    pagina: 'lista'
  }

  // switch case para paginas
 mudaPagina = (() => {
  switch (this.state.pagina){
    case 'carrinho': return(<Carrinho/>)
    case 'landingPage': return (<Body/>)
    case 'proposta': return (<PropostaDeServico/>)
    case 'lista': return (<ListaDeServico/> )
    case 'login': return (<Login/>)
    case 'pos-login': return (<MeusJobs/>)
  }
})

  render() {
    console.log(this.state.pagina, 'oie')
    return (
      <div>

        <Header />
        <FiltroServicos />
      <AppContainerDiv>
        <Header vaiParaOCarrinho = {this.vaiParaOCarrinho} vaiParaAHome = {this.vaiParaAHome} vaiParaOLogin = {this.vaiParaOLogin} vaiParaProposta = {this.vaiParaProposta} vaiParaEncontrarLista = {this.vaiParaEncontrarLista}/>


        {this.mudaPagina()}
        <Footer/>
      </AppContainerDiv>
</div>
    )
  }
}
