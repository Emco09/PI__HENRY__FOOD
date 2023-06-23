const { Recipe, Diets } = require('../db.js')//Estos modelos representan las tablas correspondientes en la base de datos y permiten realizar operaciones en ellas.

//realiza una búsqueda de todas las recetas existentes en la base de datos utilizando el modelo Recipe y devuelve un array con los resultados encontrados.
const dbRecipes = async () => {
    const dataDB = await Recipe.findAll({
        include: {
            model: Diets,
            attributes: ['nombre'],
            through: {
                attributes: []
            }
        }
    });

    const flatData = dataDB.map(recipe => ({
        id: recipe.id,
        nombre: recipe.nombre,
        summary: recipe.summary,
        healthscore: recipe.Healthscore,
        steps: recipe.steps,
        image: recipe.image,
        typediet: [...new Set(recipe.Diets.map(diet => diet.nombre))]
    }));

    return flatData
};

module.exports = {
    dbRecipes,
}