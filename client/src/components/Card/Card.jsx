import React from 'react'
import {Link} from 'react-router-dom'
import './Card.css'

function Card ({image, name, diets, id, healthscore}) {
   return(
<div className='card'> 
      <Link to={`/home/${id}`}>
      <img  className='imagen' src={image} alt="imagen"  />
    </Link>
<div>
      <h3>{name}</h3>
      <h5> DIET TYPE : {diets.join(',')}</h5>
      <h5> HEALTH SCORE :{healthscore}</h5>
</div>
</div>
        
    
)
}








export default Card