import React from 'react'

import { Link } from 'react-router-dom'
//import logo from '../Images/logo.jpg'
import Linkedin from '../../Images/linkedink1.png'
import Instagram from '../../Images/instagram5.jpg'
import GitHub from '../../Images/github.png'
import Logo from '../../Images/navbarfood.jpg'
import './Navbar.css'


const NavBar = ({handleChange, handleSubmit, clearSearch}) => {
  return (

<div className='navbar'>



 
<div className='input1'>
    <form className='search-box' onChange={handleChange}>
    
    <div className='search'>
    <input  className='search__input' autoComplete='off'  placeholder="Search Recipe..." /> 
    <button  className='search__button'  type='submit' onClick={handleSubmit}>🔎</button>
    </div>

</form>
        </div>


        <div>
      

        <Link to="/home">
            <button className='button1'>Home</button>
        </Link>

        </div>


        
<div>
        <Link to ="/home">

            <img src={Logo} alt="logo"  className='logo'/>

        </Link>
        </div>


        <div>
        <Link to="/create">
            <button className='button2'>create recipe</button>
        </Link>
        </div>
        


       <div className='bajar'>
       <ul class="wrapper">
    <li class="icon facebook">
        <span class="tooltip">Linkedin</span>
        <span><i class="fab fa-facebook-f"></i></span>
        <a href="https://www.linkedin.com/in/aldo-flores-carreon-20bb66256"><img className='logos' src={Linkedin} alt="linkedin"  /></a>
    </li>

    

    <li class="icon twitter">
        <span class="tooltip">GitHub</span>
        <span>  <i class="fab fa-twitter"> </i></span>
        <a href="https://github.com/aldofc"><img className='logos' src={GitHub} alt="git"  /></a>
    </li>



    <li class="icon instagram">
        <span class="tooltip">Instagram</span>
        <span><i class="fab fa-instagram"></i></span>
        <a href="https://www.instagram.com/aldo.fc1/"><img className='logos' src={Instagram} alt="instagram" /></a>
    </li>


    </ul>
       </div>









    </div>
    
  )
}

export default NavBar;