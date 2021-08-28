import React from 'react'
import './card.css'


const Card = (props) => {
    console.log(props);
    
    return (
        <>
            <div className="card">
                <div>
             <img src={props.imgscr} style={{height: 300}} alt="" />
             </div>
             <h3>{props.title}</h3>
             <p>{[props.stream]}</p>
             <a href={props.link} target="_blank"><button>Watch nOW</button></a>
            </div>
        </>
    )
}

export default Card 
