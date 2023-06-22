import React from 'react';
import ReactDOM from 'react-dom';//son las bibliotecas principales de React para trabajar con componentes y renderizar en el DOM
import './index.css';
import App from './App';//es el componente principal de la aplicación.
import reportWebVitals from './reportWebVitals';//es una función que se utiliza para medir y reportar métricas de rendimiento web.
import {BrowserRouter} from 'react-router-dom';//importamos para poder usar las rutas, es un componente de React Router que proporciona enrutamiento a la aplicación. 
import { Provider } from 'react-redux';//se importa para poder usar el store de redux, es un componente de React Router que proporciona enrutamiento a la aplicación.
import store from './Redux/Store';// importamos la store desde la carpeta de redux, es la instancia de la store de Redux creada en ./Redux/Store.js.

//La función ReactDOM.render() se encarga de renderizar el componente App dentro del elemento con el id 'root'. El componente App está envuelto por React.StrictMode, Provider y BrowserRouter, lo que proporciona funcionalidades adicionales de React y enrutamiento.
ReactDOM.render(

    <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter> 
    <App />
    </BrowserRouter>
    </Provider>
    </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//este código configura la configuración inicial de la aplicación React, incluyendo la renderización del componente raíz, la configuración de Redux y React Router, y la medición del rendimiento web.