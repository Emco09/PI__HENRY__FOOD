import axios from 'axios';
import { GET_RECIPES, GET_DIETS, FILTER, SORT, DIET, RESET, INFO, GET_NAME } from './Actions-Types';
import allrecipes from '../archivosjson/allrecipes.json';


export const getRecipes = (props) => {
    return async function (dispatch) {
        /* const recipes = (await axios.get('http://localhost:3001/recipes')).data */
        const recipes = allrecipes
        const dbDAta = recipes[0]
        const apiData = recipes[1]
        const filterApi = [].concat(dbDAta, apiData)
        dispatch({ type: GET_RECIPES, payload: [recipes, filterApi] })
    }
}

export const getDiets = () => {
    return async function (dispatch) {
        /* const diets = (await axios.get('http://localhost:3001/diets')).data */
        const diets = ["gluten free", "dairy free", "fodmap friendly", "pescatarian"]
        dispatch({ type: GET_DIETS, payload: diets })
    }
}

export const getName = (name) => {
    console.log(name,'estoo es la action');
    return function (dispatch) {
        /* const namerecipe =(await axios.get(`http://localhost:3001/diets${name}`)) */
        /* dispatch({type:GET_NAME,payload:namerecipe}) */

    }

}

export const filterCards = (type) => {
    return ({ type: FILTER, payload: type })
}

export const sortCards = (order) => {
    return { type: SORT, payload: order };
}

export const healtCards = (order) => {
    return { type: DIET, payload: order }
}

export const reset = (order) => {
    return { type: RESET, payload: order }
}

export const infoApiDb = (order) => {
    return { type: INFO, payload: order }
}