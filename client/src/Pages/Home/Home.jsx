import React from 'react'
//import Card from '../../components/Card/Card'
import CardContainer from '../../components/CardContainer/CardContainer'
// import Card from '../../components/Card/Card'
// import NavBar from '../../components/Navbar/Navbar'
// import { Loading } from '../../../src/App/Actions/Index'

// import Loader from '../../components/Loader/Loader'
// import { useState, useEffect } from 'react'
// import { useDispatch, useSelector} from 'react-redux'

// import {getRecipes,getRecipeByName,getDiets} from '../../../src/App/Actions/Index'
// import Paginado from '../../components/Paginado/Paginado'
//import {Link} from 'react-router-dom'

const Home = () => {

  return(
    <div>
   <CardContainer />
    </div>
  )
}


// const dispatch = useDispatch();
// const allRecipes = useSelector((state) => state.diets)
// const diets = useSelector(state => state.dietsSorted)
// const loader = useSelector(state => state.loader)
  
// const [searchString, setSearchString] = useState('')
// const [currentPage, setCurrentPage] = useState(1)

// const [loading, setLoading] = useState(false)

// const recipesPerPage = 9;
// const indexOfLastRecipe = currentPage * recipesPerPage
// const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
// const currentRecipes = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe)

// const paginado = (pageNumber) => {
//   setCurrentPage(pageNumber)
// }



// useEffect(async () => {
//   dispatch(Loading())
//   await dispatch(getRecipes())
//   dispatch(getDiets())
//   dispatch(Loading())
// },[dispatch])



// //----------------------------------------input
// function handleChange(e) {
//   e.preventDefault(e)
//   setSearchString(e.target.value)
// }

// function handleSubmit(e){
//   e.preventDefault(e)
//   dispatch(getRecipeByName(searchString))
// }

// function clearSearch(){
//   dispatch(getRecipes())
//   setSearchString('')
// }

// useEffect(() => {
//   dispatch(getRecipes())
// }, [dispatch])

// //-------------------------------------------input^
// if(loader === true) {   
// return(
//   <div><p>home</p>
//     <NavBar 
//     handleChange={handleChange}
//     handleSubmit={handleSubmit}
//     clearSearch={clearSearch}
//     setCurrentPage={setCurrentPage}
//     setLoading={setLoading}
//     />

//  <Paginado   className="numspags"
//                     currentPage={currentPage}
//                     recipesPerPage={recipesPerPage}
//                     allRecipes={allRecipes.length}
//                     paginado={paginado} />


// <div className='cards'>
//                     {currentRecipes?.map(e => {
//                         return (
//                             <Card id={e.id} name={e.name} image={e.image} diets={e.diets} key={e.id} healthscore={e.healthscore} />
//                         )
//                     })}

// </div>
//                 <Paginado className="numspags"
//                     currentPage={currentPage}
//                     recipesPerPage={recipesPerPage}
//                     allRecipes={allRecipes.length}
//                     paginado={paginado} />
// </div>
//  )
//                   }else {
//                     return (
//                       <Loader/>
//                     )
//                   }
// }

export default Home