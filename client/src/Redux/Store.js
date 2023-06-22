import {legacy_createStore as createStore,applyMiddleware,compose} from 'redux';//importa las funciones y objetos necesarios de la biblioteca Redux para crear el store y aplicar middlewares.
import rootReducer from './Reducer.js';//importa el rootReducer, que es un archivo que combina todos los reducers de la aplicación en uno solo.
import thunkMiddleware from 'redux-thunk';//importa el middleware thunk, que permite la ejecución de acciones asíncronas en Redux. Redux-thunk es un middleware que amplía las capacidades de Redux al permitir que las acciones sean funciones en lugar de objetos planos. Esto facilita la realización de operaciones asíncronas y el despacho de múltiples acciones en respuesta a una sola acción.

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||compose;//Se utiliza para habilitar la extensión Redux DevTools en el navegador, si está disponible. Permite verificar el estado de la aplicación y seguir el flujo de acciones utilizando la extensión Redux DevTools. Si la extensión no está disponible, se utiliza la función compose de Redux. la configuracion se usa para poder verificar en el navegador el estado con la extension

//La constante store se crea mediante la función createStore de Redux. Recibe dos argumentos: el rootReducer que combina todos los reducers de la aplicación, y composeEnchancer que envuelve los middlewares aplicados al store. El middleware thunkMiddleware se aplica al store utilizando applyMiddleware. Permite la ejecución de acciones asíncronas y acciones que retornan funciones en lugar de objetos.
const store = createStore(
    rootReducer,
    composeEnchancer(applyMiddleware(thunkMiddleware))
)
export default store;