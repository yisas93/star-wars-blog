import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Card } from "../component/card.jsx"
import { Context } from "../store/appContext.js"
import "./viewstyle.css"
import { Pagination } from "../component/pagination.jsx"
import { useSearchParams } from "react-router-dom"
export const Films =()=>{
const {store, actions}=useContext(Context)
const [searchParams, setSearchParams]=useSearchParams()
const[pages, setPages]=useState(0)
const[records, setRecords]=useState(0)
useEffect(()=>{
    actions.getStarwars("films").then((resp)=>{
        if(resp){
            setPages(resp.pages)
            setRecords(resp.records)
            
        }
    })
 
}, [])
useEffect(()=>{
    actions.getStarwars("films",{page:searchParams.get("page")}).then((resp)=>{
        if(resp){
            setPages(resp.pages);
            setRecords(resp.records)
        }
    })
}, [searchParams.get("page")])
    return (
        <div className="container">
            <h1 className="title">FILMS</h1>
       
            <div className="container">
                <div className="row">
            {store.films.map(film=>
            <div key={film.uid} className="col">
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
                        pages={pages}
                        currentPage={searchParams.get("page"||1)}
                        type={"films"}
                        />
                    </div>
                </div>
            </div>
            
        </div>
    )
}