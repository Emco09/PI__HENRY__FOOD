import {legacy_createStore as createStore,applyMiddleware,compose} from 'redux';
import rootReducer from './Reducer.js';
import thunkMiddleware from 'redux-thunk';

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||compose;// la configuracion se usa para poder verificar en el navegador el estado con la extension

const store = createStore(
    rootReducer,
    composeEnchancer(applyMiddleware(thunkMiddleware))
)
export default store;