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
    <div className='containerDetails'>
      <h2 className='tittleFont'>{recetas[0].name}</h2>
      <div className='imgSummary'>
        <img src={recetas[0].image} alt='not found'/>
      <div className='summaryFont'>
        <h3 className='summaryTitle'>summary:</h3><p>{recetas[0].summary}</p>
        </div>
      </div>

      <div className='containerhealth'>
        <div className='fontCarac'><h3>Health Score:</h3><p className='fontCaracMini'>{recetas[0].healthscore}</p></div>
        <div className='fontCarac'><h3>Type Diet</h3><p className='fontCaracMini'>{recetas[0].diets}</p></div>
        <div className='fontCarac'><h3>Type Dish</h3><p className='fontCaracMini'>{recetas[0].dishtypes}</p></div>
      </div>


      <div className='stepsContainer'>
        <h4 className='stepsFont'>steps</h4>
        <ol>
          {Array.isArray(recetas[0].steps) ? recetas[0].steps.map(e => {
            return(
              <li className='stepsFont2'>{e}</li>
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