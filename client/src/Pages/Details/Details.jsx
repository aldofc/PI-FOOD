import React from 'react'

import { getRecipebyID } from '../../Redux/Actions/actions'
import {useDispatch,useSelector} from 'react-redux'
import { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import './Details.css'

const Details = () => {

const dispatch = useDispatch()
const recetas = useSelector((state) => state.recipeByID)

const {id} = useParams()

useEffect(()=>{
  dispatch(getRecipebyID(id))
},[dispatch])

  return (
    <div>
      <h2>{recetas[0].name}</h2>
      <div>
        <img src={recetas[0].image} alt='img not found'/>
      </div>

      <div>
        <h4>summary:</h4><p>{recetas[0].summary}</p>
      </div>

      <div>
        <div><h5>Health Score:</h5><p>{recetas[0].healthscore}</p></div>
        <div><h5>Type Diet</h5><p></p>{recetas[0].diets}</div>
        <div><h5>Type Dish</h5><p>{recetas[0].dishtypes}</p></div>
      </div>
   
    </div>
  )
}


export default Details