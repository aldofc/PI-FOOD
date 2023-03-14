import React from 'react'

import { getRecipebyID } from '../../Redux/Actions/actions'
import {useDispatch,useSelector} from 'react-redux'
import { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import './Details.css'

const Details = () => {

const dispatch = useDispatch()
const recetas = useSelector((state) => state.recipeByID);

const {id} = useParams()

useEffect(()=>{
dispatch(getRecipebyID(id))
},[dispatch])

return (
    <div>
      <h2>{recetas.name}</h2>
      <div>
        <img src={recetas.image} alt='not found'/>
      </div>

      <div>
        <h4>summary:</h4><p>{recetas.summary}</p>
      </div>

      <div>
        <div><h5>Health Score:</h5><p>{recetas.healthscore}</p></div>
        <div><h5>Type Diet</h5><p></p>{recetas.diets}</div>
        <div><h5>Type Dish</h5><p>{recetas.dishtypes}</p></div>
      </div>


      <div>
        <h5>steps</h5>
        <ol>
          {Array.isArray(recetas.steps) ? recetas.steps.map(e => {
            return(
              <li>{e}</li>
            )
          }): <p>not steps</p>}
        </ol>
      </div>
   
    </div>
  )
}



export default Details