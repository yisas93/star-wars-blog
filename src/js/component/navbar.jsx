import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {actions, store}=useContext(Context)
	
	return (
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div class="container-fluid">
		  <Link class="navbar-brand" to="/">Home</Link>
		  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		  </button>
		  <div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
			  <li class="nav-item">
				<Link class="nav-link" aria-current="page" to="/planets">Planets</Link>
			  </li>
			  <li class="nav-item">
				<Link class="nav-link" aria-current="page" to="/characters">Characters</Link>
			  </li>
			  <li class="nav-item">
				<Link class="nav-link" aria-current="page" to="/films">Films</Link>
			  </li>
			  <li class="nav-item">
				<Link class="nav-link" aria-current="page" to="/starship">Starships</Link>
			  </li>
			  <li class="nav-item dropdown">
				<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
				  Favorites{store.favorites.length}
				</a>
				<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
					{store.favorites.map(favorite=>(
					<div className="d-flex">	<li className="dropdown-item" key={favorite.index}>{favorite.name}</li>
					<button onClick={()=>actions.removeFavorites(favorite.index)}>eliminar</button></div>
					))}
				 
				</ul>
			  </li>
			 
			</ul>
			
		  </div>
		</div>
	  </nav>
	);
};
