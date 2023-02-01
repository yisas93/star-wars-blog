import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const StarshipsDetail=()=>{
const {store,actions}=useContext(Context);
const {starshipid}=useParams();
    return(
        <h1>starship{starshipid}</h1>
    )
}