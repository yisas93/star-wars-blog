import React, { useContext, useEffect, useState } from "react";
import { useParams,  } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Details } from "../component/detail.jsx";
export const StarshipsDetail=()=>{
const {store,actions}=useContext(Context);
const {starshipid}=useParams();
const [passengers, setPassengers]=useState()
const [name, setName]=useState()
const [model, setModel]=useState()
const [manufacturer, setManufacturer]=useState()

useEffect(()=>{
    fetch(`https://www.swapi.tech/api/starships/${starshipid}`)
    .then((response)=> response.json())
    .then((data)=> {
      setPassengers(data.result.properties.passengers);
      setName(data.result.properties.name);
      setModel(data.result.properties.model);
      setManufacturer(data.result.properties.manufacturer);

      console.log(data);
      })

  
},[])

    return(
        <div>
            <div>
              
            <Details
            text1={"Name ="}
            prop1={name}
            text2={"Model ="}
            prop2={model}
            text3={"Passengers ="}
            prop3={passengers}
            text4={"Manufacturer ="}
            prop4={manufacturer}
            img={`https://starwars-visualguide.com/assets/img/starships/${starshipid}.jpg`}
            />
            </div>
        
      
        </div>
    )
}