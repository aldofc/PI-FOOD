require('dotenv').config();
const axios =require('axios')
const { API_KEY } = process.env;


//url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`;
// apimokeada ----    url: "https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5",

const getApiInfo = async () => {
    try{
        const apiUrl = await axios({
            
            url: "https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5",
           
        })

        const apiInfo = await apiUrl.data.results?.map((e) => {
            return{
                id: e.id,
                name: e.title,
                summary: e.summary,
                healthscore: e.healthScore,
                image: e.image,
                diets: e.diets,
                dishtypes: e.dishTypes,
                steps: e.analyzedInstructions[0]?.steps.map(e => {
                    return (e.step)
                })
            }
        })

        return apiInfo;
        
    }catch(error){
        return error
    }
}

module.exports={
    getApiInfo
    
}