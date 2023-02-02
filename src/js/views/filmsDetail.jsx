import React, { useContext, useEffect, useState } from "react";
import { useParams,  } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Details } from "../component/detail.jsx";
export const FilmsDetail=()=>{
const {store,actions}=useContext(Context);
const {filmid}=useParams();
const [producer, setProducer]=useState()
const [title, setTitle]=useState()
const [director, setDirector]=useState()
const [release_date, setRelease_date]=useState()

useEffect(()=>{
    fetch(`https://www.swapi.tech/api/films/${filmid}`)
    .then((response)=> response.json())
    .then((data)=> {
      setProducer(data.result.properties.producer);
      setTitle(data.result.properties.title);
      setDirector(data.result.properties.director);
      setRelease_date(data.result.properties.release_date);

      console.log(data);
      })

  
},[])

    return(
        <div>
            <div>
              
            <Details
            text1={"Name ="}
            prop1={title}
            text2={"Director ="}
            prop2={director}
            text3={"Producer ="}
            prop3={producer}
            text4={"Release Date ="}
            prop4={release_date}
            img={`https://starwars-visualguide.com/assets/img/planets/${filmid}.jpg`}
            />
            </div>
        
      
        </div>
    )
}