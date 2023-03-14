// import React, { useEffect } from 'react'
// import { useDispatch , useSelector } from 'react-redux'
// import { filterByDiets, getRecipes , orderByName , orderByHS} from '../../Redux/Actions/actions'

// const Filters = () => {

// const dispatch = useDispatch()
// const diets = useSelector(state => state.diets)

// useEffect(() => {
//     dispatch(getRecipes())
// },[dispatch])

// function handleCLick(e) {
//     e.preventDefault()
//     dispatch(getRecipes())
// }
//    function handleFilterDiets(e){
//     e.preventDefault();
//     dispatch(getRecipes());
//     dispatch(filterByDiets(e.targer.value))
// }
// function handleSortName(e){
//     e.preventDefault();
//     dispatch(orderByName(e.target.value))
// }
// function handleSortHS(e) {
//     e.preventDefault();
//     dispatch(orderByHS(e.target.value))
// }

// return (

//     <div>
//     <div>
//     <button onClick={e => { handleCLick(e) }}>
//             clear
//     </button>
//     </div>

//     <div>
//     <select onChange={e => handleSortName(e)}>
//        <option value="">orden alfabetico</option>
//        <option value='asc'>a-z</option>
//        <option value='desc'>z-a</option>
//     </select>

//     <select onChange={e => handleFilterDiets(e)}>
//        <option value='filtrado'>todos los tipos de dietas</option>
//         {diets?.map((e) =>{
//         return(
//             <option value={e.name}  key={e.id}> {e.name} </option>
//             )
//          })}
//    </select>

//     <select onChange={e => handleSortHS(e)}>
//        <option value="">Orden por HS</option>
//        <option value="hasc">HS Ascendente</option>
//        <option value="hdesc">HS Descendente</option>
//     </select>

//     </div>
//     </div>
//   )
// }

// export default Filters