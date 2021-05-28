import React, { Component } from "react";
import { Card } from "./styled"

export default class Login extends Component {

  render() {

    return (
      <Card>
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
          <button onClick={this.props.confLogin} className="botao-enviar">Fazer Login</button>
        </div>
      </Card >

    );
  }
}
