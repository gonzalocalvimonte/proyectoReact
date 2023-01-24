import './styles/Header.css'
import {  Link } from 'react-router-dom'

function Header() {


  return (
        <header id='header'>
          {/* picture para poner el logo de la web*/}
            <picture id='logo'>
              <Link to="/">
                    <img src="http://localhost:3000/logo_blanco.png" alt="Oxígeno"/>
              </Link>
            </picture>

          {/* el form corresponde a un buscador funcional, que 
          buscara el producto que corresponda en la BD*/}
            <form id='search'>
              <input type="text" name="q" id="searchInput" placeholder="Buscar productos" list="listProducts"/>
              <nav id="listProducts">
              </nav>
              
              <button type="submit"><a href="/"><i className="fa-solid fa-search"></i></a></button>
            </form>

          {/* lista que corresponde a los iconos de usuario,
          carrito,perfil.. */}
            <ul id='nav'>    
              <li className="test user"><Link to="/user/login"><i className="usertwo fa-solid fa-user"></i></Link></li>
                       
              <li className="test cart"><a href="/"><i className="carttwo fa-solid fa-cart-shopping"></i></a></li>
  
              <li className="test out">
                <form>
                  <Link to="/user/"><i className="outtwo fa-sharp fa-solid fa-right-from-bracket"></i></Link>
                </form>
                </li>                       
            </ul>

          {/*lista que enlaces */}
          <ul id='menu'>
              <li className="submenu"><Link to="/products">Productos</Link></li>

              <li className="submenu"><Link to="/products/create">Crear Producto</Link></li>

              <li className="submenu"><a href="/who">¿Quiénes Somos?</a></li>
          </ul>
        </header>
  );
}

export default Header;