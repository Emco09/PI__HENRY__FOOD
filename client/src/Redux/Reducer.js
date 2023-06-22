import { GET_RECIPES, FILTER, SORT, DIET, RESET, INFO, GET_DIETS, GET_NAME } from "./Actions-Types";// Importa los tipos de acciones que se utilizarán

// Define el estado inicial de la aplicación.
const initialState = {
  recipes: [],
  dataorigin: [],
  copyrecipes: [],
  diets: []
};

// Es una función que recibe el estado actual y una acción, y devuelve el nuevo estado actualizado. 
const rootReducer = (state = initialState, { type, payload }) => {
  //Utiliza un bloque switch para manejar diferentes tipos de acciones. El tipo de acción determina el comportamiento específico del rootReducer.
  switch (type) {
    case GET_RECIPES:
      //Este caso maneja la acción GET_RECIPES. Actualiza las propiedades recipes, dataorigin y copyrecipes del estado con los valores proporcionados en el payload de la acción.
      return {
        ...state,
        recipes: payload[1],
        dataorigin: payload[0],
        copyrecipes: payload[1]
      };
    case GET_DIETS:
      //Este caso maneja la acción GET_DIETS. Actualiza la propiedad diets del estado con los valores proporcionados en el payload de la acción.
      return {
        ...state,
        diets: payload
      };
    case GET_NAME:
      //Este caso maneja la acción GET_NAME. Actualiza la propiedad recipes del estado con los valores proporcionados en el payload de la acción.
      return {
        ...state,
        recipes: payload
      };
    case FILTER:
      //Este caso maneja la acción FILTER. Filtra las recetas en función del tipo de dieta proporcionado en el payload de la acción.
      const allRecipesFiltered = state.copyrecipes.filter((objeto, index, array) => {
        objeto.typediet.includes(payload)
      });
      return {
        ...state,
        recipes: allRecipesFiltered,
      };
    case SORT:
      //Este caso maneja la acción SORT. Ordena las recetas en función del orden ascendente o descendente del nombre.
      const sortedRecipes = [...state.recipes]
      return {
        ...state,
        recipes:
          payload === "A"
            ? sortedRecipes.sort((a, b) => a.nombre.localeCompare(b.nombre))
            : sortedRecipes.sort((a, b) => a.nombre.localeCompare(b.nombre)).reverse()
      };
    case DIET:
      //Este caso maneja la acción DIET. Ordena las recetas en función del puntaje de salud en orden ascendente o descendente.
      const dietRecipes = [...state.recipes]
      return {
        ...state,
        recipes:
          payload === "min"
            ? dietRecipes.sort((a, b) => a.healtscore - b.healtscore)
            : dietRecipes.sort((a, b) => a.healtscore - b.healtscore).reverse()
      };
    case RESET:
      //Este caso maneja la acción RESET. Restablece las recetas a su estado original. 
      const reset = [...state.copyrecipes]
      return {
        ...state,
        recipes: reset
      };
    case INFO:
      //Este caso maneja la acción INFO. Cambia las recetas según la fuente de datos seleccionada en el payload de la acción. Actualiza la propiedad recipes del estado con las recetas correspondientes a la fuente de datos seleccionada.
      const infoFilt = [...state.dataorigin]
      if (payload === "api") {
        return { ...state, recipes: infoFilt[1] }
      } else {
        return { ...state, recipes: infoFilt[0] }
      };

    default:
      //Este es el caso por defecto del bloque switch. Devuelve el estado actual sin realizar cambios.
      return { ...state };
  };

};

export default rootReducer;




