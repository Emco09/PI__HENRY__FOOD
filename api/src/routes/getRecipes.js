const { Router } = require("express");//El objeto Router permite crear instancias de enrutadores en Express para agrupar rutas relacionadas.
const recipesRouter = Router();

//exportamos los handlres
const { idRecipeHandler, nameHandler, postRecipeHandler } = require('../handlers/recipesHandlers.js');
//Estos handlres son funciones que se encargan de manejar las solicitudes y respuestas relacionadas con las recetas de la API.

//Se configuran las rutas en el enrutador recipesRouter utilizando los métodos correspondientes (get, post, etc.). En este caso:
recipesRouter.get('/', nameHandler)
recipesRouter.get('/:id', idRecipeHandler)
recipesRouter.post('/', postRecipeHandler)
//get
//delete


module.exports = recipesRouter// Esto permite que este enrutador se agregue a la configuración de rutas principal del servidor Express.