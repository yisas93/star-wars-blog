import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "./compostyles.css"
import { ProgressPlugin } from "webpack";
export const CardDetail=(props)=>{

    function imgError(e){
        console.log("error"+ e.target.src)
        e.target.src = "https://cdn.dribbble.com/users/490588/screenshots/3329226/star_wars_404.png";
      }

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