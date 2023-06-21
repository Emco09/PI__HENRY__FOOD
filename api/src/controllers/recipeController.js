const { Recipe, Diets } = require('../db.js')//Estos modelos representan las tablas correspondientes en la base de datos y permiten realizar operaciones en ellas.
const { Op } = require('sequelize');
//destructuramos los parametros que llegan por body 
const recipeController = async ({ nombre, image, summary, Healthscore, steps, ...rest }) => {
    const typediet = rest.typediet; // Obtener el valor de typediets del objeto rest
    
    //crea una nueva receta en la base de datos utilizando el modelo Recipe
    const createRecipe = await Recipe.create({
        nombre,
        image,
        summary,
        Healthscore,
        steps
    });

    //Realiza una búsqueda en la tabla Diets de la base de datos utilizando el modelo Diets. Utiliza el operador Op.in de Sequelize para buscar las dietas cuyo nombre esté contenido en el array typediet. Luego se devuelve un array con los resultados de la búsqueda.
    const Diet = await Diets.findAll({
        where: {
            nombre: {
                [Op.in]: typediet
            }
        }
    })

    //se utiliza el método addDiets del objeto createRecipe para asociar las dietas encontradas con la receta creada anteriormente. Esto establece la relación entre la receta y las dietas en la base de datos.
    createRecipe.addDiets(Diet);
    return createRecipe
}

//realiza una búsqueda de todas las recetas existentes en la base de datos utilizando el modelo Recipe y devuelve un array con los resultados encontrados.
const allRecipesdb = async () => {
    return await Recipe.findAll()

}



module.exports = {
    recipeController,
    allRecipesdb

}