import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home.jsx";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { PlanetDetail } from "./views/planetDetail.jsx";
import { CharacterDetail } from "./views/characterDetail.jsx";
import { FilmsDetail } from "./views/filmsDetail.jsx";
import { StarshipsDetail } from "./views/starshipsDetail.jsx";
import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer";
import { Sidebar } from "./component/sidebar.jsx";
import {Planets} from "./views/planets.jsx"

import {Characters} from "./views/characters.jsx"
import {Films} from "./views/films.jsx"
import {Starships} from "./views/starships.jsx"
//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
				<Navbar/>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
						<Route path="/sidebar" element={<Sidebar/>}/>
						<Route path="/planets" element={<Planets/>}/>
						<Route path="/planets/:planetid" element={<PlanetDetail/>}/>
						<Route path="/characters" element={<Characters/>}/>
						<Route path="/characters/:characterid" element={<CharacterDetail/>}/>
						<Route path="/films" element={<Films/>}/>
						<Route path="/films/:filmid" element={<FilmsDetail/>}/>
						<Route path="/starship" element={<Starships/>}/>
						<Route path="/starship/:starshipid" element={<StarshipsDetail/>}/>
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
