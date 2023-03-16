const { Router } = require('express');
const { getALLRecipes } = require('../controllers/getAllRecipes');
const { getRecipes } = require('../controllers/getAllRecipes')


const router = Router();


router.get('/' , async (req,res) => {
 try{  
    const {name} =req.query;

    let allInfo = await getRecipes("all" , name);
    res.json(allInfo);
}catch(error){
  res.status(404).json({error});

}
})
    
router.get('/:id' , async (req,res) => {
  try{
    const{id}=req.params;
    const recipesTotal = await getALLRecipes()
    if(id){
      let recipeId = await recipesTotal.filter((r) => r.id == id)
       res.status(200).json(recipeId)
    }
  }catch(error){
    res.status(404).json({error})
  }
})


module.exports=router;


//console.log(allInfo)

//     if(name){
//         try{
//             let filteredRecipe = await allInfo.filter((e) => 
//             e.name.toLowerCase().includes(name.toLowerCase())

//             );
//             filteredRecipe.length
//             ? res.status(200).send(filteredRecipe)
//             : res.status(404).send("We couldn't find a recipe with that name.")
//         } catch (error) {
//             return res.status(400).send('gone wrong');
//         }
//     } else {
//         res.send(allInfo)
        
//     }
// })

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// .get("/:id", async (req, res) => {
//     try {
//       const { id } = req.params;
//       const recipe = await getALLRecipes(id);
//       res.json(recipe);
//     } catch (error) {
//       res.status(404).json({ error });
//     }
//   });


//--------------------------------------------------------------------------------------------------------------

