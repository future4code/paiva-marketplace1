import React, { Component } from "react";
import {CardServico, Form, InputDescricao} from "./styled"

export default class PropostaDeServico extends Component {
  render() {
    return (

      <CardServico>
        <h2 style={{alignSelf:"center"}} >Publique seu Job Conosco!</h2>
        <Form>
          <p>titulo</p>
          <input type="text"/>
        </Form>
        <Form>
          <p>Categoria</p>
          <select>
            <option>Aulas Particulares</option>
            <option>Web Design</option>
            <option>Consultoria</option>
            <option>Consultoria</option>
            <option>Assistência Técnica</option>
            <option>Serviços Domésticos</option>
            <option>Reformas</option>
            <option>Diversos</option>
          </select>
        </Form>
        <Form>
          <p>Valor</p>
          <input type="number"/>
        </Form>
        <Form>
        <p>Prazo</p>
        <input type="date"/>
        </Form>
        <p style={{alignSelf:"center"}}>Método de Pagamento</p>
        <Form>
        <input type="checkbox" id="1"/>
        <label for="1">Boleto</label><br/>
        <input type="checkbox" id="2"/>
        <label for="2">Cartão de débito</label><br/>
        <input type="checkbox" id="3"/>
        <label for="3">Cartão de Crédito</label>
        </Form>
          <p style={{alignSelf:"center"}}>Descrição do Serviço</p>
          <InputDescricao type="text" rows="14" col="1"/>

      </CardServico>

    );
  }
}
