import React from "react";
import { AppContainer } from "./components/AppContainer";
import Vitrine from "./components/LandingPage/Vitrine/Vitrine";
import Carrinho from "./components/Carrinho/Carrinho"
import GlobalStyle from './Styles/Global'

function App() {
	return (
		<div>
			<Carrinho/>
			{/* <AppContainer />
			<GlobalStyle /> */}
		</div>
	);
}

export default App;
