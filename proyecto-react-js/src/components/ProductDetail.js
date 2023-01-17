import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import './styles/ProductDetail.css'



function Products(){
    const { id } = useParams()
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
         
         console.log(productos)

         let product = productos.filter( producto =>
            producto.id == id)
            console.log(product)

        const productDetail = product.map( (producto,i) => 
        <section id='main-section'>

            <picture id="imagen-producto">
                <img src={producto.image} alt="imagen del producto"/>
            </picture>

            <section className='section-detalles-y-botones'>

                <article id="detalles-producto">
                    
                    <h2 className="detalle-nombre">{producto.name}</h2>
            
                    <p className="detalle-precio">$ {producto.price}</p>
                        
                    <p className="detalle-descripcion">{producto.description}</p>

                </article>

                <article id="botones">
            
                    <button class="boton-editar">
                        <a href="/">Editar</a>
                    </button>

                    <form action="" method="post">
                        <input type="hidden" name="image" value=""/>         
                        <button type="submit" class="boton-eliminar">Borrar</button>
                    </form>
            
                </article>

            </section>

        </section>
        
        )
        
      

    return( 
   

        <main id="main-detail">
            
                {productDetail}
     
        </main>

    
    )
}

export default Products;