const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const getRecipeRoute = require('./getRecipes')
const getDietRoute = require('./getDiets')
const postRecipeRoute = require('./postRecipes')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/diets', getDietRoute);
router.use('/recipes', getRecipeRoute);
router.use('/recipes', postRecipeRoute)


module.exports = router;
