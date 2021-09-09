const express = require('express');
const Recipe = require('./recipeModel')
const { checkRecipeId } = require('./recipeMiddleWare')

const router = express.Router();

router.get('/', (req,res,next)=>{
    Recipe.getRecipes()
    .then(recipes=>{
        res.status(200).json(recipes)
    })
    .catch(next)
})

router.get('/:recipe_id', checkRecipeId, (req, res, next)=>{
    const { recipe_id } = req.params

    Recipe.getRecipeById(recipe_id)
        .then(recipe =>{
            res.json(recipe)
        })
        .catch(next)
})

module.exports = router;