import React from "react"


export const Card=(props)=>{
  async function cargarDatos(){
    const respuesta = await fetch("https://www.swapi.tech/api/starships/9")
    const data = await respuesta.json()
    console.log(data)
  }
    return (
        <div className="card" style={{"width": "18rem"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

    )
} 