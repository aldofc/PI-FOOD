const { Router } = require('express');
const { TypeDiet } = require('../db');
const router = Router();

router.get("/" , async (req,res) => {
    let types = [ //Obtiene un arreglo con todos los tipos de dietas existentes.
    "gluten free",
    "dairy free",
    "paleolithic",
    "lacto ovo vegetarian",
    "primal",
    "whole 30",
    "fodmap friendly",
    "ketogenic",
    "pescatarian",
    "vegan"
    ]
    types.forEach(async (e)=>{
        await TypeDiet.findOrCreate({
            where:{ name: e }
        })
    })
    let result = await TypeDiet.findAll()
        return res.send(result)
    
})
module.exports = router;