import React, { Component } from 'react'
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Body from "./Body/Body";

export class AppContainer extends Component {
  state = {
    pagina: 'carrinho'
  }


  // switch case para paginas
  mudaPagina = (() => {
    switch (this.state.pagina) {
      case 'carrinho': return (<div>Carrinho</div>)
      case 'landingPage': return (<Body />)
      case 'proposta': return (<div>proposta de serviço</div>)
      case 'lista': return (<div>pagina de busca</div>)
      default: return (<div>cara, como vc quebrou esse site ?</div>)
    }

  })

  render() {
    console.log(this.state.pagina, 'oie')
    return (
      <div>

        <Header />
        {this.mudaPagina()}
        <Footer />

      </div>
    )
  }
}
