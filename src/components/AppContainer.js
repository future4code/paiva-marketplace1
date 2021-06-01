import React, { Component } from 'react'
import FiltroServicos from "./PropostaDeServico/FiltroServicos";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Body from "./Body/Body";
import Login from './Login/Login';
import { AppContainerDiv } from './styled';
import Carrinho from "./Carrinho/Carrinho"
import MeusJobs from './Login/Meus Jobs/MeusJobs';
import PropostaDeServico from "./PropostaDeServico/PropostaDeServico"
import { ListaDeServico } from './ListaDeServico/ListaDeServico';
import axios from "axios"


export class AppContainer extends Component {

  state = {
    pagina: 'landingPage',
    logado: false,
    produtos: [],
    categoria: "",
    authorization: "",
    carrinho: [],
    valorTotal: [],
    compraFinalizada: [],
    meusProdutos: [],
    produtosFiltrados: [],
    produtosFixo: [],
  }

  //lógica dos botões para mudar de página\\

  confLogin = async (key) => {
    await this.setState({ logado: true, pagina: 'pos-login', authorization: key })
    this.meusJobsPublicados()
    this.meuHistorico()
    localStorage.setItem("authorization", JSON.stringify(this.state.authorization));
    localStorage.setItem("logado", JSON.stringify(this.state.logado));
    localStorage.setItem("meusProdutos", JSON.stringify(this.state.meusProdutos));
  }

  logout = async () => {
    await this.setState({ logado: false, pagina: 'landingPage', authorization: '' })
    localStorage.setItem("authorization", JSON.stringify(this.state.authorization));
    localStorage.setItem("logado", JSON.stringify(this.state.logado));
    localStorage.setItem("meusProdutos", JSON.stringify(this.state.meusProdutos));
  }

  vaiParaOCarrinho = () => {
    this.setState({ pagina: "carrinho" });
  };

  vaiParaAHome = () => {
    this.setState({ pagina: "landingPage" });
  };

  vaiParaOLogin = () => {
    this.setState({ pagina: "login" });
  };

  vaiParaProposta = () => {
    this.setState({ pagina: "proposta" });
  };

  vaiParaEncontrarLista = () => {
    this.setState({ pagina: "lista" });
    if (this.state.logado){
      this.meusJobsPublicados()
    }
    this.filtrar(0,"","","")

  };

  mudaCategoriaServicos = (categoriaServicos) => {
    this.setState({ categoria: categoriaServicos });
  };

  vaiParaMinhaPagina = () => {
    this.setState({ pagina: "pos-login" });
    if (this.state.logado){this.meuHistorico()}
    if (this.state.logado){this.meusJobsPublicados()}
  };

// Deleta os anuncios que ele fez. fica na pagina do 'minha pagina'

  deletarMeusAnuncios = (id) => {
    const Header = {
      headers: {
        Authorization: this.state.authorization
      }
    }
    const url = `https://labeninjas.herokuapp.com/jobs/${id}`
    if (window.confirm("Tem certeza?")) {
      axios
        .delete(url, Header)
        .then(() => {
          alert("Sayonara");
          this.meusJobsPublicados()
        })
        .catch((err) => {
          alert("Ocorreu um erro tente novamente mais tarde.");

        });
    }
    this.getListaDeProdutos() 
  };

// Lista de produtos que os usuários vão ver ao entrar na pagina, esse são os produtos de quem publica \\

