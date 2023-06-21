import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';//importamos para poder usar las rutas 
import { Provider } from 'react-redux';//se importa para poder usar el store de redux
import store from './Redux/Store';// importamos la store desde la carpeta de redux


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
