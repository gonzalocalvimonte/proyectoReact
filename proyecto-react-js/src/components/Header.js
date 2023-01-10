import './styles/Header.css'

function Header() {
  return (
        <header id='header'>
          {/* picture para poner el logo de la web*/}
            <picture id='logo'>
              <a href="/">
                    <img src="http://localhost:3000/logo_blanco.png" alt="Oxígeno"/>
              </a>
            </picture>

          {/* el form corresponde a un buscador funcional, que 
          buscara el producto que corresponda en la BD*/}
            <form id='search'>
              <input type="text" name="q" id="searchInput" placeholder="Buscar productos" list="listProducts" autocomplete="off" />
              <nav id="listProducts">
              </nav>
              
              <button type="submit"><a href="/"><i class="fa-solid fa-search"></i></a></button>
            </form>

          {/* lista que corresponde a los iconos de usuario,
          carrito,perfil.. */}
            <ul id='nav'>    
              <li class="test user"><a href="/"><i class="usertwo fa-solid fa-user"></i></a></li>
                       
              <li class="test cart"><a href="/"><i class="carttwo fa-solid fa-cart-shopping"></i></a></li>
  
              <li class="test out"><a href="/"><i class="outtwo fa-sharp fa-solid fa-right-from-bracket"></i></a></li>                       
            </ul>

          {/*lista que enlaces */}
          <ul id='menu'>
              <li class="submenu"><a href="/products">Productos</a></li>

              <li class="submenu"><a href="/">Crear Producto</a></li>

              <li class="submenu"><a href="/who">¿Quiénes Somos?</a></li>
          </ul>
        </header>
  );
}

export default Header;