import React from "react"

export default function Card(props){
    
    return (

        <div className="card-container"> 
                <img src ={props.item.imageUrl} className="card-img"/>
        <div className="links">
            <div className = "basic-information">
                <img src = "../images/mapicon.png" className="card-mapicon"/>
                <p className="location">{props.item.location}</p>
                <p className="map-link"><a href={props.item.googleMapsUrl}>View on Google Maps</a> </p>
            </div>
            <div className="information">
                <h1>{props.item.title}</h1>
                <p className="date-text">{props.item.startDate} {props.item.endDate}</p>
                <p className="description-text">{props.item.description}</p>
            </div>
        </div>
        

        </div>
        
    )
}
