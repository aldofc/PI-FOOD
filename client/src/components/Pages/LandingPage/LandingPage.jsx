import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

const LandingPage = () => {
  return (
    <Link to='/home'>
        <button>este boton nos lleva al home</button>
    </Link>
  )
}

export default LandingPage