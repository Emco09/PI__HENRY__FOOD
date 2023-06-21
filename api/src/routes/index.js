const { Router } = require('express');// El objeto Router permite crear instancias de enrutadores en Express para agrupar rutas relacionadas.
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipesRouter = require('./getRecipes.js');
const dietsRouter = require('./getDiets.js');

const router = Router();// Se crea una instancia de Router llamada router.

// Configurar los routers
// Se configuran los enrutadores utilizando el método use() del objeto router
// Ejemplo: router.use('/auth', authRouter);
router.use('/recipes', recipesRouter)//En este caso, se configura el enrutador recipesRouter para que maneje las rutas que comienzan con /recipes
router.use('/diets', dietsRouter)//el enrutador dietsRouter para que maneje las rutas que comienzan con /diets. 

//Esto significa que todas las rutas definidas en los enrutadores se agregarán después de las rutas base correspondientes.


module.exports = router;//Esto permite que este enrutador se agregue a la configuración de rutas principal del servidor Express.

//En resumen, este código configura un enrutador en Express y asocia los enrutadores recipesRouter y dietsRouter a rutas base específicas. Esto permite organizar y modularizar las rutas de la API relacionadas con las recetas y las dietas.