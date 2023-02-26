const { Router } = require('express');
const { getALLRecipes } = require('../controllers/getAllRecipes');


const router = Router();


router.get('/' , async (req,res) => {
    const {name} =req.query;

    let info = await getALLRecipes();

    if(name){
        try{
            let filteredRecipe = await info.filter((e) => 
            e.name.toLowerCase().includes(name.toLowerCase())

            );
            filteredRecipe.length
            ? res.status(200).send(filteredRecipe)
            : res.status(404).send("We couldn't find a recipe with that name.")
        } catch (error) {
            return res.status(400).send('gone wrong');
        }
    } else {
        res.send(info)
    }
})

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


router.get('/:id' , async (req,res) => {
    try{
        const {id} = req.params;
        const totalRecipes = await getALLRecipes();
        if(id){
            let idRecipe = await totalRecipes.filter((r) => r.id == id)
            if(idRecipe.length) res.status(200).json(idRecipe)
        }
    }catch(error){
        res.status(404).send(error,"We couldn't find this recipe")
    }
})


module.exports=router;