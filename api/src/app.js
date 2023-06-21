const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');

require('./db.js');

const server = express();

server.name = 'API';//Se crea una instancia del servidor Express y se asigna el nombre "API" a esa instancia

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));//se utiliza para analizar los datos del cuerpo de las solicitudes entrantes. El servidor permite el análisis de URL codificada y JSON, y establece un límite de tamaño de 50 MB para los datos del cuerpo.
server.use(cookieParser());//se utiliza para analizar las cookies de las solicitudes entrantes.
server.use(morgan('dev'));//se utiliza para registrar información detallada de las solicitudes entrantes en la consola en el modo de desarrollo.
//Se configuran los encabezados y métodos de acceso permitidos en las respuestas del servidor utilizando el middleware res.header('Access-Control-Allow-...'). Esto establece los encabezados CORS (Cross-Origin Resource Sharing) para permitir solicitudes desde el origen http://localhost:3000. También se permiten los métodos GET, POST, OPTIONS, PUT y DELETE.
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/', routes);//se utiliza para agregar las rutas definidas en el archivo index.js a las rutas del servidor. 

//Si se produce un error en alguna parte del código anterior o en las rutas, este middleware capturará el error, registrará los detalles en la consola y enviará una respuesta de error al cliente.
// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;//Finalmente, se exporta la instancia del servidor Express como un módulo para que pueda ser utilizado por otros archivos que requieran este módulo.

//En resumen, el código configura un servidor de API utilizando Express, establece los middleware necesarios para el análisis de datos, cookies y registro de solicitudes, y define las rutas de la API. También se configuran los encabezados CORS para permitir solicitudes desde un origen específico.
