require('dotenv').config();
const { API_KEY } = process.env;
const axios =require('axios')

const getapi=async()=>{

    const response = (await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)).data.results
   
    return await response.map((recipe)=>{
        return{
            id:recipe.id,
            nombre:recipe.title,
            summary:recipe.summary,
            healtscore:recipe.healthScore,
            steps:recipe.analyzedInstructions.steps.map((steps)=>{
                return{
                    number: steps.number,
                    step: steps.step
                }
            }), 
            image:recipe.image,
            typediet:recipe.diets, 
        }
        
    })
}

module.exports={
    getapi
}

