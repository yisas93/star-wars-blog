import React, { useContext } from "react";
import { useParams,  } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const PlanetDetail=()=>{
const {store,actions}=useContext(Context);
const {planetid}=useParams();
console.log(planetid)
    return(
        <div>
        <h1>planet{planetid}</h1>
        <Link to={-1}><button>fdsa</button></Link>
        </div>
    )
}