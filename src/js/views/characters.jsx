import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { Card } from "../component/card.jsx"
import { Context } from "../store/appContext.js"
export const Characters =()=>{
const {store, actions}=useContext(Context)
useEffect(()=>{
    actions.getStarwars("people")}, [])
    return (
        <div className="container">
            <h1 className="title" >CHARACTERS</h1>
        
            <div className="container">
                <div className="row">
                {store.people.map(people=>
                <div className="col-4">
                    <Card
                        title={people.name}
                        text={people.description}
                        image={`https://starwars-visualguide.com/assets/img/characters/${people.uid}.jpg`}
                        type="characters"
                        id={people.uid}
                    />
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}


