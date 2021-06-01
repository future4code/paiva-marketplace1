import React from 'react'
import styled from 'styled-components'
import logoNinja from "../../img/nome-labeninja.png"
import Button from '@material-ui/core/Button';
import { theme } from '../../assets/Theme'
import { ThemeProvider } from '@material-ui/styles';



const Main = styled.div`
  width: 100%;

  @media(max-width: 800px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`

const ContainerHeader = styled.div`
  width: 100%;
  height: 150px;
  border-bottom: 2px solid #6F6F87;


  @media(max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`


const Header1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #000072;

  h4{
    padding: 1%;
    color: white;
    cursor: pointer;
    &:hover{
      background: #4D4D81;
    }
  }
  
  /* MEDIA QUARRYS */

  @media(max-width: 800px) {
    flex-direction: row;
    display: flex;
    width: 100%;
    /* align-items: center; */
    justify-content: space-around;

    h4 {
      padding: 0 1%;
      font-size: 0.8rem;
    }
  }
`
const H1 = styled.h4`
  margin-right: 4rem;
  @media(max-width: 800px) {
    margin: 0;
  }
`

const Header2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header2-container{
    display: flex;
    align-items: flex-start;
  }


  @media(max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    .header2-container{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    }
  }
`

const Logo = styled.div`
padding: 2vh;
  margin-left: 1rem;
  img{
    height: 50px;
    cursor: pointer;
  }
  @media(max-width: 800px) {
    display: none;
  }
`

const Input = styled.div`
 padding: 2vh;
 align-items: center;
 display: flex;
 justify-content: center;
 width: 80%;
 button{
   width: 8%;
   height: 26px;
   cursor: pointer;
   background-color: #F72163;
   color: white;
   border: none;
   &:hover{
    background-color: #AC1768 ;
   }
 }
 input{
    width: 80%;
    height: 26px;
    padding-left: 1rem;
    font-weight: bold;
    border: 1px solid #B7B7C3;
    &:focus {
  border-color: #cccccc;
  outline: 0;
  -webkit-box-shadow: none;
          box-shadow: none;
    }
  }
  @media(max-width: 800px) {
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: flex-start;
    flex: 1;
    input{
    }
  }
`
const Botoes = styled.div`
display: flex;
margin-right: 4rem;
  justify-content: center;
  button{
    margin-left: 4px;
  }
  @media(max-width: 800px){
    margin: 0;
    align-items: center;
    width: 100%;
    display: flex;
    justify-content: space-between;
    button {
      margin: 0;
    }
  }
`
export default class Header extends React.Component {
  state = {
    buscar : '',
  }

  handleBuscar = (e) => {
    this.setState({buscar: e.target.value})
  }



  render() {
    return (
      <Main>  
        <ThemeProvider theme={theme}>
        <ContainerHeader>
          <Header1>
            <h4 onClick={this.props.vaiParaAHome}>HOME</h4>
            <h4 onClick={this.props.vaiParaOCarrinho}>CARRINHO</h4>
            {this.props.logado && (<H1 onClick={this.props.vaiParaMinhaPagina}>MINHA PÁGINA</H1>)}
            {!this.props.logado && (<H1 onClick={this.props.vaiParaOLogin}>LOGIN</H1>)}
            {this.props.logado && (<H1 onClick={this.props.logout}>LOGOUT</H1>)}

            
          </Header1>

          <Header2>
            <Logo>
              <img onClick={this.props.vaiParaAHome} src={logoNinja} alt="logo" />
            </Logo>

            <Input>
              <input onChange={this.handleBuscar} value={this.state.buscar} placeholder='Buscar...' />
              <Button variant="contained" color="secondary" onClick={() => this.props.filtrar(0, '', this.state.buscar, '')}><h4>Buscar</h4></Button>
            </Input>
            <div className="header2-container">
            
                <Botoes>
                  <Button variant="contained" color="secondary" onClick={this.props.vaiParaProposta}><h3>Anuncie</h3></Button>
                  <Button variant="contained" color="secondary" onClick={this.props.vaiParaEncontrarLista}><h3>Encontre</h3></Button>
                </Botoes>
              
            </div>
          </Header2>
        </ContainerHeader>
        </ThemeProvider>
      </Main>
    )
  }
}
