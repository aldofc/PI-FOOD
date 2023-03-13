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

module.exports = {getALLRecipes}
