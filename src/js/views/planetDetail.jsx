import React, { useContext, useEffect } from "react";
import { useParams,  } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Details } from "../component/detail.jsx";
export const PlanetDetail=()=>{
const {store,actions}=useContext(Context);
const {planetid}=useParams();
useEffect(() => {
    (async () => {
      await actions.getStarwars("planets");
    })();
  }, []);
console.log(store.planets)
    return(
        <div>
            <div>
            <Details
            text={store.planets[planetid-1].name}
                
            
            img={`https://starwars-visualguide.com/assets/img/planets/${planetid}.jpg`}
            />
            </div>
        <h1>planet{planetid}</h1>
        <Link to={-1}><button>fdsa</button></Link>
        </div>
    )
}