import './styles/Login.css'
import { useState } from 'react';
import {  Link } from 'react-router-dom'

function Login (){

    const [usuario, setUsuario] = useState({
        email:'',
        password:'',
        rememberMe: Boolean()

    })

    const handleInputChange = (event) => {
        setUsuario({
            ...usuario,
            [event.target.name] : event.target.value           
        })
    }
     console.log(usuario)
    const enviarDatos = () => {
        
        return fetch('http://localhost:3030/api/users/access',{
              method:'POST',
              body: JSON.stringify(usuario),
              headers:{
                  'Content-type':'application/json'
              }
          })
          .then(res => res.json())
          .catch(error =>console.error('Error:',error));
          
      }



    return(
        <main id="login">
            <form className="form-log" onSubmit={enviarDatos}>

                <div className="prueba">

                    <input className="in-log" 
                    type="text" 
                    name="email"
                    id="usuario"  
                    placeholder="Email"
                    onChange={handleInputChange}/>

                    <input className="in-log" 
                    type="password" 
                    placeholder="Contraseña" 
                    name="password" 
                    id="password" 
                    onChange={handleInputChange}/>    
                    <i className="fa-regular fa-eye" 
                    id="togglePasswordView"></i>
        
                </div>

                <section className="registroBoton">
                    <label className="register">Recordarme</label>
                    <input type="checkbox" 
                    value="rememberMe" 
                    name="rememberMe" 
                    id="rememberMe"
                    onChange={handleInputChange}/> 
                </section>

                <Link href="/">¿Olvidaste tu contraseña?</Link>
                
                <Link className="register" to="/user/register">¿No tenes cuenta?</Link>

                <div className="btn-ingresar">
                    <button className="btn-login" type="submit">Ingresar</button>
                </div>

            </form> 
        </main>
    )
}
export default Login