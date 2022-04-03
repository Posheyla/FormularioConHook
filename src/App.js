import {useState} from 'react';
import './App.css';

function App() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfpassword] = useState("");

  const agregarUsuario = (event) =>{
    event.preventDefault();
  }

return(
  <div>
    <h2>
      Formulario
    </h2>
    <form onSubmit={agregarUsuario}>
          <div>
            <label htmlFor='nombreUsuario'>
              Nombre :
            </label>
            <input type="text" id= "nombreUsuario" value = {nombre} onChange={(e)=> setNombre(e.target.value)}/>
          </div>
          <div>
            <label htmlFor='apellidoUsuario'>
              Apellido:
            </label>
            <input type="text" id= "apellidoUsuario" value = {apellido} onChange={(e)=> setApellido(e.target.value)}/>
          </div>
          <div>
            <label htmlFor='correoUsuario' >
              Correo :
            </label>
            <input type="text" id= "correoUsuario" value = {correo} onChange={(e)=> setCorreo(e.target.value)}/>
          </div>
          <div>
            <label htmlFor='passwordUsuario'>
              Password :
            </label>
            <input type="password" id= "passwordUsuario" value = {password} onChange={(e)=> setPassword(e.target.value)}/>
          </div>
          <div>
            <label htmlFor='confpasswordUsuario'>
              Confirmar password :
            </label>
            <input type="password" id= "confpasswordUsuario" value = {confpassword} onChange={(e)=> setConfpassword(e.target.value)}/>
          </div>
          <button type = "submit">
              Agregar
          </button>
      </form>
      <div className='datos_usuario'>
      <div className = 'tarjeta_usuario'>
            <h3>
                Your form data
            </h3>
            <h4>
                Nombre: {nombre}
            </h4>
            <h4>
                Apellido: {apellido}
            </h4>
            <h4>
                Correo: {correo}
            </h4>
            <h4>
                Password: password
            </h4>
            <h4>
                Confirmar password: password
            </h4>
        </div>
      </div>
  </div>
)
}
export default App;
