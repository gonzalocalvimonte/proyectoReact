import { useState } from 'react';
import './styles/Register.css'

function Register(){

    const [datos, setDatos] = useState({
        name:'',
        lastName:'',
        password:'',
        address: '1',
        birth: '',
        email:''
    })

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value           
        })
    }
    

    const enviarDatos = () => {
        
      return fetch('http://localhost:3030/api/users/save',{
            method:'POST',
            body: JSON.stringify(datos),
            headers:{
                'Content-type':'application/json'
            }
        }).then(res => res.json())
        .catch(error =>console.error('Error:',error));

       
    }



    return(
        <main id="register">
        <form className="form-reg" onSubmit={enviarDatos}>
            <span className="titulo-form">¡Registrate!</span>
          
            <input className="in-register" 
            type="text" 
            name="name" 
            id="nombre" 
            placeholder="Nombre" 
            
            onChange={handleInputChange} />
            
            <input className="in-register" 
            type="text" 
            name="lastName" 
            id="apellido" 
            placeholder="Apellido"  
            
            onChange={handleInputChange}/>
           
            <input className="in-register" 
            type="text" name="email" 
            id="email" 
            placeholder="email" 
            
            onChange={handleInputChange}/>
           
            <input className="in-register" 
            type="password" 
            name="password" 
            id="password" 
            placeholder="Contraseña" 
            onChange={handleInputChange}/>

            <i className="fa-regular fa-eye" 
            id="togglePasswordView"></i>
            
            <span className="date">Fecha de Nacimiento</span>
            <input className="in-register" 
            type="date" 
            name="birth" 
            id="nacimiento" 
            placeholder="Fecha Nacimiento" 
            onChange={handleInputChange}/>
            
            <input className="in-register" 
            type="text"
            name="address" 
            id="domicilio"
            placeholder="Domicilio" 
            
            onChange={handleInputChange}/>
            
            
            <div id="btn-enviar">
                <button type="submit" 
                className="btn-enviar">Enviar</button>
            </div>
        </form>
    </main>
    )
}
export default Register