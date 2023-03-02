import axios from 'axios'

export function getRecipes(){
    return async function(dispatch){
        const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=8e22536c74bb47d3b234601667f274e4&addRecipeInformation=true/recipes',{})
        return dispatch({
            type: 'GET_RECIPES',
            payload: response.data
        })
    }
}