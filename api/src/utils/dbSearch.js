const { Op } = require('sequelize');
const { Recipe, Diets } = require('../db.js')

// Esta función busca recetas en la base de datos por su nombre.Utiliza el modelo Recipe y realiza una consulta findAll con la opción include para incluir la relación con el modelo Diets.
const dbNameSearch = async ({ name }) => {
    const dataDB = await Recipe.findAll({
        include: {
            attributes: {
                [Op.eq]: name
            },
            model: Diets,
            through: {
                attributes: []
            }
        },
    })
    // Mapea los resultados obtenidos y devuelve un array de objetos que representan las recetas encontradas en la base de datos. 
    if (dataDB) {
        return dataDB.map((recipe) => {
            return {
                id: recipe.id,
                nombre: recipe.nombre,
                summary: recipe.resumendelplato,
                healtscore: recipe.niveldecomidasaludable,
                steps: recipe.pasoapaso,
                image: recipe.imagen,
                diets: recipe.Diets

            }
        })
    } else {
        'no existen recetas '
    }

}
//Esta función busca una receta en la base de datos por su ID. Utiliza el modelo Recipe y realiza una consulta findAll
const dbIdSearch = async ({ id }) => {
    const dataDB = await Recipe.findAll({
        include: {
            attributes: {
                id: id
            },
            model: Diets,
            through: {
                attributes: []
            }
        }
    })

    return dataDB

}

module.exports = {
    dbNameSearch,
    dbIdSearch
}