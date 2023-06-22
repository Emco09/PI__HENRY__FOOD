const { Recipe, Diets } = require('../db.js')//Estos modelos representan las tablas correspondientes en la base de datos y permiten realizar operaciones en ellas.
const { Op } = require('sequelize');
//destructuramos los parametros que llegan por body 
const recipeController = async ({ nombre, image, summary, Healthscore, steps, ...rest }) => {
    const typediet = rest.typediet; // Obtener el valor de typediets del objeto rest
    //Realiza una búsqueda en la tabla Diets de la base de datos utilizando el modelo Diets. Utiliza el operador Op.in de Sequelize para buscar las dietas cuyo nombre esté contenido en el array typediet. Luego se devuelve un array con los resultados de la búsqueda.
    const diet = await Diets.findAll({
        where: {
            nombre: {
                [Op.in]: typediet
            }
        }
    })
    try {
        //// Busca una receta por nombre
        const existingRecipe = await Recipe.findOne({ where: { nombre } });
        if (existingRecipe) {
            // Si la receta existe, devuelve la receta encontrada
            return existingRecipe;
        } else {
            // Si la receta no existe, crea una nueva receta
            const newRecipe = await Recipe.create({
                nombre,
                image,
                summary,
                Healthscore,
                steps
            });

            //se utiliza el método addDiets del objeto createRecipe para asociar las dietas encontradas con la receta creada anteriormente. Esto establece la relación entre la receta y las dietas en la base de datos.
            newRecipe.addDiets(diet);
            return newRecipe
        }
    } catch (error) {
        console.error('Error al buscar o crear la receta:', error);
        throw error;
    }
}

//realiza una búsqueda de todas las recetas existentes en la base de datos utilizando el modelo Recipe y devuelve un array con los resultados encontrados.
const allRecipesdb = async () => {
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
    recipeController,
    allRecipesdb

}