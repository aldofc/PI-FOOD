import React from 'react'
import { clearFilters } from '../../App/Actions/Index'
import { useDispatch, useSelector } from 'react-redux'

const ErrorHandler = ({error}) => {

const dispatch = useDispatch()
const diets = useSelector(state => state.games)
const handleback = () => {
    dispatch(clearFilters(diets))
}



  return (
    <div><h1>ERROR</h1>
          <p>{error}</p>
          <button onClick={handleback} > BACK </button>
          
          
          </div>
  )
}

export default ErrorHandler