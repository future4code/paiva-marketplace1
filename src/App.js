import React from "react";
import { AppContainer } from "./components/AppContainer";
import Carrinho from "./components/Carrinho/Carrinho";
import Vitrine from "./components/LandingPage/Vitrine/Vitrine";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";




import GlobalStyle from './Styles/Global'

function App() {
	return (
		<div> 
			<Header/>
			<Body/>
			{/* <AppContainer />
			<GlobalStyle /> */}
			<Footer/>
		</div>
	);
}

export default App;
