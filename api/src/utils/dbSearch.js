const { Op } = require('sequelize');
const { Recipe, Diets } = require('../db.js')

// Esta función busca recetas en la base de datos por su nombre.Utiliza el modelo Recipe y realiza una consulta findAll con la opción include para incluir la relación con el modelo Diets.
const searchRecipeByName = async (name) => {
  const data = []

  const dbInfo = await Recipe.findOne({
    where: {
      nombre: name
    },
    include: {
      model: Diets,
      attributes: ["nombre"],
      through: {
        attributes: [],
      }
    }
  });
  data.push(dbInfo)
    
    const flatData = data.map(recipe => {
      if (recipe) {
        return {
          id: recipe.id,
          nombre: recipe.nombre,
          summary: recipe.summary,
          healthscore: recipe.Healthscore,
          steps: recipe.steps,
          image: recipe.image,
          typediet: [...new Set(recipe.Diets.map(diet => diet.nombre))]
        };
      }
      return null;
    });
    
    return flatData
  

};



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
  searchRecipeByName,
  dbIdSearch
}


/* try {

} catch (error) {
  console.error('Error al buscar recetas por nombre:', error);
  throw new Error('Ocurrió un error al buscar recetas por nombre en la base de datos.');
} */