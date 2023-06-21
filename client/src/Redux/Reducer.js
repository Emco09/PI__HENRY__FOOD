import { GET_RECIPES, FILTER, SORT, DIET, RESET, INFO, GET_DIETS, GET_NAME } from "./Actions-Types";

// generamos nuestros estados 
const initialState = {
  recipes: [],
  dataorigin: [],
  copyrecipes: [],
  diets: []
};

//funcion que nos ayudara para leer modificar y eliminar el estado
const rootReducer = (state = initialState, { type, payload }) => {

  switch (type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: payload[1],
        dataorigin: payload[0],
        copyrecipes: payload[1]

      };
    case GET_DIETS:
      return {
        ...state,
        diets: payload
      };
    case GET_NAME:
      return {
        ...state,
        recipes:payload
      };
    case FILTER:
      const allRecipesFiltered = state.copyrecipes.filter(obj => obj.typediet.includes(payload))

      return {
        ...state,
        recipes: allRecipesFiltered,
      };
    case SORT:
      const sortedRecipes = [...state.recipes]
      return {
        ...state,
        recipes:
          payload === "A"
            ? sortedRecipes.sort((a, b) => a.nombre.localeCompare(b.nombre))
            : sortedRecipes.sort((a, b) => a.nombre.localeCompare(b.nombre)).reverse()
      };
    case DIET:
      const dietRecipes = [...state.recipes]
      return {
        ...state,
        recipes:
          payload === "min"
            ? dietRecipes.sort((a, b) => a.healtscore - b.healtscore)
            : dietRecipes.sort((a, b) => a.healtscore - b.healtscore).reverse()
      };
    case RESET:
      const reset = [...state.copyrecipes]
      return {
        ...state,
        recipes: reset
      };
    case INFO:
      const infoFilt = [...state.dataorigin]
      if (payload === "api") {
        return { ...state, recipes: infoFilt[1] }
      } else {
        return { ...state, recipes: infoFilt[0] }
      };
      
    default:
      return { ...state };
  };

};

export default rootReducer;




