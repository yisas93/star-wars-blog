import React from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
export const Details=(props)=>{

const navigate=useNavigate()
    return(
        <div className="card mb-3" >
            <div className="row g-0">
                <div className="col md-4">
                    <img src={props.img} alt="" />

                </div>
                <div className="col md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.text}</p>
                       <Navigate to={-1}> <button>go back</button></Navigate>
                    </div>
                </div>
            </div>

        </div>
    )
}