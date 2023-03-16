import axios from 'axios'

export const GET_RECIPES = 'GET_RECIPES'
export const GET_RECIPE_BY_ID = 'GET_RECIPE_BY_ID'
export const GET_RECIPE_BY_NAME = 'GET_RECIPE_BY_NAME'
export const GET_DIETS = 'GET_DIETS'
export const LOADER = 'LOADER'
export const FILTER_BY_DIETS = 'FILTER_BY_DIETS'
export const SORT_BY_NAME = 'SORT_BY_NAME'
export const SORT_BY_HS = 'SORT_BY_HS'
export const FILTER_BY_SOURCE = 'FILTER_BY_SOURCE'
export const DATA_OR_API = 'DATA_OR_API'





export function getRecipes(){
    return async function(dispatch){
        const response = await axios.get('http://localhost:3001/recipes',{})
        return dispatch({
            type: GET_RECIPES,
            payload: response.data
        })
    }
}

export function getRecipebyID(id){ 
    
    return async function(dispatch){
        const response = await axios.get(`http://localhost:3001/recipes/${id}`,{})
        return dispatch({
            type : GET_RECIPE_BY_ID,
            payload : response.data
        })
    }

}

export function getRecipeByName(payload){
    return async function(dispatch){
        try{
            const response = await axios.get('http://localhost:3001/recipes/name?=' + payload)
            return dispatch({
                type: GET_RECIPE_BY_NAME,
                payload: response.data
            })
        } catch (error) {
            alert('recipe not found')
        }
    }
}

export function postRecipes(payload){
    return async function(dispatch){
        const response = await axios.post('http://localhost:3001/recipes', payload)
        return response
    }
}

export function getDiets(){
    return async function(dispatch){
        const response = await axios.get('http://localhost:3001/diets',{})
        return dispatch({
            type: GET_DIETS,
            payload: response.data
        })
    }
}


export function Loading(){
    return{ type:LOADER };
}


export function filterByDiets(payload){
    return ({
        type: FILTER_BY_DIETS,
        payload
    })
}


export function orderByName(payload){
    return({
        type: SORT_BY_NAME,
        payload
    })
}



export function orderByHS(payload){
    return({
        type : SORT_BY_HS,
        payload
    })
}





export const clearFilters = diets => {
    return{
        type: 'CLEAR_FILTER',
        payload: diets
    }
}


export function sortApiOrData(payload){
    return{
        type: DATA_OR_API,
        payload
    }
}


// export const filterRecipeBySourse = ( sourse , recipes) => {
//     return function(dispatch){
//         let sortedRecipes
//         if( sourse !== 'API') {
//             sortedRecipes = recipes.filter(g => g.createdByUser)
//         }
//         if( sourse === 'API') {
//             sortedRecipes = recipes.filter(g => !g.createdByUser)
//         }
//         if( sourse === 'none') {
//             sortedRecipes = []
//         }
//         return dispatch({
//             type : FILTER_BY_SOURCE,
//             payload: sortedRecipes
//         })
//     }
// }





