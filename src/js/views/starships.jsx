import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { Card } from "../component/card.jsx"
import { Context } from "../store/appContext.js"
export const Starships =()=>{
const {store, actions}=useContext(Context)
useEffect(()=>{
    actions.getStarwars("starships")}, [])
    return (
        <div className="container">
            <h1 className="title">STARSHIPS</h1>
       
            <ul>
            {store.starships.map(starship=>
                    <Card
                        title={starship.name}
                        text={starship.description}
                        image={`https://starwars-visualguide.com/assets/img/starships/${starship.uid}.jpg`}
                        type="starship"
                        id={starship.uid}
                    />
                    )}
            </ul>
        </div>
    )
}