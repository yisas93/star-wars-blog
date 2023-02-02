import React, { useContext, useEffect, useState } from "react";
import { useParams,  } from "react-router-dom";
import { Context } from "../store/appContext";

import { Details } from "../component/detail.jsx";
export const CharacterDetail=()=>{
const {store,actions}=useContext(Context);
const {characterid}=useParams();
const [mass, setMass]=useState()
const [name, setName]=useState()
const [birth_year, setBirth_year]=useState()
const [height, setHeight]=useState()

useEffect(()=>{
    fetch(`https://www.swapi.tech/api/people/${characterid}`)
    .then((response)=> response.json())
    .then((data)=> {
      setMass(data.result.properties.mass);
      setName(data.result.properties.name);
      setBirth_year(data.result.properties.birth_year);
      setHeight(data.result.properties.height);

    
      })

  
},[])

    return(
        <div>
            <div>
              
            <Details
            text1={"Name ="}
            prop1={name}
            text2={"Birth Year ="}
            prop2={birth_year}
            text3={"Mass ="}
            prop3={mass}
            text4={"Height ="}
            prop4={height}
            img={`https://starwars-visualguide.com/assets/img/characters/${characterid}.jpg`}
            />
            </div>
        
      
        </div>
    )
}