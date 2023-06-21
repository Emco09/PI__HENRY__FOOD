const { Router } = require("express");// El objeto Router permite crear instancias de enrutadores en Express para agrupar rutas relacionadas.
const dietsRouter = Router();

const { alldietshandler } = require('../handlers/dietsHandlers.js')// Este handler es una función que se encarga de manejar las solicitudes y respuestas relacionadas con las dietas de la API.

dietsRouter.get('/', alldietshandler)// Esto significa que cuando se reciba una solicitud GET en la ruta base, se ejecutará la función alldietshandler para manejar la solicitud.

module.exports = dietsRouter// Esto permite que este enrutador se agregue a la configuración de rutas principal del servidor Express.