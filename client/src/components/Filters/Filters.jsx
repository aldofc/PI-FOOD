import React, { useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux'

import { filterByDiets, getRecipes } from '../../Redux/Actions/actions'

const Filters = () => {


const dispatch = useDispatch()
const diets = useSelector(state => state.diets)

useEffect(() => {
    dispatch(getRecipes())
},[])

function handleFilterDiets(e){
    e.preventDefault();
    dispatch(getRecipes())
    dispatch(filterByDiets(e.targer.value))
}






  return (
    <div>


   <select onChange={e => handleFilterDiets(e)}>
    <option>todos los tipos de dietas</option>
    {diets?.map((e) =>{
        return(
            <option value={e.name}  key={e.id}>{e.name}</option>
        )
    })}
   </select>

    <div>Filters</div>
    </div>
  )
}

export default Filters