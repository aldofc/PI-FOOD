import React from 'react'
import {  useEffect } from 'react'
import { useDispatch} from 'react-redux'
import {  getDiets, getRecipeByName, getRecipes } from '../../Redux/Actions/actions.js'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import Card from '../../components/Card/Card.jsx'
import NavBar from '../../components/Navbar/Navbar.jsx'
import { filterByDiets , orderByName , orderByHS } from '../../Redux/Actions/actions'
import Paginado from '../../components/Paginado/Paginado'
// import { filterRecipeBySourse } from '../../Redux/Actions/actions.js'

import './Home.css'

const Home = () => {

  const dispatch = useDispatch();
  const allRecipes = useSelector(state=>state.recipes)
  const diets = useSelector(state => state.diets)
  //const allRecipes = useSelector((state) => state.recipes)
  
  const [orden, setOrden] = useState('')
  const [searchString, setSearchString] = useState("");
  const [currentPage, setCurrentPage] = useState(1)

  const recipesPerPage = 9;
  const lastCardIndex = currentPage * recipesPerPage
  const firstCardIndex = lastCardIndex - recipesPerPage
  const currentRecipes = allRecipes.slice(firstCardIndex, lastCardIndex)

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  useEffect(()=>{
  dispatch(getRecipes());
  dispatch(getDiets())
  },[dispatch])

function handleChange(e){
  e.preventDefault(e)
  setSearchString(e.target.value)
  
}
function handleSubmit(e){
  e.preventDefault(e)
  dispatch(getRecipeByName(searchString))
}

function handleCLick(e) {
  e.preventDefault()
  dispatch(getRecipes())
}
  function handleFilterDiets(e){
  e.preventDefault();
  dispatch(getRecipes());
  dispatch(filterByDiets(e.target.value))
  
  
}
function handleSortName(e){
  e.preventDefault();
  dispatch(orderByName(e.target.value))
  setOrden(`Ordenado ${e.target.value}`)
  
}
function handleSortHS(e) {
  e.preventDefault();
  dispatch(orderByHS(e.target.value))
  setOrden(`Ordenado ${e.target.value}`)
  
}


// const filterBySourse = e => {
//   e.preventDefault()
//   dispatch(filterRecipeBySourse(e.target.value))

// }

return (
    <div>
    <div>
         <NavBar  
          handleChange={handleChange}
          handlerSubmit={handleSubmit}
                />
         </div>

      <div className='content-select'>
    <select onChange={e => handleSortName(e)}>
       <option value=""> ALPHABETICAL ORDER </option>
       <option value='asc'> A-Z </option>
       <option value='desc'> Z-A </option>
    </select>
    

   

    <select onChange={e => handleFilterDiets(e)}>
       <option value='filtrado'> ALL TYPE OF DIET </option>
        {diets?.map((e) => {
        return (
            <option value={e.name}  key={e.id}> {e.name} </option>
            )
         })}
   </select>
  

   

    <select onChange={e => handleSortHS(e)}>
       <option value=""> ORDER BY HEALTHSCORE </option>
       <option value="hasc">HIGH HS</option>
       <option value="hdesc">LOW HS</option>
    </select>

    <button className='buttonReset' onClick={e => { handleCLick(e) }}>
    RESET
    </button>


    {/* <select name="filterBySource" id="filterBySource" onChange={filterBySourse}>
      <option key='none'  value="none"> filter by sourse</option>
      <option value='API' onClick={filterBySourse}> API</option>
      <option value='DB' onClick={filterBySourse}>DB</option>

    </select> */}

    </div>
    
    

    



       
       <div className='card-container'>
           {currentRecipes?.map(recipe=>{
           return(   
            <Card id={recipe.id} 
                  name={recipe.name} 
                  image={recipe.image} 
                  diets={recipe.diets} 
                  key={recipe.id} 
                  healthscore={recipe.healthscore} />
     )
    })}</div>


<Paginado 
    currentPage={currentPage}
    recipesPerPage={recipesPerPage}
    allRecipes={allRecipes.length}
    paginado={paginado} />
    



    </div>
    
  )
}

export default Home