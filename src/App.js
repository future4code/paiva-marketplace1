import React from "react";
import { AppContainer } from "./components/AppContainer";
import { Header } from "./components/Header/Header";
import { Body } from "./components/Body/Body";
// import { Trabalho } from "./components/Trabalho/Trabalho";
// import { Talento } from "./components/Talento/Talento";
// import Vitrine from './components/Vitrine/Vitrine'
import { Footer } from "./components/Footer/Footer";


function App() {
	return (
		<div>
			{/* <Header /> */}
			<Body />
			{/* <Trabalho /> */}
			{/* <Talento /> */}
			<AppContainer />
			{/* <Vitrine /> */}
			<Footer/>
		</div>
	);
}

export default App;
