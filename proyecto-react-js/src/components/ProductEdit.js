import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom" 
import './styles/ProductCreate.css'

function ProductEdit(){
    const { id } = useParams();
    const enviarDatos = () => {
    return fetch('http://localhost:3030/api/edit',{
        method:'POST',
        body: JSON.stringify(producto),
        headers:{
            'Content-type':'application/json'
        }
    }).then(res => res.json())
    .catch(error =>console.error('Error:',error));


    }
    const [producto, setProducto] = useState({
        id:id,
        name:'',
        price:'',
        description:'',
        category_id: '1',
        image: ''
    })

    

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
    

    const handleInputChange = (event) => {
        setProducto({
            ...producto,
            [event.target.name] : event.target.value           
        })
    }
   
    const edition = productos.filter( producto =>
    producto.id === Number(id))
    console.log(edition)
    const editionProduct = edition.map((producto,i) => {
        return(
            <div key={i}>

            <input type='hidden' 
            name='id'
            value={producto.id}
            onChange={handleInputChange}/>

            <input type="text" 
            placeholder="Nombre del Producto" 
            name="name" 
            id="name"
            defaultValue={producto.name}
            onChange={handleInputChange}>
            
            </input>

            <input type="number" 
            placeholder="Precio" 
            name="price"
            defaultValue={producto.price}
            onChange={handleInputChange}>
            
            </input>

            <textarea name="description" 
            placeholder="Descripcion" 
            id="description"
            defaultValue={producto.description}
            onChange={handleInputChange}>
           
            </textarea>

        </div>)
    })

 return( 
   <main className="mainAddProd">

       <form className="formAddProd" onSubmit={enviarDatos}>

            <span className="title-formAdd">Editar datos del producto</span>

            {editionProduct}

            <div id="button-add">
                <button type="submit" className="button-add" > Agregar producto </button>
            </div>

       </form>

   </main>
   )
}

export default ProductEdit;