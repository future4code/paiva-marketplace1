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
    //height: 70px;
    margin: 0px 30px;

    }
    img{
    //padding: 5px 0px;
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
  }
 
`

export default class FiltroServicos extends React.Component {
  render() {
    return (
      <Main >


        <ContainerServicos>

          <Logo>
            <div className="service-container" >
              <div>
                <img src={Aula} alt="Aulas" />
                <p>Aulas Particulares</p>
              </div>
              <div>
                <img src={Webdesign} alt="" />
                <p>Web Design</p>
              </div>
              <div>
                <img src={Consultoria} alt="" />
                <p>Consultoria</p>
              </div>
              <div>
                <img src={Suporte} alt="" />
                <p>Suporte Técnico</p>
              </div>
              <div>
                <img src={Servicos} alt="" />
                <p>Serviços Domésticos</p>
              </div>
              <div>
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