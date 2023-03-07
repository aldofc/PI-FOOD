const initialState = {
    recipes: [],
    recipeId: {},
    diets: []
 }
 
 function rootReducer( state = initialState , action){
     switch (action.type){
         case 'GET_RECIPES':
             return{
                ...state,
                recipes: action.payload
             }
         case 'GET_RECIPE_BY_ID':
             return{
                ...state,
                 recipeId : action.payload
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
                 default:
                     return {...state}
     }
 }
 
 
 
 
 
 export default rootReducer;
 
 