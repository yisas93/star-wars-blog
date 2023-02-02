import React from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
export const Details=(props)=>{
    function imgError(e){
        console.log("error"+ e.target.src)
        e.target.src = "https://cdn.dribbble.com/users/490588/screenshots/3329226/star_wars_404.png";
      }
const navigate=useNavigate()
    return(
        <div className="card ">
        <img src={props.img} 
          onError={imgError}/>
        <p>{props.text}</p>
        <div className="buttonsdeta">
            <button>Go Back</button>
            <button>Favorite</button>
        </div>
        </div>
    )
}