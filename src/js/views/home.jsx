import React, {useContext, useEffect, useState} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import {Card} from "../component/card.jsx"

export const Home = () => {
const {actions, store}=useContext(Context)


useEffect(()=>{
    actions.getStarwars("planets")
}, [])
useEffect(()=>{
    actions.getStarwars("starships")
}, [])
useEffect(()=>{
    actions.getStarwars("people")
}, [])
useEffect(()=>{
    actions.getStarwars("films")
}, [])


return (
<div className="container-fluid">
        <div className="container over">
            <div className="list-group-horizontal d-flex overflow-scroll "style={{maxHeight: "300px"}}>
                {store.planets.map(planet=>(
                <div key={planet.index} className="list-group-item" style={{maxHeight: "100%"}}>
                    <Card
                        title={planet.name}
                        text={planet.description}
                        image={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
                        type="planets"
                        id={planet.uid}
                    />
                </div>
                    ))}
            </div>
        </div>

        <div className="container over">
            <div className="list-group-horizontal d-flex overflow-scroll "style={{maxHeight: "300px"}}>
                {store.starships.map(starship=>(
                <div key={starship.index} className="list-group-item" style={{maxHeight: "100%"}}>
                    <Card
                        title={starship.name}
                        text={starship.description}
                        image={`https://starwars-visualguide.com/assets/img/starships/${starship.uid}.jpg`}
                        type="starship"
                        id={starship.uid}
                    />
                </div>
                    ))}
            </div>
        </div>
        <div className="container over">
            <div className="list-group-horizontal d-flex overflow-scroll "style={{maxHeight: "300px",}}>
                {store.people.map(people=>(
                <div key={people.index} className="list-group-item" style={{maxHeight: "100%"}}>
                    <Card
                        title={people.name}
                        text={people.description}
                        image={`https://starwars-visualguide.com/assets/img/characters/${people.uid}.jpg`}
                        type="characters"
                        id={people.uid}
                    />
                </div>
                    ))}
            </div>
        </div>
        <div className="container over">
            <div className="list-group-horizontal d-flex overflow-scroll "style={{maxHeight: "300px"}}>
                {store.films.map(film=>(
                <div key={film.index} className="list-group-item" style={{maxHeight: "100%"}}>
                    <Card
                        title={film.properties.title}
                        image={`https://starwars-visualguide.com/assets/img/films/${film.uid}.jpg`}
                        type="films"
                        id={film.uid}
                    />
                </div>
                    ))}
            </div>
        </div>
    </div>

    )

}
