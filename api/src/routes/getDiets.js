const { Router } = require('express');
const { Diets } = require('../db');
const router = Router();

router.get('/' , async (req,res) => {
    let types = [ //Obtiene un arreglo con todos los tipos de dietas existentes.
        'gluten free',
        'dairy free',
        'paleolithic',
        'lacto ovo vegetarian',
        'primal',
        'whole 30',
        'fodmap friendly',
        'ketogenic',
        'pescatarian',
        'vegan'
    ]
    types.forEach(async (e)=>{
        await Diets.findOrCreate({
            where:{name:e}
        })
    })
    let results = await Diets.findAll()
        return res.send(results)
    
})
module.exports = router;