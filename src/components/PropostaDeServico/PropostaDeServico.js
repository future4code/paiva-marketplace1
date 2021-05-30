import React, { Component } from "react";
import { CardServico } from "./styled"
import Button from '@material-ui/core/Button';
import { theme } from '../../assets/Theme'
import { ThemeProvider } from '@material-ui/styles';

import axios from "axios";

export default class PropostaDeServico extends Component {
  handleServico = (e) =>{
    this.setState({servico: e.target.value})
  }
  handleCategoria = (e) =>{
    this.setState({categoria: e.target.value})
  }
  handleDescricao = (e) =>{
    this.setState({descricao: e.target.value})
  }
  handleValor = (e) =>{
    this.setState({valor: e.target.value})
  }

  handleDueToDate = (e) =>{
        this.setState({dueToDate: e.target.value})
  }
  handleBoleto = (e) =>{
    if (e.target.checked){
    this.setState({boleto: e.target.value})
  } else {
    this.setState({boleto: ""})
  }
  }
  handleCredito = (e) =>{
    if (e.target.checked){
    this.setState({credito: e.target.value})
  } else {
    this.setState({credito: ""})
  }
  }
  handleDebito = (e) =>{
    if (e.target.checked){
    this.setState({debito: e.target.value})
  } else {
    this.setState({debito: ""})
  }
  }
  handlePix = (e) =>{
    if (e.target.checked){
    this.setState({pix: e.target.value})
  } else {
    this.setState({pix: ""})
  }
  }
  handleAVista = (e) =>{
    if (e.target.checked){
    this.setState({aVista: e.target.value})
  } else {
    this.setState({aVista: ""})
  }
  }

  botaoEnviar = () =>{
    
const url = "https://labeninjas.herokuapp.com/jobs"
const header = {
  headers : {
    Authorization: this.props.authorization
  }
}
let foto=""
switch (this.state.categoria){
  case 'Aulas Particulares': {
    foto = "https://2.bp.blogspot.com/-LHHlT9wZtf0/VbMSxslEnHI/AAAAAAAABI4/kkniVQeArf8/s1600/Aula%2BParticular%2Be%2Bsua%2Bimport%25C3%25A2ncia.png"
    break;
  }
  case 'Web Design': 
  foto = "https://amspublic.com.br/images/web-design.jpg"
  break;
  case 'Consultoria': 
  foto = "https://blog.rhopen.com.br/wp-content/uploads/2019/03/280406-entenda-como-uma-consultoria-pode-contribuir-na-tomada-de-decisao.jpg"
  break;
  case 'Assistência Técnica': 
  foto = "https://ecil.com.br/wp-content/uploads/2019/05/DSC03468.jpg"
  break;
  case 'Serviços Domésticos': 
  foto = "https://www.encontrasp.com.br/imgs/empresas/2002140734.jpg"
  break;
  case 'Reformas': 
  foto = "https://drengenharia.com/wp-content/uploads/2016/05/10-MitosReformaDRengenharia-1030x675.jpg"
  break;
  case 'Diversos': 
  foto = "https://blog.rhopen.com.br/wp-content/uploads/2019/03/280406-entenda-como-uma-consultoria-pode-contribuir-na-tomada-de-decisao.jpg"
  break;
  default: break;
}

const body = {
  title: String(this.state.servico+"&&&&"+this.state.categoria+"&&&&"+foto),
  description: String(this.state.descricao),
  price: Number(this.state.valor),
  paymentMethods: [this.state.boleto,this.state.debito,this.state.pix,this.state.aVista,this.state.credito],
  dueDate: this.state.dueToDate
}
axios.post(url,body, header)
.then((res) =>{
 alert("OMEDETOOOU")
 this.setState({
    servico:" ",
    categoria:"",
    descricao:"",
    valor:"",
    credito:"",
    boleto:"",
    debito:"",
    pix:"",
    aVista:"",
    dueToDate:""
 })
 this.props.meusJobsPublicados()
})
.catch((err)=>{
  alert(err)
})
}

  state = {
    servico:" ",
    categoria:"",
    descricao:"",
    valor:"",
    credito:"",
    boleto:"",
    debito:"",
    pix:"",
    aVista:"",
    dueToDate:""
  }
  render() {
    return (
      <CardServico>
        <ThemeProvider theme={theme}>
        <div className="container">
          <h2>Publique seu Job Conosco</h2>
          <div className="card-title">
            <p>Serviço</p>
            <input type="text" placeholder="O que você faz ?"  onChange={this.handleServico} />
          </div>
          <div className="categoria">
            <p>Categoria</p>
            <select className="options" value={this.state.categoria} onChange={this.handleCategoria}>
              <option>Selecione</option>
              <option>Aulas Particulares</option>
              <option>Web Design</option>
              <option>Consultoria</option>
              <option>Assistência Técnica</option>
              <option>Serviços Domésticos</option>
              <option>Reformas</option>
              <option>Diversos</option>
            </select>
          </div>
          <div className="descricao">
            <p>Descrição</p>
            <textarea type="text" rows="4" columns="1" placeholder="Escreva um resumo sobre sua vida profissional" value={this.state.descricao} onChange={this.handleDescricao} />
          </div>


          <div>
            <p>Valor</p>
            <input type="number" placeholder="R$ 2000.00" value={this.state.valor} onChange={this.handleValor} />
          </div>
          <div className="prazo">
            <p>Prazo</p>
            <input type="date" value={this.state.dueToDate} onChange={this.handleDueToDate} />
          </div>
          <br />
          <p>Método de Pagamento</p>
          <br />
          <div className="pagamento">
            <div className="card-pagamentos">
              <input type="checkbox" id="1" onChange={this.handleBoleto} value={"Boleto"}/>
              <label for="1">Boleto</label>
            </div>
            <div className="card-pagamentos">
              <input type="checkbox" id="2" onChange={this.handleDebito} value={"Debito"}/>
              <label for="2">Débito</label>
            </div>
            <div className="card-pagamentos">
              <input type="checkbox" id="3"onChange={this.handleCredito} value={"Crédito"} />
              <label for="3">Crédito</label>
            </div>
            <div className="card-pagamentos">
              <input type="checkbox" id="4"onChange={this.handlePix} value={"Pix"} />
              <label for="4">Pix</label>
            </div>
            <div className="card-pagamentos">
              <input type="checkbox" id="5" onChange={this.handleAVista} value={"À Vista"}/>
              <label for="5">À vista</label>
            </div>
          </div>
          <br />
          <Button variant="contained" color="secondary"
          onClick={this.botaoEnviar} >ENVIAR
          </Button>
        </div>
      </ThemeProvider>
      </CardServico >

    );
  }
}
