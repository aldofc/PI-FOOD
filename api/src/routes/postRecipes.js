const { Router } = require('express')
const { Recipe, TypeDiet} = require('../db')


const router = Router();

router.post('/' ,  async (req,res) => {
    let{ diets,image,name,summary,healthscore,steps, dishtypes }= req.body

    try{
        let createRecipe = await  Recipe.create({
            name,
            summary,
            healthscore,
            image: image?image: 'https://thumbs.dreamstime.com/b/el-dise%C3%B1o-de-la-pizarra-con-el-utensilio-de-la-tabla-de-cortar-y-de-la-cocina-y-la-receta-enumeran-56598022.jpg',
            steps,
            dishtypes
            
        })

        const typediet = await TypeDiet.findAll({
            where: {name: diets }
        })
        await createRecipe.addTypeDiet(typediet)
        res.status(200).send(createRecipe)
    } catch (error) {
        res.status(404).send(error)
    }
})


module.exports=router;