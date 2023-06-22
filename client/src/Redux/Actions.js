import axios from 'axios'; //Importa el módulo axios para realizar solicitudes HTTP.
import { GET_RECIPES, GET_DIETS, FILTER, SORT, DIET, RESET, INFO, GET_NAME } from './Actions-Types';//Importa los tipos de acciones definidos en el archivo 
import allrecipes from '../archivosjson/allrecipes.json';

//Define la acción getRecipes. Esta acción es una función asíncrona que realiza una solicitud GET a la URL 'http://localhost:3001/recipes' para obtener los datos de las recetas. Luego, actualiza el estado utilizando la acción GET_RECIPES y envía los datos de las recetas y una versión filtrada combinada de los datos de la API y de la base de datos como payload.
export const getRecipes = (props) => {
    return async function (dispatch) {
        const recipes = (await axios.get('http://localhost:3001/recipes')).data
        /* const recipes = allrecipes */
        const dbDAta = recipes[0]
        const apiData = recipes[1]
        const filterApi = [].concat(dbDAta, apiData)
        dispatch({ type: GET_RECIPES, payload: [recipes, filterApi] })
    }
}
//Define la acción getDiets. Esta acción realiza una solicitud GET a la URL 'http://localhost:3001/diets' para obtener los datos de los tipos de dieta. Luego, actualiza el estado utilizando la acción GET_DIETS y envía los datos de los tipos de dieta como payload.
export const getDiets = () => {
    return async function (dispatch) {
        const diets = (await axios.get('http://localhost:3001/diets')).data
        /* const diets = ["gluten free", "dairy free", "fodmap friendly", "pescatarian"] */
        dispatch({ type: GET_DIETS, payload: diets })
    }
}
//Define la acción getName. Esta acción recibe un nombre como argumento, que no se utiliza en el código actual. Esta acción está comentada y no se realiza ninguna operación.
export const getName = (name) => {
    console.log(name, 'estoo es la action');
    return function (dispatch) {
        /* const namerecipe =(await axios.get(`http://localhost:3001/diets${name}`)) */
        /* dispatch({type:GET_NAME,payload:namerecipe}) */

    }

}
//Define la acción filterCards. Esta acción recibe un tipo como argumento y envía una acción de tipo FILTER con el tipo proporcionado como payload.
export const filterCards = (type) => {
    return ({ type: FILTER, payload: type })
}
//Define la acción sortCards. Esta acción recibe un orden como argumento y envía una acción de tipo SORT con el orden proporcionado como payload.
export const sortCards = (order) => {
    return { type: SORT, payload: order };
}
//Define la acción healtCards. Esta acción recibe un orden como argumento y envía una acción de tipo DIET con el orden proporcionado como payload.
export const healtCards = (order) => {
    return { type: DIET, payload: order }
}
//Define la acción reset. Esta acción recibe un orden como argumento y envía una acción de tipo RESET con el orden proporcionado como payload.
export const reset = (order) => {
    return { type: RESET, payload: order }
}
//Define la acción infoApiDb. Esta acción recibe una fuente de datos como argumento y envía una acción de tipo INFO con la fuente de datos proporcionada como payload.
export const infoApiDb = (order) => {
    return { type: INFO, payload: order }
}

//En resumen, el archivo Actions.js define un conjunto de acciones que interactúan con el estado de la aplicación. Algunas acciones realizan solicitudes HTTP utilizando axios para obtener datos y luego actualizan el estado utilizando los tipos de acciones definidos en Actions-Types.js.