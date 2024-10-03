import React from "react"
import Navbar from "./Component/Navbar"
import Card from "./Component/Card"
import data from "./data"

export default function App(){
    
    const cards = data.map(item =>{
        return (
            <Card 
                item={item}
            />
        )
    })
    
    return (
            <div> 
                  <Navbar />
                    <section className="cards-list">
                {cards}
            </section>
            </div>
    )
}

