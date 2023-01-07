import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { Card } from "../component/card.jsx"
import { Context } from "../store/appContext.js"
import "./viewstyle.css"
import { Pagination } from "../component/pagination.jsx"
export const Films =()=>{
const {store, actions}=useContext(Context)
useEffect(()=>{
    actions.getStarwars("films")}, [])
    return (
        <div className="container">
            <h1 className="title">FILMS</h1>
       
            <div className="container">
                <div className="row">
            {store.films.map(film=>
            <div className="col">
                    <Card
                        title={film.properties.title}
                        image={`https://starwars-visualguide.com/assets/img/films/${film.uid}.jpg`}
                        type="films"
                        id={film.uid}
                        
                    />
                    </div>
                    )}
                </div>
                <div className="row">
                    <div className="col">
                        <Pagination 
                        pages={6}
                        currentPage={1}
                        type={"films"}
                        />
                    </div>
                </div>
            </div>
            
        </div>
    )
}