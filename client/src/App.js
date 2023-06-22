//importamos las views para poder enrutar
import Landing from './Views/Landing';
import Home from './Views/Home';
import Create from './Views/Create';
import Detail from './Views/Detail';

//importamos Route Hook para poder usar las rutas
import { Route } from 'react-router-dom';//importa el componente Route de la biblioteca react-router-dom, que se utilizará para definir las rutas de la aplicación.

//importamos el estilo de css
import './App.css';



//La función App() es un componente funcional de React que devuelve el JSX (JavaScript XML) que representa la estructura de la aplicación.Dentro del contenedor principal, se definen las rutas de la aplicación utilizando el componente Route. Cada ruta está representada por una instancia de Route y tiene propiedades como exact (para que coincida solo cuando la URL es idéntica), path (la ruta de la URL) y component (el componente que se renderizará cuando se visite esa ruta).
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/create" component={Create} />
      <Route exact path="/detail/:id" component={Detail} />
    </div>
  );
}

export default App;
