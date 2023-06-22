require('dotenv').config();
const { API_KEY } = process.env;//El módulo dotenv se utiliza para cargar las variables de entorno desde un archivo .env, y se extrae el valor de API_KEY de process.env.
const axios = require('axios');//para realizar solicitudes HTTP
const { allRecipesdb } = require('./recipeController');//controlador de base de datos relacionado con las recetas.
const {results} = require('../utils/los100')

//Este controlador obtiene las primeras 100 recetas de una API utilizando una API key, mapea la respuesta para extraer información relevante de cada receta y combina esa información con los datos obtenidos de una base de datos. El resultado final es un array que contiene la información combinada de las recetas de la API y la base de datos.
const allrecipescontroller = async () => {

    /* const response = (await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)).data.results  */
    const response = results
    
    const apiData = response.map((recipe) => {
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

    const dbData = await allRecipesdb()

    return [dbData, apiData]

}

module.exports = {
    allrecipescontroller
}