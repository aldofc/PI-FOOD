import React, { useEffect, useState } from 'react'
import {getDiets, postRecipes} from '../../Redux/Actions/actions'
import {useHistory} from 'react-router-dom'
import {useDispatch , useSelector} from 'react-redux'


import './Create.css'

//const Create = () => {
  
function Create() {
  const dispatch = useDispatch();
  const history = useHistory();
  const diets = useSelector(state => state.diets)
  

 const [dataSteps, setDataSteps] = useState("")
  const [errors, setErrors] = useState({
      name:'',
      summary:'',
      dishtypes: '',
      healthscore: '',
  })
  const [input, setInput] = useState({
      name: '',
      summary: '',
      image: '',
      healthscore: '',
      dishtypes: '',
      steps: [],
      diets: [],
  })

useEffect(() => {
  dispatch(getDiets())
},[dispatch])



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
  }if(input.dishtypes === ''){
    errors.dishtypes='dish type required'
  }
  return errors
}



function handleSubmit(e) {
  e.preventDefault();
  if(input.name === '') {
    return alert('please enter a name')
  }
  if(input.summary === '') {
    return alert('please enter the summary of the dish')
  }
  if(input.image === ' ') {
    setInput({
      ...input,
      image: 'https://thumbs.dreamstime.com/b/el-utensilio-de-la-tabla-de-cortar-y-de-la-cocina-con-receta-vac%C3%ADa-enumera-en-una-tabla-de-madera-55735909.jpg'
    })
  }
  if(input.healthscore >100 || input.healthscore <0) {
    return alert('Health score must be between 0 and 100')
  }

  dispatch(postRecipes(input))
  alert('the recipe was created')
  setInput({
    name: '',
    summary: '',
    image: '',
    healthscore: '',
    dishtypes:[],
    steps: [],
    diets: [],
  })
   history.push('/home')
 }

 function handlerCheckBox(e){
  if(e.target.checked) {
    setInput({
      ...input,
      diets:[...input.diets, e.target.value]
    })
  }else{
    setInput({
      ...input,
      diets: input.diets.map(r => r !== e.target.value)
    })
  }
 }

 function handlerAddSteps(e) {
  e.preventDefault()
  setInput({
    ...input,
    steps: [...input.steps,dataSteps]
  })
  setDataSteps('')
 }


 function handlerDeleteAll(e){
  e.preventDefault()
  setInput({
    ...input,
    steps: []
  })
  setDataSteps('')
 }


 




return (
    <div className='containerCreate'>

     
     <div className='conainerForm'>
    <form  className='form' onSubmit={e => handleSubmit(e)}>
    <p className='heading'>CREATE RECIPE</p>
     <div className='inputs'>
      <div>
      <label className='heading2' >Name :</label>
      <input className='input'  autoComplete='off' type="text" value={input.name} name='name' onChange={handleChange}/>
      </div>
            {errors.name && (<p>{errors.name}</p>)}

      <div> 
      <label className='heading2'>Summary : </label>
      <input className='input'  autoComplete='off' type="text"  value={input.summary} name="summary" onChange={handleChange}/>
      </div>
            {errors.summary && (<p>{errors.summary}</p>)}

      <div> 
      <label className='heading2'>dish type : </label>
      <input className='input'  autoComplete='off' type="text"  value={input.dishtypes} name="dishtypes" onChange={handleChange}/>
      </div>
            {errors.dishtypes && (<p>{errors.dishtypes}</p>)}

      <div>
      <label className='heading2'>Health Score : </label>
      <input  className='input' autoComplete='off'  type="number" value={input.healthscore} name="healthscore" onChange={handleChange}/>
      </div>
            {errors.healthscore && (<p>{errors.healthscore}</p>)} 

      </div>



      <div className='containerCheckBox'>
        <fieldset className='typeDish'>
        <legend className='heading'>choose the type of diet</legend>
        {diets.map((e)=>{
          return(
            
          <div className='organizador'>
            
            <p>{e.name}</p>
            <input className='checkmark'    type='checkbox'  name={e.name} value={e.name}     onChange={(e) => handlerCheckBox(e)}>
              </input>
              
              </div>
              )})}
        </fieldset>
      </div>

      <div>
        <legend className='heading'>steps:</legend>
        <textarea  value={dataSteps} name="name"  onChange={e => setDataSteps(e.target.value)}  cols="80" rows="8"></textarea>
        <div>
          <input className='btn2' type="submit" name='add'  value='add step'  onClick={e => handlerAddSteps(e)}/>
          <input className='btn2' type="submit" name='delete'  value='deleteAll'  onClick={e => handlerDeleteAll(e)}/>
        </div>
      </div>


<div className='containerSteps'>
  <ol>{input.steps.map(e => {return(<><li>{e}</li></>)})}</ol>
</div>



            <div>
              <button className='btn'  type='submit'>CREATE RECIPE</button>
            </div>


    </form>
    </div>
    </div>
  )
}


export default Create;