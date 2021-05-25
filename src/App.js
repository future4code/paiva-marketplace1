import React from "react";
import { AppContainer } from "./components/AppContainer";
import { Header } from "./components/Header/Header";
// import { Body } from "./components/Body/Body";
import GlobalStyle from './Styles/Global';
import Body from './components/LandingPage/Body'
// import { Trabalho } from "./components/Trabalho/Trabalho";
// import { Talento } from "./components/Talento/Talento";
// import Vitrine from './components/Vitrine/Vitrine'
//import { Footer } from "./components/Footer/Footer";


function App() {
	return (
		<div>
			<Header />
			<Body />
			{/* <Trabalho /> */}
			{/* <Talento /> */}
			<AppContainer />
			{/* <Vitrine /> */
			<GlobalStyle />


		</div>
	);
}

export default App;
