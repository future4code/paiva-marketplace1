import React from "react";
import { AppContainer } from "./components/AppContainer";
import Header from "./components/Header/Header";
import GlobalStyle from './Styles/Global'

function App() {
	return (
		<div>
			<AppContainer />
			<GlobalStyle />
		</div>
	);
}

export default App