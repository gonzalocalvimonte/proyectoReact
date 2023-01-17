import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './styles/Products.css'



function Products(){
    
  const [productos, setProductos] = useState([]);
   
      useEffect( () => {
        console.log('se monto el componente')
        fetch('http://localhost:3030/api/list')
        .then(response => response.json())
        .then(data => {
            setProductos(data.data)
            console.log(setProductos)
        })
        .catch(error => console.log(error))
         }, [] )
    
       
        const listaProductos = productos.map( (producto,i) => 
            
                <li key={i} className='product'>
                    <Link to={'/products/detail/' + producto.id}>                    
                    <picture>
                        <img src={producto.image} alt="salvavidas"/>
                    </picture>
                    <article>
                        <p className="list-name"> {producto.name} </p>
                        <p className="list-price">$ {producto.price} </p>
                        <p className="list-envio">Envio gratis</p>
                    </article>
                    </Link>
                </li>
           
        )
    


    return( 
        <div>

            <main id="main-products">
              
            <ul className='product-list'>{listaProductos}</ul>

            </main>

        </div>
    )
}

export default Products;