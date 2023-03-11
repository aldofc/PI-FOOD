import React, { useState } from 'react'

import './Create.css'

const Create = () => {
  
const [errors,setErrors] = useState({
  name:'',
  summary:'',
  dishtypes: '',
  healthscore: '',
})

const [input , setInput ] = useState({

  name:'',
  summary:'',
  dishtypes: '',
  healthscore: '',
  image: '',
  steps: [],
  diets: [],

})

function handleChange(e) {
  setInput({
    ...input,
    [e.target.name]: e.target.value
  })
  setErrors(validate({
    ...input,
    [e.target.name]: e.target.value
  }))
}

function validate(input){
  let errors={};
  if(!input.name){
    errors.name ='Name required'
  } if(!input.summary){
    errors.summary='summary required'
  }if(input.healthscore > 100 || input.healthscore < 0){
    errors.healthscore = 'the health score must be between 0 and 100'
  }
  return errors
}

return (

    <form>


      <div>
      <label>Name: </label>
      <input autoComplete='off' type="text" value={input.name} name='name' onChange={handleChange}/>
      </div>
            {errors.name && (<p>{errors.name}</p>)}

      <div>
      <label>Summary: </label>
      <input  autoComplete='off' type="text"  value={input.summary} name="summary" onChange={handleChange}/>
      </div>
            {errors.summary && (<p>{errors.summary}</p>)}

      <div>
      <label>dish type: </label>
      <input autoComplete='off' type="text"  value={input.dishtypes} name="dishtypes" onChange={handleChange}/>
      </div>

      <div>
      <label>Health Score: </label>
      <input autoComplete='off'  type="number" value={input.healthscore} name="healthscore" onChange={handleChange}/>
      </div>
            {errors.healthscore && (<p>{errors.healthscore}</p>)} 


    </form>
  )
}

export default Create