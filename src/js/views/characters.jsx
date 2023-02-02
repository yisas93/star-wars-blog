import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Card } from "../component/card.jsx"
import { Context } from "../store/appContext.js"
import { Pagination } from "../component/pagination.jsx"
import { useSearchParams } from "react-router-dom"
export const Characters =()=>{
const {store, actions}=useContext(Context)
const [searchParams, setSearchParams]=useSearchParams()
const[pages, setPages]=useState(0)
const[records, setRecords]=useState(0)
useEffect(()=>{
    actions.getStarwars("people").then((resp)=>{
        if(resp){
            setPages(resp.pages)
            setRecords(resp.records)
            
        }
    })
 
}, [])
useEffect(()=>{
    actions.getStarwars("people",{page:searchParams.get("page")}).then((resp)=>{
        if(resp){
            setPages(resp.pages);
            setRecords(resp.records)
        }
    })
}, [searchParams.get("page")])
    return (
        <div className="container">
            <h1 className="title" >CHARACTERS</h1>
        
            <div className="container">
                <div className="row">
                {store.people.map(people=>
                <div className="col">
                    <Card
                        title={people.name}
                        image={`https://starwars-visualguide.com/assets/img/characters/${people.uid}.jpg`}
                        type="characters"
                        id={people.uid}
                    />
                    </div>
                    )}
                </div>
                <div className="row">
                    <div className="col">
                        <Pagination 
                        pages={pages}
                        currentPage={searchParams.get("page"||1)}
                        type={"characters"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}


