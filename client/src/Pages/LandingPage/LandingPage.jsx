import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'
import Linkedin from '../../Images/linkedink1.png'
import Instagram from '../../Images/instagram5.jpg'
import GitHub from '../../Images/github.png'
import Landing3 from '../../Images/landin3.jpg'

const LandingPage = () => {
  return (



    

    

    <div className='containerLanding'>

    
    
    <div className='container-left'>

    


  <p className='letra-grande'>GOOD FOOD</p>
  <p className='letra-grande'>GOOD LIFE</p>
<p className='letra-pequeña'>DELICIOUS FOOD FOR YOU</p>

<Link to='/home'>
        <button className='button2'>COME ON!!</button>
    </Link>
    
    </div>



<div className='container-right'>
  <img src={Landing3} alt="landing"  width='800vw'  height='700vh'/>
</div>



<div className='container-redes-sociales'>

       <ul class="wrapper2">
    <li class="icon facebook2">
        <span class="tooltip2">Linkedin</span>
        <span><i class="fab fa-facebook-f2"></i></span>
        <a href="https://www.linkedin.com/in/aldo-flores-carreon-20bb66256"><img className='logos' src={Linkedin} alt="linkedin"  /></a>
    </li>

    <li class="icon twitter2">
        <span class="tooltip2">GitHub</span>
        <span>  <i class="fab fa-twitter2"> </i></span>
        <a href="https://github.com/aldofc"><img className='logos' src={GitHub} alt="git"  /></a>
    </li>

<li class="icon instagram2">
        <span class="tooltip2">Instagram</span>
        <span><i class="fab fa-instagram2"></i></span>
        <a href="https://www.instagram.com/aldo.fc1/"><img className='logos' src={Instagram} alt="instagram" /></a>
    </li>
</ul>

</div>







      </div>
 

    





  )
}

export default LandingPage