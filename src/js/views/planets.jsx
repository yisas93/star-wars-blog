import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { Card } from "../component/card.jsx"
import { Context } from "../store/appContext.js"
import { Pagination } from "../component/pagination.jsx"
import { useSearchParams } from "react-router-dom"
export const Planets =()=>{
const {store, actions}=useContext(Context)
const [searchParams, setSearchParams]=useSearchParams()
useEffect(()=>{
    actions.getStarwars("planets")}, [])
    return (
        <div className="container">
            <h1 className="titile">PLANETS {JSON.stringify(searchParams.get("page"))}</h1>
        
            <div className="container">
                <div className="row">
                {store.planets.map(planet=> (
                    <div  key={planet.uid} className="col-4">
                    <Card
                        title={planet.name}
                        text={planet.description}
                        image={`https://starwars-visualguide.com/assets/img/planets/${planet.uid }.jpg`}
                        type="planets"
                        id={planet.uid}                        
                    />
                    </div>
                    ))}
                    
                </div>
                <div className="row">
                    <div className="col">
                        <Pagination 
                        pages={6}
                        currentPage={1}
                        type={"planets"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
































































































































