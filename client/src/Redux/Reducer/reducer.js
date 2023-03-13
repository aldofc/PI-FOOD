import { GET_RECIPES } from "../Actions/actions"
import { GET_RECIPE_BY_ID } from "../Actions/actions"
import { LOADER } from "../Actions/actions"


const initialState = {
    recipes: [],
    recipeByID: {},
    diets: [],
    loader:true,
 }
 
 function rootReducer( state = initialState , action){
     switch (action.type){
         case GET_RECIPES:
             return{
                ...state,
                recipes: action.payload
             }
         case GET_RECIPE_BY_ID:
             return{
                ...state,
                recipeByID: action.payload
             }
         case 'GET_RECIPE_BY_NAME':
             return{
                ...state,
                 recipes: action.payload
             }
         case 'POST_RECIPE':
             return{
                ...state
             }
         case 'GET_DIETS':
             return{
                ...state,
                 diets: action.payload
                 }
                 case LOADER:
                    const loader = state.loader
                    if ( loader === true ) {
                        return {
                            ...state,
                            loader: false,
                        }
                    }else{
                        return{
                            ...state,
                            loader: true,
                        }
                    }
                 default:
                     return {...state}

     }
 }
 
 
 
 
 
 export default rootReducer;
 
 