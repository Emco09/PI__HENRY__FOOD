const { allrecipescontroller } = require("../controllers/allRecipes")
const { idRecipe } = require("../controllers/idRecipe")
const { nameRecipe } = require("../controllers/nameRecipe")
const { recipeController } = require("../controllers/recipeController")


//Este controlador de ruta intenta obtener todas las recetas mediante la función allrecipescontroller(). Si tiene éxito, devuelve las recetas en formato JSON. Si ocurre un error, devuelve un mensaje de error y un código de estado 500.
const allrecipes = async (req, res) => {
    try {
        const response = await allrecipescontroller();
        res.status(200).json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
//Este controlador de ruta intenta obtener una receta específica según el identificador (params) proporcionado. Si tiene éxito, devuelve la receta en formato JSON. Si ocurre un error, devuelve un mensaje de error y un código de estado 500.
const idRecipeHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await idRecipe(id);
        res.status(200).json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
//Este controlador de ruta intenta buscar recetas por nombre según el query de consulta proporcionado. Si tiene éxito, devuelve las recetas encontradas en formato JSON. Si ocurre un error, devuelve un mensaje de error y un código de estado 500. 
const nameHandler = async (req, res) => {
    try {
        const { name } = req.query;
        const response = await nameRecipe(name);
        res.status(200).json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
//Este controlador de ruta procesa una solicitud POST para crear una nueva receta. Si tiene éxito, devuelve una respuesta con un código de estado 200 y el contenido de la respuesta de recipeController. Si ocurre un error, devuelve un mensaje de error y un código de estado 500. 
const postRecipeHandler = async (req, res) => {
    try {
        const params = req.body;
        const response = await recipeController(params);
        res.status(200).json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};


module.exports = {
    allrecipes,
    idRecipeHandler,
    nameHandler,
    postRecipeHandler
}

//En resumen, estos controladores de ruta permiten obtener todas las recetas, obtener una receta por su identificador, buscar recetas por nombre y crear nuevas recetas. 