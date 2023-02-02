import React, { useEffect, useState } from "react";
import { useParams,  } from "react-router-dom";


import { Details } from "../component/detail.jsx";
export const PlanetDetail=()=>{

const {planetid}=useParams();
const [climate, setClimate]=useState()
const [name, setName]=useState()
const [population, setPopulation]=useState()
const [diameter, setDiameter]=useState()

useEffect(()=>{
    fetch(`https://www.swapi.tech/api/planets/${planetid}`)
    .then((response)=> response.json())
    .then((data)=> {
      setClimate(data.result.properties.climate);
      setName(data.result.properties.name);
      setPopulation(data.result.properties.population);
      setDiameter(data.result.properties.diameter);

     
      })

  
},[])
console.log(climate +"clima")
    return(
        <div>
            <div>
              
            <Details
            text1={"Name ="}
            prop1={name}
            text2={"Population ="}
            prop2={population}
            text3={"Climate ="}
            prop3={climate}
            text4={"Diameter ="}
            prop4={diameter}
            img={`https://starwars-visualguide.com/assets/img/planets/${planetid}.jpg`}
            />
            </div>
        
      
        </div>
    )
}