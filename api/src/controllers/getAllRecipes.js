require('dotenv').config();

const { getApiInfo } = require('./getApiInfo');
const { getDBinfo } = require('./getDBinfo')

const getALLRecipes = async () => {  
const apiInfo = await getApiInfo()
const dbInfo = await getDBinfo()
//console.log(apiInfo)
const allInfo = dbInfo.concat(apiInfo)
//console.log(allInfo)
return allInfo



}

async function getRecipes(method,name){
    try{
        let allApiRecipes;
        if(method === 'api') {
            allApiRecipes = await getApiInfo()
        }else if ( method === "all") {
            allApiRecipes = await getALLRecipes()
        }
        if(name) {
            allApiRecipes = await allApiRecipes.filter((e) =>
            e.name.toLowerCase().includes(name.toLowerCase())
            
            );
        };
        return allApiRecipes;
    }catch(error) {
        throw error;
    }
}












module.exports = {getALLRecipes , getRecipes}
