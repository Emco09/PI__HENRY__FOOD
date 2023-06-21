//importamos las views para poder enrutar
import Landing from './Views/Landing';
import Home from './Views/Home';
import Create from './Views/Create';
import Detail from './Views/Detail';

//importamos Route Hook para poder usar las rutas
import { Route } from 'react-router-dom';

//importamos el estilo de css
import './App.css';




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
