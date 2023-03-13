const { Router } = require('express');
const { TypeDiet } = require('../db');
const router = Router();

router.get('/' , async (req,res) => {
    let types = [ //Obtiene un arreglo con todos los tipos de dietas existentes.
        'Gluten Free',
        'Ketogenic',
        'Vegetarian',
        'Lacto-Vegetarian',
        'Ovo-Vegetarian',
        'Vegan',
        'Pescetarian',
        'Paleo',
        'Primal',
        'Low FODMAP',
        'Whole30'
    ]
    types.forEach(async (e)=>{
        await TypeDiet.findOrCreate({
            where:{name:e}
        })
    })
    let results = await TypeDiet.findAll()
        return res.send(results)
    
})
module.exports = router;