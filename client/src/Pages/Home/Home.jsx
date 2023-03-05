import React from 'react'
import Card from '../../components/Card/Card'
import NavBar from '../../components/Navbar/Navbar'
import ErrorHandler from '../../components/Error-handler/ErrorHandler'
import Loader from '../../components/Loader/Loader'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'

import {getRecipes,getRecipeByName,getDiets} from '../../../src/App/Actions/Index'
//import {Link} from 'react-router-dom'

const Home = () => {
  
const [searchString, setSearchString] = useState('')
const [currentPage, setCurrentPage] = useState(1)
const [cardsPerPage, setCardsPerpage] = useState(12)
const [loading, setLoading] = useState(false)

const dispatch = useDispatch();
const diets = useSelector((state) => state.diets)
const dietsSorted = useSelector(state => state.dietsSorted)
const error = useSelector(state => state.error)

useEffect(() => {
  setLoading(true)
  dispatch(getRecipes())
  dispatch(getDiets())
  setTimeout(() => {
    setLoading(false)
  },2000)
},[])

const lastCardIndex = currentPage * cardsPerPage
const firstCardIndex = lastCardIndex - cardsPerPage
let currentCards
if (dietsSorted.length > 0) {
   currentCards = dietsSorted.slice(firstCardIndex, lastCardIndex)

}else{
  currentCards = diets.slice(firstCardIndex,lastCardIndex)
}

//----------------------------------------input
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

//-------------------------------------------input^

return(
  <div><p>home</p>
    <NavBar 
    handleChange={handleChange}
    handleSubmit={handleSubmit}
    clearSearch={clearSearch}
    setCurrentPage={setCurrentPage}
    setLoading={setLoading}
    />

    <div>
      { loading ? (
        <Loader />
      ) : error.length ? (
        <ErrorHandler error={error} />
      ) : (
        currentCards?.map(e => {
          console.log(e.createByUser)
          return (
            <Card
            key={e.id}
            id={e.id}
            name={e.name}
            image={e.image}
            diets={e.diets}
            healthscore={e.healthscore}
            />
          )
        })
      )}
    </div>

    <Card diets={diets}/>
    
  </div>
)








    
    


    
    

  
}

export default Home