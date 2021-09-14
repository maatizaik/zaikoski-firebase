import './App.css';
import{BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from './components/navBar';

import {collection, getDocs} from 'firebase/firestore'
import {getData} from './firebase'
import Home from './pages/home';
import ItemContainer from './components/itemContainer';
import ItemDetailContainer from './components/itemDetailContainer';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/productos">
          <ItemContainer/>
        </Route>
        <Route exact path="/producto-detalle/:id">
          <ItemDetailContainer/>
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
