import React from "react";
import { AppContainer } from "./components/AppContainer";
import { Header } from "./components/Header/Header";
import { Body } from "./components/Body/Body";
import { Trabalho } from "./components/Trabalho/Trabalho";
import { Talento } from "./components/Talento/Talento";
import Vitrine from './components/Vitrine/Vitrine'

function App() {
  return (
    <div>
      <Header />
			<Body/>
			<Trabalho/>
			<Talento/>
		<div>
		<AppContainer />
		<Vitrine/>
    </div>
  );
}

export default App;
