import React from "react";
import styled from 'styled-components'
import Aula from '../../img/aula.png'
import Webdesign from '../../img/webdesign.png'
import Consultoria from '../../img/consultoria.png'
import Suporte from '../../img/suporte.png'
import Servicos from '../../img/servicos.png'
import Reforma from '../../img/reforma.png'

const Main = styled.div`
  display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin-bottom: 10px;
    
  
`
const ContainerServicos = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  width: 100%;
  
 
img {
  height: 100px;
}
`
const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  margin: 0 auto;
  border-bottom: 1px solid #ddd;

  .service-container{
    display: flex;
    width: 100%;
    align-items: center;
    margin: o auto;
    div{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 55px;

    margin: 0px 30px;

    }
    img{
    //padding: 5px 0px;
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
  p{
    color:#000072;
    font-weight:bold;
  }
  }
 
`

export default class FiltroServicos extends React.Component {
  aplicafiltro = (categoria) => {
    if (this.state.pagina === "lista") {
      const lista= this.state.pagina 
      this.props.mudaCategoriaServicos(lista)
      this.props.vaiParaEncontrarLista()
    } else {
      this.props.mudaCategoriaServicos(categoria)
      this.props.vaiParaEncontrarLista()
    }

  }
state={
  categoria: this.props.categoria,
}

  render() {
    return (
      <Main >


        <ContainerServicos>

          <Logo>
            <div className="service-container" >
              <div onClick={() => this.props.filtrar(0, '', '', "Aulas Particulares")}>
                <img src={Aula} alt="Aulas Particulares" />
                <p>Aulas Particulares</p>
              </div>
              <div onClick={() => this.props.filtrar(0, '', '', "Web Design")}>
                <img src={Webdesign} alt="" />
                <p>Web Design</p>
              </div>
              <div onClick={() => this.props.filtrar(0, '', '', "Consultoria")}>
                <img src={Consultoria} alt="" />
                <p>Consultoria</p>
              </div>
              <div onClick={() => this.props.filtrar(0, '', '', "Assistência Técnica")}>
                <img src={Suporte} alt="" />
                <p>Assistência Técnica</p>
              </div>
              <div onClick={() => this.props.filtrar(0, '', '', "Serviços Domésticos")}>
                <img src={Servicos} alt="" />
                <p>Serviços Domésticos</p>
              </div>
              <div onClick={() => this.props.filtrar(0, '', '', "Reformas")}>
                <img src={Reforma} alt="" />
                <p>Reformas</p>
              </div>
            </div>
          </Logo>

        </ContainerServicos>

      </Main>



    );
  }
}