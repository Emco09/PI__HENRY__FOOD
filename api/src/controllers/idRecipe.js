require('dotenv').config();
const { API_KEY } = process.env;//El módulo dotenv se utiliza para cargar las variables de entorno desde un archivo .env, y se extrae el valor de API_KEY de process.env.
const axios = require('axios')//para realizar solicitudes HTTP

//esta función idRecipe realiza una solicitud a la API para obtener información detallada de una receta específica utilizando su ID. Luego, combina esta información con los datos obtenidos de una base de datos y devuelve el resultado final en forma de un array.
const idRecipe = async (id) => {
    const response = (await axios(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}&addRecipeInformation=true`)).data

    const apiData = {
        id: response.id,
        nombre: response.title,
        summary: response.summary,
        healtscore: response.healthScore,
        steps: response.analyzedInstructions[0]?.steps.map((steps) => {
            return {
                number: steps.number,
                step: steps.step
            }
        }),
        image: response.image,
        typediet: response.diets,
    }
    const dbData = await allRecipesdb()
    const result = [].concat(apiData, dbData)

    return result
}

module.exports = {
    idRecipe
}

