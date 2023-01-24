import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
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
                
            })
            .catch(error => console.log(error))
            }, [] )
            
        let product = productos.filter( producto =>
                producto.id === Number(id))
                  
       
        const [productDestroy] = useState({
            id:id
        });

        const productDelete = () => {
            let mensaje
            let opcion = prompt("Para confirmar, escribe 'aceptar' sino escribe 'cancelar'");
            if (opcion === "aceptar") {
            fetch('http://localhost:3030/api/delete',{
                method:'POST',
                body: JSON.stringify(productDestroy),
                headers:{
                    'Content-type':'application/json'
                }
            }).then(res => res.json())
            .catch(error =>console.error('Error:',error))
          mensaje = "el producto se borro correctamente"
        } else if (opcion === "cancelar"){
            
        }
        document.getElementById("ejemplo").innerHTML = mensaje

           
        }
      
      

        const productDetail = product.map( (producto,i) => 
        <section id='main-section' key={i}>

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
            
                    <button className="boton-editar">
                        <Link to={"/products/edit/"+ producto.id}>Editar</Link>
                    </button>

                    <form onSubmit={productDelete}>         
                        <button type="submit" className="boton-eliminar">
                           Borrar
                        </button>
                    </form>
            
                </article>

            </section>

        </section>
        )

    return( 
   

        <main id="main-detail">
                <p id='ejemplo'></p>
                {productDetail}
     
        </main>

    
    )
}

export default Products;