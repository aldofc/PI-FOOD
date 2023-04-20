import React from 'react'
import {  useEffect } from 'react'
import { useDispatch} from 'react-redux'
import {  getDiets, getRecipeByName, getRecipes , Loading, sortApiOrData } from '../../Redux/Actions/actions.js'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import Card from '../../components/Card/Card.jsx'
import NavBar from '../../components/Navbar/Navbar.jsx'
import { filterByDiets , orderByName , orderByHS } from '../../Redux/Actions/actions'
import Paginado from '../../components/Paginado/Paginado'
import Loader from '../../components/Loader/Loader'
// import { filterRecipeBySourse } from '../../Redux/Actions/actions.js'
import './Home.css'

const Home = () => {

  const dispatch = useDispatch();
  const allRecipes = useSelector(state=>state.recipes)
  const diets = useSelector(state => state.diets)
  const loader = useSelector(state => state.loader)
  //const origin = useSelector(state => state.dataOrApi)
  
  const [orden, setOrden] = useState('')
  const [searchString, setSearchString] = useState("");
  const [currentPage, setCurrentPage] = useState(1)

  const recipesPerPage = 9;
  const lastCardIndex = currentPage * recipesPerPage
  const firstCardIndex = lastCardIndex - recipesPerPage
  const currentRecipes = allRecipes.slice(firstCardIndex, lastCardIndex)  //El método slice() devuelve una copia de una parte del array 
                                                                          //dentro de un nuevo array empezando por inicio hasta fin 
                                                                          //(fin no incluido). El array original no se modificará

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  useEffect(async()=>{   // sin el async y await no carga el loader
    dispatch(Loading()) 
  await dispatch(getRecipes());
  dispatch(getDiets())
   dispatch(Loading())
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
  dispatch(Loading())
  dispatch(getRecipes())
  dispatch(Loading())
}
  async function handleFilterDiets(e){ //no funcionaba el filtro bien y probando con async await funciona correctamente
  e.preventDefault();
  await dispatch(getRecipes());
  dispatch(filterByDiets(e.target.value))
  setCurrentPage(1)
  
  
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

 function handleDataOrApi(e){
  e.preventDefault();
  const select = e.target.value;

dispatch(sortApiOrData(select))

 setCurrentPage(1);
 setOrden(`Ordenado ${select}`)
}

// const filterBySourse = e => {
//   e.preventDefault()
//   dispatch(filterRecipeBySourse(e.target.value))

// }
if(loader==true){ 
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
  
   <select  onChange={e => handleSortHS(e)}>
       <option value=""> ORDER BY HEALTHSCORE </option>
       <option value="hdesc">HIGH HS</option>
       <option value="hasc">HIGH HS</option>   
    </select>

    <select name='origin' onChange={e => handleDataOrApi(e)}>
      <option value=""> DataOrApi </option>
      <option value='all'> all </option>
      <option value="data">Data</option>
      <option value="api">Api</option>
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
}else{
  return(
    <Loader />
  )
}
}

export default Home