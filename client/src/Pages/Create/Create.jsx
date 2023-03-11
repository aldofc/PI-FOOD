import React, { useState } from 'react'

import './Create.css'

const Create = () => {
  

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
}

return (

    <form>


      <div>
      <label>Name: </label>
      <input type="text" value={input.name} name='name' onChange={handleChange}/>
      </div>

      <div>
      <label>Summary: </label>
      <input type="text"  value={input.summary} name="summary" onChange={handleChange}/>
      </div>

      <div>
      <label>dish type: </label>
      <input type="text"  value={input.dishtypes} name="dishtypes" onChange={handleChange}/>
      </div>

      <div>
      <label>Health Score: </label>
      <input type="text" value={input.healthscore} name="healthscore" onChange={handleChange}/>
      </div>


    </form>
  )
}

export default Create