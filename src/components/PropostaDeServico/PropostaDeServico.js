import React, { Component } from "react";
import { CardServico } from "./styled"

export default class PropostaDeServico extends Component {
  render() {
    return (
      <CardServico>
        <div className="container">
          <h2>Publique seu Job Conosco</h2>
          <div className="card-title">
            <p>Serviço</p>
            <input type="text" placeholder="O que você faz ?" />
          </div>
          <div className="categoria">
            <p>Categoria</p>
            <select className="options">
              <option>Selecione</option>
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
          <div className="descricao">
            <p>Descrição</p>
            <textarea type="text" rows="4" columns="1" placeholder="Escreva um resumo sobre sua vida profissional" />
          </div>


          <div>
            <p>Valor</p>
            <input type="number" placeholder="R$ 2000.00" />
          </div>
          <div className="prazo">
            <p>Prazo</p>
            <input type="date" />
          </div>
          <br />
          <p>Método de Pagamento</p>
          <br />
          <div className="pagamento">
            <div className="card-pagamentos">
              <input type="checkbox" id="1" />
              <label for="1">Boleto</label>
            </div>
            <div className="card-pagamentos">
              <input type="checkbox" id="2" />
              <label for="2">Débito</label>
            </div>
            <div className="card-pagamentos">
              <input type="checkbox" id="3" />
              <label for="3">Crédito</label>
            </div>
            <div className="card-pagamentos">
              <input type="checkbox" id="4" />
              <label for="4">Pix</label>
            </div>
            <div className="card-pagamentos">
              <input type="checkbox" id="5" />
              <label for="5">À vista</label>
            </div>
          </div>
          <br />
          <button className="botao-enviar" onClick={null} >ENVIAR</button>
        </div>
      </CardServico >

    );
  }
}
