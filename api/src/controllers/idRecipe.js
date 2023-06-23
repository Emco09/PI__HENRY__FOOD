require('dotenv').config();
const { API_KEY } = process.env;//El módulo dotenv se utiliza para cargar las variables de entorno desde un archivo .env, y se extrae el valor de API_KEY de process.env.
const axios = require('axios');//para realizar solicitudes HTTP
const { dbIdRecipes } = require('./dbIdRecipes');

//esta función idRecipe realiza una solicitud a la API para obtener información detallada de una receta específica utilizando su ID. Luego, combina esta información con los datos obtenidos de una base de datos y devuelve el resultado final en forma de un array.
const idRecipe = async (id) => {
    try {
        const response = await axios(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}&addRecipeInformation=true`);
        const apiData = {
            id: response.data.id,
            nombre: response.data.title,
            summary: response.data.summary,
            healtscore: response.data.healthScore,
            steps: response.data.analyzedInstructions[0]?.steps.map((steps) => {
                return {
                    number: steps.number,
                    step: steps.step
                }
            }),
            image: response.data.image,
            typediet: response.data.diets,
        };
        
        return [apiData];
    } catch (error) {
        if (error.response && error.response.status === 404) {
            console.log('La receta no se encontró en la API. Buscando en la base de datos...');
            const dbData = await dbIdRecipes(id);
            if (dbData) {
                return dbData;
            } else {
                throw new Error('La receta no se encontró en la API ni en la base de datos.');
            }
        } else {
            console.log('Error en la solicitud a la API:', error);
            throw new Error('Ocurrió un error al obtener la receta.');
        }
    }
};

module.exports = {
    idRecipe
}

