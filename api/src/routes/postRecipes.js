const { Router } = require('express')
const { Recipe, Diets} = require('../db')


const router = Router();

router.post('/' ,  async (req,res) => {
    let{ diets,image,name,summary,healthscore,steps }= req.body

    try{
        let createRecipe = await  Recipe.create({
            name,
            summary,
            healthscore,
            image: image?image: 'https://img.freepik.com/foto-gratis/cuaderno-receta-tomate-farfalle-ajo-cebolla-mortero-pimienta-vista-superior-copia-espacio_141793-3458.jpg',
            steps,
            
        })

        const diet = await Diets.findAll({
            where: {name: diets }
        })
        await createRecipe.addDiets(diet)
        res.status(200).send(createRecipe)
    } catch (error) {
        res.status(404).send(error)
    }
})


module.exports=router;