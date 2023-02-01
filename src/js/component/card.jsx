import React from "react"
import { Link } from "react-router-dom"
import "./compostyles.css"
import { useContext } from "react"
import { Context } from "../store/appContext"
export const Card=(props)=>{
  // text
  //title
  //image
  //id

  const {actions, store}=useContext(Context)

  function imgError(e){
    console.log("error"+ e.target.src)
    e.target.src = "https://cdn.dribbble.com/users/490588/screenshots/3329226/star_wars_404.png";
  }

    return (
        <div className="card"  id="card">
  <img 
  src={props.image} 
  className="card-img-top imagcard" 
  onError={imgError}
  />
  <div className="card-body">
    <div className="title-card">
    <h5 className="card-title" id="name">{props.title}</h5>
    </div>
    <div className="buttonscard d-flex justify-content-between">
    <Link to={`/${props.type}/${props.id}`} className="btn btn-primary buttoncard" >Details</Link>
    <button onClick={()=>actions.handleFavorites({name:props.title,link:`/${props.type}/${props.id}`})} className="btn btn-warning buttoncard" >Favorites</button>
    </div>
  </div>
</div>

    )
} 