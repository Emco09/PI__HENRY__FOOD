require('dotenv').config();
const { API_KEY } = process.env;//El módulo dotenv se utiliza para cargar las variables de entorno desde un archivo .env, y se extrae el valor de API_KEY de process.env.
const axios = require("axios");//para realizar solicitudes HTTP
const { allrecipescontroller } = require('./allRecipes');
const { searchRecipeByName } = require('../utils/dbSearch');


// Esta función nameRecipe busca recetas por nombre. Si se proporciona un nombre, realiza una solicitud a la API para obtener las recetas que coinciden con el nombre y combina los resultados con los datos de una base de datos. Si no se proporciona un nombre, obtiene todas las recetas disponibles.
const nameRecipe = async (name) => {
    if (name) {
        const query = encodeURIComponent(name.toLowerCase()); // Convertimos el nombre a minúsculas y lo codificamos para la URL
        const recipe = (await axios(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${API_KEY}&addRecipeInformation=true&number=86`)).data.results

        const apiResults = recipe.map((recipe) => {
            return {
                id: recipe.id,
                nombre: recipe.title,
                summary: recipe.summary,
                healtscore: recipe.healthScore,
                steps: recipe.analyzedInstructions[0]?.steps.map((steps) => {
                    return {
                        number: steps.number,
                        step: steps.step
                    }
                }),
                image: recipe.image,
                typediet: recipe.diets,
            }
        })
        console.log(apiResults);
        const dbResults = await searchRecipeByName(name.toLowerCase()); // Buscamos en la base de datos con el nombre en minúsculas
        console.log(dbResults);

        if (dbResults === [null]) {
            
            return apiResults
        } else {
            const combinedResults = [...apiResults, ...dbResults]; // Combinamos los resultados de la API y de la base de datos
            return combinedResults
        }


        return combinedResults;


    } else {
        return await allrecipescontroller()
    }



}

module.exports = {
    nameRecipe
}

//la función nameRecipe buscará tanto en la API como en la base de datos y devolverá las recetas que coincidan con el nombre recibido, sin importar las mayúsculas o minúsculas. En caso de no encontrar ninguna receta, se mostrará un mensaje adecuado.