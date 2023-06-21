//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');// Este archivo contiene la configuración del servidor Express y las rutas de la API.
const { conn } = require('./src/db.js');//Este objeto probablemente representa la conexión a una base de datos.

//Sincroniza todos los modelos de la base de datos utilizando el método sync() del objeto conn. El argumento { force: true } indica que se eliminarán y recrearán todas las tablas de la base de datos en cada sincronización. Esta opción es útil durante el desarrollo para asegurarse de que los cambios en los modelos se reflejen en la estructura de la base de datos.
// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
  //Después de que se complete la sincronización de los modelos, el servidor se inicia y comienza a escuchar en el puerto 3001 utilizando el método listen() del objeto server. Cuando el servidor esté listo para aceptar conexiones, se imprimirá el mensaje '%s listening at 3001' en la consola.
});
//En resumen, este código importa y sincroniza los modelos de la base de datos, y luego inicia el servidor Express en el puerto 3001 después de completar la sincronización.
