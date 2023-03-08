import React from 'react'
import {  useEffect } from 'react'
import { useDispatch} from 'react-redux'
import { getRecipes } from '../../Redux/Actions/actions.js'
import { useSelector } from 'react-redux'
import Card from '../../components/Card/Card.jsx'

const Home = () => {

  const dispatch = useDispatch();
  const recipes = useSelector(state=>state.recipes)

  useEffect(()=>{
   dispatch(getRecipes());
  },[dispatch])

  return (
    <div className='card-container'>
      {recipes?.map(recipe=>{
     return(    

            <Card id={recipe.id} 
                  name={recipe.name} 
                  image={recipe.image} 
                  diets={recipe.diets} 
                  key={recipe.id} 
                  healthscore={recipe.healthscore} />
     )
    })}</div>
  )
}

export default Home