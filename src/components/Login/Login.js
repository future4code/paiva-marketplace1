import React, { Component } from "react";
import { Card } from "./styled";
import Button from "@material-ui/core/Button";
import { theme } from "../../assets/Theme";
import { ThemeProvider } from "@material-ui/styles";

export default class Login extends Component {
  state ={
    nome:"",
    key:"",
  }
  handleNome = (e) =>{
    this.setState({nome: e.target.value})
  }
  handleKey = (e) =>{
    this.setState({key: e.target.value})
  }
  render() {
    return (
      <Card>
        <ThemeProvider theme={theme}>
        <div className="container">
          <h2>Olá LabeNinja! Faça seu login</h2>
          <div className="card-title">
            <p>Omae, namae wa?</p>

            <input type="text" 
            placeholder="Seu nome ninja" 
            value={this.state.nome}
            onChange={this.handleNome} 
            />
          </div>
          <div className="card-title">
            <p>Password</p>
            <input type="password" 
            placeholder="Coloque aqui sua key da API" 
            value={this.state.key}
            onChange={this.handleKey} />

          </div>
          <Button
            variant="contained"
            color="secondary"
            onClick={()=>this.props.confLogin(this.state.key)}
            className="botao-enviar">
            Fazer Login{" "}
          </Button>
        </div>
        </ThemeProvider>
      </Card>
    );
  }
}
