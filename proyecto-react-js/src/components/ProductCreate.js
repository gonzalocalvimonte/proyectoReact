import { useState } from 'react';
import { Link } from "react-router-dom"; 
import './styles/ProductCreate.css'

function ProductCreate(){
    

    const [datos, setDatos] = useState({
        name:'',
        price:'',
        description:'',
        category_id: '1',
        image: ''
    })

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value           
        })
    }
    console.log(datos)

    const enviarDatos = () => {
        
      return fetch('http://localhost:3030/api/create',{
            method:'POST',
            body: JSON.stringify(datos),
            headers:{
                'Content-type':'application/json'
            }
        })
        .then(res => res.json())
        .catch(error =>console.error('Error:',error));
        
    
    }
    

    return( 
    <main className="mainAddProd">

        <form className="formAddProd" onSubmit={enviarDatos}>

            <span className="title-formAdd">Completar registro de producto nuevo</span>

            <input type="text" 
            placeholder="Nombre del Producto" 
            name="name" 
            id="name" 
            onChange={handleInputChange}/>

            <input type="number" 
            placeholder="Precio" 
            name="price"
            onChange={handleInputChange}/>

            <textarea name="description" 
            placeholder="Descripcion" 
            id="description"
            onChange={handleInputChange}>
            </textarea>

    
         

            <div id="button-add">
                <button type="submit" className="button-add">
                
                    <Link to={'/products'}>Agregar producto</Link>

                </button>
            </div>

        </form>

    </main>
    )
}

export default ProductCreate;