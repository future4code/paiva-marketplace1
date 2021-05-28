import React, { Component } from "react";
import { Card } from "./styled";
import Button from "@material-ui/core/Button";
import { theme } from "../../assets/Theme";
import { ThemeProvider } from "@material-ui/styles";

export default class Login extends Component {
  render() {
    return (
      <Card>
        <ThemeProvider theme={theme}>
        <div className="container">
          <h2>Olá LabeNinja! Faça seu login</h2>
          <div className="card-title">
            <p>Omae, namae wa?</p>
            <input type="text" placeholder="Digite seu nome ninja..." />
          </div>
          <div className="card-title">
            <p>Senha</p>
            <input type="password" placeholder="Digite a sua senha..."/>
          </div>
          <Button
            variant="contained"
            color="secondary"
            onClick={this.props.confLogin}
            className="botao-enviar">
            Fazer Login{" "}
          </Button>
        </div>
        </ThemeProvider>
      </Card>
    );
  }
}
