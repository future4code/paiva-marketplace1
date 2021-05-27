import React from "react";
import { AppContainer } from "./components/AppContainer";
import Carrinho from "./components/Carrinho/Carrinho";
import Header from "./components/Header/Header";
import GlobalStyle from './Styles/Global';
import PropostaDeServico from "./components/PropostaDeServico/PropostaDeServico";
function App() {
	return (
		<div>
			{/* <Header /> */}
			<AppContainer />
			{/* <PropostaDeServico/> */}
			{/* <Carrinho /> */}
			<GlobalStyle />
		</div>
	);
}

export default App