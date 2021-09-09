const db = require('../../data/db-config');

function getRecipes(){
    return db('recipes as r')
        .leftJoin( 'steps as st', 'r.recipe_id', 'st.recipe_id')
        .leftJoin( 'ingredient_quantity as iq', 'st.step_id', 'iq.step_id')
        .leftJoin('ingredients as ing', 'iq.ingredient_id', 'ing.ingredient_id')
        .select('r.recipe_name', 'r.recipe_id', 'st.*', 'iq.*', 'ing.*')
}

async function getRecipeById(recipe_id){
    const response = await db('recipes as r')
        .leftJoin( 'steps as st', 'r.recipe_id', 'st.recipe_id')
        .leftJoin( 'ingredient_quantity as iq', 'st.step_id', 'iq.step_id')
        .leftJoin('ingredients as ing', 'iq.ingredient_id', 'ing.ingredient_id')
        .select('r.recipe_name', 'r.recipe_id', 'st.*', 'iq.*', 'ing.*')
        .where('r.recipe_id', recipe_id);
    
    const result = {
        recipe_id: response[0].recipe_id,
        recipe_name: response[0].recipe_name,
        steps: response[0].step_id
            ? response.map((res)=>({
                step_id: res.step_id,
                step_number: res.step_number,
                step_instructions: res.step_instructions,
            }))
            : [],
        ingredients: response[0].quantity_id
            ? response.map((res)=>({
                ingredient_id: res.ingredient_id,
                ingredient_name: res.ingredient_name,
                quantity: res.quantity
            })) 
            : []
    }
    return result
}



module.exports = {
    getRecipes,
    getRecipeById
}