  getListaDeProdutos = async () => {
    const Header = {
      headers: {

        Authorization: "61bdcdc0-0989-4725-a3ed-866622e42097",
      },
    };
    const url = "https://labeninjas.herokuapp.com/jobs";
    await axios
      .get(url, Header)
      .then((res) => {
        const listaTratada = res.data.jobs.map((separa) => {
          const textoSplit = separa.title.split("&&&&");
          return {
            title: textoSplit[0],
            catServ: textoSplit[1],
            url: textoSplit[2],
            id: separa.id,
            description: separa.description,
            price: separa.price,
            paymentMethods: separa.paymentMethods,
            dueDate: separa.dueDate,
            taken: separa.taken,
          };
        });
          this.setState({ produtos: listaTratada.filter(produto => produto.taken !== "taken"), produtosFixo: listaTratada.filter(produto => produto.taken !== "taken") });
      })
      .catch((err) => {
        alert(err);
      });
      if (this.state.logado){
        this.meusJobsPublicados()
      }
  };
  componentDidMount() {
    this.getListaDeProdutos();
    {localStorage.getItem("logado") && this.setState({ logado: JSON.parse(localStorage.getItem("logado")) })}
    {localStorage.getItem("authorization") && this.setState({ authorization: JSON.parse(localStorage.getItem("authorization")) })}
    {localStorage.getItem("meusProdutos") && this.setState({ meusProdutos: JSON.parse(localStorage.getItem("meusProdutos")) })}
  }

// Meu histórico de produtos comprados \\

  meuHistorico = () => {
    const myStuff = this.state.produtosFixo.filter((produto) => {
      return produto.taken === true
    })
    this.setState({ compraFinalizada: myStuff })
  }

  // Os serviços que serão publicados pelo usuário\\

  meusJobsPublicados = async () => {
    const Header = {
      headers: {
        Authorization: this.state.authorization
      }
    }
    const url = "https://labeninjas.herokuapp.com/jobs"
    await axios.get(url, Header)
      .then((res) => {
        const listaTratada = res.data.jobs.map((separa) => {
          const textoSplit = separa.title.split("&&&&")
          return { title: textoSplit[0], catServ: textoSplit[1], url: textoSplit[2], id: separa.id, description: separa.description, price: separa.price, paymentMethods: separa.paymentMethods, dueDate: separa.dueDate, taken: separa.taken }
        })
        this.setState({ meusProdutos: listaTratada })
      })
      .catch((err) => {
        alert(err)
      })
    const novaLista = [...this.state.produtosFixo]
    for (let i = 0; i < this.state.meusProdutos.length; i++) {  
     novaLista.push(this.state.meusProdutos[i])
    }
    this.setState({ produtosFixo: novaLista })
    const myArray = [...novaLista];
    const uniqueArray = myArray.filter(function(item, index, self) {
      const thing = JSON.stringify(item);
      return index === myArray.findIndex(obj => {
        return JSON.stringify(obj) === thing;
      });
    });
  this.setState({ produtosFixo: uniqueArray })

  }

  // switch case para paginas mudar e dentro da pagina\\

  mudaPagina = (() => {
    switch (this.state.pagina) {

      case 'carrinho': return (<Carrinho carrinho={this.state.carrinho} valorTotal={this.state.valorTotal} excluirDoCarrinho={this.excluirDoCarrinho} comprarTudo={this.comprarTudo} />)
      case 'landingPage': return (<Body />)
      case 'proposta': return (<PropostaDeServico authorization={this.state.authorization} meusJobsPublicados = {this.meusJobsPublicados}/>)
      case 'lista': return (<ListaDeServico produtos={this.state.produtos} categoria={this.state.categoria} addProdutoAoCarrinho={this.addProdutoAoCarrinho}  filtrar = {this.filtrar} produtosFiltrados={this.state.produtosFiltrados} meusJobsPublicados={this.meusJobsPublicados}/>)
      case 'login': return (<Login confLogin={this.confLogin} />)
      case 'pos-login': return (<MeusJobs compraFinalizada={this.state.compraFinalizada} meuHistorico={this.meuHistorico} meusProdutos={this.state.meusProdutos} apagar={this.deletarMeusAnuncios} />)
      default: return (<Body />)
    }
  })

  // Tudo do carrinho \\

