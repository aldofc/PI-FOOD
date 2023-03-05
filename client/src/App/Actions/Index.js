import axios from 'axios'

export function getRecipes(){
    return async function(dispatch){
        const response = await axios.get('https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5/recipes',{})
        return dispatch({
            type: 'GET_RECIPES',
            payload: response.data
        })
    }
}

export function getRecipeById(id){
    return async function(dispatch){
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=8e22536c74bb47d3b234601667f274e4&addRecipeInformation=true/recipes/${id}`,{})
        return dispatch({
            type : 'GET_RECIPE_BY_ID',
            payload : response.data
        })
    }

}

export function getRecipeByName(payload){
    return async function(dispatch){
        try{
            const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=8e22536c74bb47d3b234601667f274e4&addRecipeInformation=true/recipes/name?=' + payload)
            return dispatch({
                type: 'GET_RECIPE_BY_NAME',
                payload: response.data
            })
        } catch (error) {
            alert('recipe not found')
        }
    }
}

export function postRecipes(payload){
    return async function(dispatch){
        const response = await axios.post('https://api.spoonacular.com/recipes/complexSearch?apiKey=8e22536c74bb47d3b234601667f274e4&addRecipeInformation=true/recipes', payload)
        return response
    }
}

export function getDiets(){
    return async function(dispatch){
        const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=8e22536c74bb47d3b234601667f274e4&addRecipeInformation=true/diets',{})
        return dispatch({
            type: 'GET_DIETS',
            payload: response.data
        })
    }
}





export const clearFilters = diets => {
    return{
        type: 'CLEAR_FILTER',
        payload: diets
    }
}