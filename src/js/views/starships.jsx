import React, { useContext, useEffect, useState } from "react"

import { Card } from "../component/card.jsx"
import { Context } from "../store/appContext.js"

export const Starships =()=>{
const {store, actions}=useContext(Context)

useEffect(()=>{
    actions.getStarwars("starships")
},[])

    return (
        <div className="container">
            <h1 className="title">STARSHIPS</h1>
       
            <div className="container">
                <div className="row">
            {store.starships.map(starship=>
                    <div key={starship.uid} className="col">
                    <Card
                        title={starship.name}
                        image={`https://starwars-visualguide.com/assets/img/starships/${starship.uid}.jpg`}
                        type="starship"
                        id={starship.uid}
                    />
                    </div>
                    )}
                </div>
  
            </div>
        </div>
    )
}