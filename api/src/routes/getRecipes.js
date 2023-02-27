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


.get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const recipe = await getALLRecipes(id);
      res.json(recipe);
    } catch (error) {
      res.status(404).json({ error });
    }
  });


module.exports=router;