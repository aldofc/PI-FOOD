import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'

const LandingPage = () => {
  return (
    <Link to='/home'>
        <button className='button'>COME ON!!</button>
    </Link>
  )
}

export default LandingPage