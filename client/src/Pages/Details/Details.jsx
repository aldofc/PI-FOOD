import React from 'react'

import { getRecipebyID, Loading } from '../../Redux/Actions/actions'
import {useDispatch,useSelector} from 'react-redux'
import { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import './Details.css'
import Loader from '../../components/Loader/Loader'

const Details = () => {

const dispatch = useDispatch()
const recetas = useSelector((state) => state.recipeByID);
const loader = useSelector(state => state.loader)

const {id} = useParams()

useEffect(()=>{
dispatch(Loading())
dispatch(getRecipebyID(id))
dispatch(Loading())
},[dispatch])




if(loader === true && recetas[0] && recetas[0].id == id) {

return (
    <div>
      <h2>{recetas[0].name}</h2>
      <div>
        <img src={recetas[0].image} alt='not found'/>
      </div>

      <div>
        <h4>summary:</h4><p>{recetas[0].summary}</p>
      </div>

      <div>
        <div><h5>Health Score:</h5><p>{recetas[0].healthscore}</p></div>
        <div><h5>Type Diet</h5><p></p>{recetas[0].diets}</div>
        <div><h5>Type Dish</h5><p>{recetas[0].dishtypes}</p></div>
      </div>


      <div>
        <h5>steps</h5>
        <ol>
          {Array.isArray(recetas[0].steps) ? recetas[0].steps.map(e => {
            return(
              <li>{e}</li>
            )
          }): <p>not steps</p>}
        </ol>
      </div>
   
    </div>
  )
}else {
  return(
    <Loader />
  )
}
}



export default Details