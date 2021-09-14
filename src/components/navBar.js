import {Link} from 'react-router-dom';
import React from 'react';

function NavBar() {
    return (
      <div>
        <nav classname="navbar navbar-expand-lg navbar-light bg-light">
          <div classname="container-fluid">
            <div classname="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div classname="navbar-nav">
              <ul>
            <li>
              <Link to="/">Fake Store: Proyecto Tienda</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/productos">Listado de Productos</Link>
            </li>
          </ul> 
              </div>
            </div>
        </div>
        </nav>
      </div>)
}
export default NavBar;