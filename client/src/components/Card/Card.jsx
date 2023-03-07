import React from 'react'
//import { Link } from 'react-router-dom'
import './Card.css'

const Card = (props) => {
  return(







    
      <div className='card'> 
          <img  className='imagen'   src={props.image} alt="imagen"  />
      <div>

      <h3>name{props.name}</h3>
      <h5>TIPO DE DIETA: {props.diets.join(',')}</h5>
      <h5>HEALTH SCORE:{props.healthscore}</h5>

    </div>
    </div>
        
    
)
}





export default Card