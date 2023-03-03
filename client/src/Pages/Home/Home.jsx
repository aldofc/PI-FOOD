import React from 'react'
import Card from '../../components/Card/Card'
import NavBar from '../../components/Navbar/Navbar'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'

import {getRecipes,getRecipeById,getRecipeByName,postRecipes,getDiets} from '../../../src/App/Actions/Index'
//import {Link} from 'react-router-dom'

const Home = () => {
  
const dispatch = useDispatch();
const diets = useSelector((state) => state.diets)
const [searchString, setSearchString] = useState('')


function handleChange(e) {
  e.preventDefault(e)
  setSearchString(e.target.value)
}

function handleSubmit(e){
  e.preventDefault(e)
  dispatch(getRecipeByName(searchString))
}

function clearSearch(){
  dispatch(getRecipes())
  setSearchString('')
}

useEffect(() => {
  dispatch(getRecipes())
}, [dispatch])

return(
  <div><p>home</p>
    <NavBar 
    handleChange={handleChange}
    handleSubmit={handleSubmit}
    clearSearch={clearSearch}
    
    />

    <Card diets={diets}/>
    
  </div>
)








    
    


    
    

  
}

export default Home