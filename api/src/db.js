require('dotenv').config();//Esto permite configurar valores como el nombre de usuario, la contraseña y el host de la base de datos utilizando variables de entorno en lugar de codificarlos directamente en el código.
const { Sequelize } = require('sequelize');//Sequelize es una biblioteca de Node.js que proporciona una abstracción para interactuar con bases de datos relacionales.
const fs = require('fs');
const path = require('path');//Estos módulos se utilizan para leer y manipular archivos del sistema de archivos.
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;//Estas variables de entorno deben estar definidas en el archivo .env y contener la información de autenticación y la ubicación de la base de datos.

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/food`, {
  logging: false, // set to console.log to see the raw SQL queries  :  establece en console.log para ver las consultas SQL sin procesar
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed  :  permite que Sequelize sepa que podemos usar pg-native para ~30% más de velocidad
});//Se crea una instancia de Sequelize llamada sequelize que representa la conexión a la base de datos PostgreSQL. Se utiliza el valor de las variables de entorno para configurar la conexión.
const basename = path.basename(__filename);//Se obtiene el nombre del archivo actual utilizando path.basename(). Esto se utiliza posteriormente para filtrar los archivos de modelos en el directorio.

const modelDefiners = [];//Se crea un arreglo vacío llamado modelDefiners que se utilizará para almacenar los modelos definidos en la carpeta models.

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners.Esto devuelve un arreglo con los nombres de los archivos en ese directorio.
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });//Se filtran los archivos del directorio para excluir los archivos que comienzan con ".", el archivo actual (basename) y aquellos que no tienen extensión .js.
//Por cada archivo filtrado, se requiere el archivo y se agrega el resultado al arreglo modelDefiners. Cada archivo en el directorio models exporta una función que define y devuelve un modelo Sequelize.

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));

// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);//Se capitalizan los nombres de los modelos obteniendo las entradas del objeto sequelize.models y modificando la clave de cada entrada para que comience con una letra mayúscula.
sequelize.models = Object.fromEntries(capsEntries);//Se asignan las nuevas claves capitalizadas al objeto sequelize.models 

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Recipe, Diets } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
Recipe.belongsToMany(Diets, { through: 'Recipe_Diets' });
Diets.belongsToMany(Recipe, { through: 'Recipe_Diets' });//Esto indica que una receta puede tener varias dietas y una dieta puede estar asociada con varias recetas. Las relaciones se establecen a través de una tabla intermedia llamada Recipe_Diets

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
//En resumen, este código configura la conexión a una base de datos PostgreSQL utilizando Sequelize, importa los modelos definidos en el directorio models, establece las relaciones entre los modelos y exporta los modelos y la conexión para su uso en otros archivos del proyecto.