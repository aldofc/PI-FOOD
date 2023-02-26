require('dotenv').config;
const axios = require('axios')
const { Recipe , Diets } = require('../db')

const getDBinfo = async () => {
    try{
        const recipes = await Recipe.findAll({
            include: {
                model: Diets,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }
        })
        return await recipes.map(e=>{
            return{
            id: e.id,
            name: e.name,
            summary: e.summary,
            healthscore: e.healthscore,
            image: e.image,
            steps: e.steps,
            dishtypes: e.dishtypes,
            diets: e.typeDiets.map(e=>e.name)
        }
    })
}catch(error){
    return res.status(404).send(error)
}

}

module.exports = {
    getDBinfo
}
