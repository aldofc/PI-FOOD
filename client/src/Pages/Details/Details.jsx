import React from 'react'

import { getRecipebyID } from '../../Redux/Actions/actions'
import {useDispatch,useSelector} from 'react-redux'
import { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import './Details.css'

const Details = () => {

const dispatch = useDispatch()
const recipe = useSelector((state) => state.recipeByID)

const {id} = useParams()

useEffect(()=>{
dispatch(getRecipebyID(id))
},[dispatch])

return (
    <div>
      <h2>{recipe[0].name}</h2>
      <div>
        <img src={recipe[0].image} alt='not found'/>
      </div>

      <div>
        <h4>summary:</h4><p>{recipe[0].summary}</p>
      </div>

      <div>
        <div><h5>Health Score:</h5><p>{recipe[0].healthscore}</p></div>
        <div><h5>Type Diet</h5><p></p>{recipe[0].diets}</div>
        <div><h5>Type Dish</h5><p>{recipe[0].dishtypes}</p></div>
      </div>


      <div>
        <h5>steps</h5>
        <ol>
          {Array.isArray(recipe[0].steps) ? recipe[0].steps.map(e => {
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