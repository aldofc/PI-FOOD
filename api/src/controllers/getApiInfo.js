require('dotenv').config();
const axios =require('axios')
const { API_KEY } = process.env;

//url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`;

const getApiInfo = async () => {
    try{
        const apiUrl = await axios({
            method: 'get',
            url: "https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5",
            headers: {"Accept-Encoding": "null"}
        })

        const apiInfo = await apiUrl.data.results?.map((e) => {
            return{
                id: e.id,
                name: e.title,
                summary: e.summary.replaceALL(/<(“[^”]”|'[^’]’|[^'”>])*>/g, ""),
                healthscore: e.healthscore,
                image: e.image,
                diets: e.diets,
                dishtypes: e.dishtypes,
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