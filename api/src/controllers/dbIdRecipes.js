const { Recipe, Diets } = require('../db.js')//Estos modelos representan las tablas correspondientes en la base de datos y permiten realizar operaciones en ellas.

const dbIdRecipes = async(id)=>{
    const data=[]
    const dbInfo =await Recipe.findByPk(id,{
        include: {
        model: Diets,
        atributes: ["name"],
        through: {
            attributes: [],
            },
        }
    })
    if(data)
        data.push(dbInfo)
        
     const flatData = data.map(recipe => ({
        id: recipe.id,
        nombre: recipe.nombre,
        summary: recipe.summary,
        healthscore: recipe.Healthscore,
        steps: recipe.steps,
        image: recipe.image,
        typediet: [...new Set(recipe.Diets.map(diet => diet.nombre))]
    })); 
    return flatData
} 
module.exports = {
    dbIdRecipes,
}