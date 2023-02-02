import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Card } from "../component/card.jsx"
import { Context } from "../store/appContext.js"
import { Pagination } from "../component/pagination.jsx"
import { useSearchParams } from "react-router-dom"
export const Planets =()=>{
const {store, actions}=useContext(Context)
const [searchParams, setSearchParams]=useSearchParams()
const[pages, setPages]=useState(0)
const[records, setRecords]=useState(0)


useEffect(()=>{
    actions.getStarwars("planets").then((resp)=>{
        if(resp){
            setPages(resp.pages)
            setRecords(resp.records)
            
        }
    })
 
}, [])
useEffect(()=>{
    actions.getStarwars("planets",{page:searchParams.get("page")}).then((resp)=>{
        if(resp){
            setPages(resp.pages);
            setRecords(resp.records)
        }
    })
}, [searchParams.get("page")])
   
    return (
        <div className="container">
            <h1 className="title">PLANETS </h1>
            <h5>{records} planets were found</h5>
            <div className="container">
                <div className="row">
                {store.planets.map(planet=> (
                    <div  key={planet.uid} className="col">
                    <Card
                        title={planet.name}
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
                        pages={pages}
                        currentPage={searchParams.get("page"||1)}
                        type={"planets"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
































































































































