import React from "react"
import { Link } from "react-router-dom"
import "./compostyles.css"
export const Card=(props)=>{
  // text
  //title
  //image
  //id

    return (
        <div className="card" style={{"width": "18rem"}} id="card">
  <img src={props.image} className="card-img-top" />
  <div className="card-body">
    <h5 className="card-title" id="name">{props.title}</h5>
    <p className="card-text">{props.text}</p>
    <Link to={`${props.type}/${props.id}`} className="btn btn-primary" >Details</Link>
    <button className="btn btn-warning" style={{marginLeft: "80px"}}>Favorites</button>
  </div>
</div>

    )
} 