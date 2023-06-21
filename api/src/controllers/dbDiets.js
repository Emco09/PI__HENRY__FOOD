const { Diets } = require('../db.js');// Este modelo representa la tabla de dietas en la base de datos.
const { getapi } = require('../utils/get.js');
const allrecipes = require('../utils/allrecipes.json')

//La función dbDiets es una función asincrónica que se ejecutará cuando sea llamada. 
const dbDiets = async () => {
    /* const api = await getapi() *///se llama  a getapi trae todas las recetas
    const api = allrecipes
    //mapeo los tipos y devuelvo un array de objetos con las dietas  
    const diets = api.map((types) => {
        return {
            typediet: types.typediet
        }
    })
    //mapeo la informacion para que me de un solo array con todas las dietas
    const filtro = (diets.map(function (fil) {
        return fil.typediet
    })).flat()//Después del mapeo, se obtiene un array bidimensional donde cada elemento es un array que contiene un solo valor, que es el tipo de dieta. Al aplicar el método flat() en diets, se obtiene un nuevo array de una sola dimensión donde todos los elementos individuales se encuentran en el mismo nivel. Los arrays internos se "aplanan" y sus elementos se colocan en el mismo array resultante.['diet','diet','diet']

    //Se utiliza el método new Set para eliminar los elementos duplicados del array de dietas.
    const dataarr = new Set(filtro)
    let array = [...dataarr]

    let response = [...dataarr].forEach(function (elemento) {
        return Diets.create({ nombre: elemento })
    })//Se utiliza el método forEach en el array de dietas para crear y guardar registros en la base de datos utilizando el modelo Diets. Cada elemento del array se utiliza para crear un nuevo registro en la tabla de dietas.
    console.log(array);
    return array //Finalmente, se devuelve el array de dietas como resultado de la función.
}

module.exports = {
    dbDiets
}