  addProdutoAoCarrinho = (produto) => {
    const carrinhoClone = [...this.state.carrinho]
    const itemCarrinho = {
      id: produto.id,
      title: produto.title,
      url: produto.url,
      price: produto.price,
      description: produto.description,
      paymentMethods: produto.paymentMethods
    }
    const validacao = carrinhoClone.map((produto) => {
      if (produto.id === itemCarrinho.id){
        return produto.id
      }
    })
    if (validacao[0] === produto.id){
      alert('Este serviço já foi adicionado ao carrinho!')
    }else {
      const carrinhoClonado = [...carrinhoClone, itemCarrinho]
      this.setState({ carrinho: carrinhoClonado})
      alert("Produto Adicionado com sucesso")
    }
  }
  excluirDoCarrinho = (idProduto) => {
    let carrinhoAtual = [...this.state.carrinho]
    let carrinhoNovo = carrinhoAtual.filter((tira) => {
      return !(tira.id === idProduto)
    })
    this.setState({ carrinho: carrinhoNovo })
  }
  comprarTudo = () => {
    let carrinhoAtual = [...this.state.carrinho]
    const header = {
      headers: {
        Authorization: this.state.authorization
      }
    }
    const body = {
      taken: true
    }
    if (this.state.logado) {
      carrinhoAtual.map((produto) => {
        const url = `https://labeninjas.herokuapp.com/jobs/${produto.id}`
        axios.post(url, body, header)
          .then(() => {
            this.excluirDoCarrinho(produto.id)
          })
          .catch((err) => {
            alert(err)
          })
      })
      alert("Esperamos que sua experiência tenha sido ótima!")
    } else {
      alert("Por favor, faça login para completar sua compra")
    }
  }

// Todos os Filtros \\

filtrar = (valorMinimo, valorMaximo, buscarProduto, select) => {
  const listaDeProdutos = [...this.state.produtosFixo]
  if (this.state.pagina !== 'lista'){
    this.setState({pagina: 'lista'})
  }
  if (valorMaximo === "") {
    this.setState({
      produtos: listaDeProdutos
        .filter(produto => produto.price >= valorMinimo)
        .filter(produto => produto.title.toLowerCase().includes(buscarProduto.toLowerCase()))
        .filter(produto => produto.catServ.toLowerCase().includes(select.toLowerCase()))

    })
  } else {
    this.setState({
      produtos: listaDeProdutos
        .filter(produto => produto.price >= valorMinimo)
        .filter(produto => produto.price <= valorMaximo)
        .filter(produto => produto.title.toLowerCase().includes(buscarProduto.toLowerCase()))
        .filter(produto => produto.catServ.toLowerCase().includes(select.toLowerCase()))

    })
  }
}



  render() {
    return (
      <AppContainerDiv>
        <div>
          <Header logado={this.state.logado} vaiParaMinhaPagina={this.vaiParaMinhaPagina} vaiParaOCarrinho={this.vaiParaOCarrinho} vaiParaAHome={this.vaiParaAHome} vaiParaOLogin={this.vaiParaOLogin} vaiParaProposta={this.vaiParaProposta} vaiParaEncontrarLista={this.vaiParaEncontrarLista} filtrar={this.filtrar} logout={this.logout}/>
          <FiltroServicos
            valorMinimo={this.state.valorMinimo} //enviando as informaçoes de filtro para o FIltroServiços\\ 
            filtrar={this.filtrar}
            valorMaximo={this.state.valorMaximo}
            nomeProduto={this.state.buscarProduto}
            handleValorMaximo={this.handleValorMaximo}
            handleValorMinimo={this.handleValorMinimo}
            handleBuscarProduto={this.handleBuscarProduto}
            vaiParaEncontrarLista={this.vaiParaEncontrarLista}
            mudaCategoriaServicos={this.mudaCategoriaServicos}
            categora={this.state.categoria}
          />
        </div>
          {this.mudaPagina()}
          <Footer />
      </AppContainerDiv>
    );

  }
}
