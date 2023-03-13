import React from 'react'
import {  useEffect } from 'react'
import { useDispatch} from 'react-redux'
import {  getRecipeByName, getRecipes } from '../../Redux/Actions/actions.js'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import Card from '../../components/Card/Card.jsx'
import NavBar from '../../components/Navbar/Navbar.jsx'

//import Loader from '../../components/Loader/Loader'
//import { Loading } from '../../Redux/Actions/actions.js'
import './Home.css'

const Home = () => {

  const dispatch = useDispatch();
  const recipes = useSelector(state=>state.recipes)
  //const loader = useSelector((state => state.loader))
  const [searchString, setSearchString] = useState("");

  useEffect(()=>{
   
  dispatch(getRecipes());
   
  },[dispatch])



function handleChange(e){
  e.preventDefault(e)
  setSearchString(e.targer.value)
  
}

function handleSubmit(e){
  e.preventDefault(e)
  dispatch(getRecipeByName(searchString))
}



  return (
    <div>

      <NavBar  
      handleChange={handleChange}
      handlerSubmit={handleSubmit}
      />
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



    </div>
  )
}

export default Home