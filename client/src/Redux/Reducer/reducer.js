import {
     GET_RECIPES ,
     GET_RECIPE_BY_ID, 
     LOADER,
     FILTER_BY_DIETS, 
     SORT_BY_NAME, 
     SORT_BY_HS,
     GET_DIETS,
     DATA_OR_API,
    
} from "../Actions/actions"


const initialState = {
    recipes: [],
    recipeByID: {},
    diets: [],
    dataOrApi: [],
    
    loader:true,
 }
 
 function rootReducer( state = initialState , action){
     switch (action.type){
         case GET_RECIPES:
             return{
                ...state,
                recipes: action.payload,
                dataOrApi: action.payload,
             };
            case FILTER_BY_DIETS:
                const result = state.recipes;
                if(action.payload === 'all'){
                    return{
                        ...state,
                        recipes: result,
                    }
                }else{
                    const ff = result.filter(r => r.diets?.some((d) => d === action.payload))
                    return{
                        ...state,
                        recipes: ff,
                    }
                };

                case SORT_BY_NAME:
                    let ordenado = action.payload === 'asc' ?
                    state.recipes.sort(function (a,b) {
                        if(a.name.toLowerCase() > b.name.toLowerCase()){
                            return 1;
                        }
                        if(b.name.toLowerCase() > a.name.toLowerCase()){
                            return -1;
                        }
                        return 0
                    }) : state.recipes.sort(function (a,b){
                        if( a.name.toLowerCase() > b.name.toLowerCase()) {
                            return -1
                        }
                        if(b.name.toLowerCase() > a.name.toLowerCase()) {
                            return 1
                        }
                        return 0
                    })
                    return {
                        ...state,
                        recipes : ordenado
                    }
               case SORT_BY_HS:
                    let sortedHS = action.payload === "hasc" ?
                       state.recipes.sort(function(a,b){
                        if(a.healthscore > b.healthscore) {
                            return 1;
                        }
                        if(b.healthscore > a.healthscore) {
                            return -1
                        }
                        return 0;
                       }): state.recipes.sort(function(a,b) {
                        if(a.healthscore > b.healthscore) {
                            return -1
                        }
                        if(b.healthscore > a.healthscore) {
                            return -1
                        } return 0;
                       })
                       return{
                        ...state,
                        recipes: sortedHS
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
         case GET_DIETS:
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

                    case DATA_OR_API:
                        let all2 = [...state.dataOrApi];
                        let dataFilter = all2.filter(r => r.create === true);
                        let apiFilter = all2.filter(r => r.create === false);

                        let sortRecipes = action.payload === "data" ? dataFilter:
                                       action.payload === "api" ? apiFilter:
                                       all2;
                        return{
                            ...state,
                            recipes: sortRecipes
                        };
                 default:
                     return {...state}

     }
 }
 
 
 
 
 
 export default rootReducer;
 
 