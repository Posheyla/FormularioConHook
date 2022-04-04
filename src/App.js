import {useState} from 'react';
import './App.css';

function App() {
  const [nombre, setNombre] = useState("");
  const [nombreError, setNombreError] = useState("");
  const [apellido, setApellido] = useState("");
  const [apellidoError, setApellidoError] = useState("");
  const [correo, setCorreo] = useState("");
  const [correoError, setCorreoError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confpassword, setConfpassword] = useState("");
  const [confpasswordError, setConfpasswordError] = useState("");

  const handleNombre = (e) => {
    setNombre(e.target.value);
    if(e.target.value.length < 1) {
      setNombreError("Nombre is required!");
    } else if(e.target.value.length < 2) {
        setNombreError("Nombre must be 2 characters or longer!");
    } else {
        setNombreError('');
    }

  }
  const handleApellido = (e) => {
    setApellido(e.target.value);
    if(e.target.value.length < 1) {
      setApellidoError("Apellido is required!");
    } else if(e.target.value.length < 2) {
        setApellidoError("Apellido must be 2 characters or longer!");
    } else {
        setApellidoError('');
    }
  }
  const handleCorreo = (e) => {
    setCorreo(e.target.value);
    if(e.target.value.length < 1) {
      setCorreoError("Correo is required!");
    } else if(e.target.value.length < 2) {
        setCorreoError("Correo must be 2 characters or longer!");
    } else {
        setCorreoError('');
    }
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
    if(e.target.value.length < 8) {
      setPasswordError("Password must be 8 characters or longer!");
    } else {
        setPasswordError('');
    }
  }
  const handleConfpassword = (e) => {
    setConfpassword(e.target.value);
    console.log(password);
    console.log(confpassword);
    if(password !== confpassword) {
      setConfpasswordError("Passwords must be the same");
    } else {
        setConfpasswordError('');
    }
  }

  const crearUsuario = (event) =>{
    event.preventDefault();
    const nuevoUsuario = {nombre,apellido,correo,password,confpassword};
    console.log("Welcome", nuevoUsuario);
  }

return(
  <div>
    <h2>
      Formulario
    </h2>
    <form onSubmit={crearUsuario}>
          <div>
            <label htmlFor='nombreUsuario'>
              Nombre :
            </label>
            <input type="text" id= "nombreUsuario" value = {nombre} onChange={handleNombre}/>
            {
                    nombreError ?
                    <p style={{color:'red'}}>{ nombreError }</p> :
                    ''
                }
          </div>
          <div>
            <label htmlFor='apellidoUsuario'>
              Apellido:
            </label>
            <input type="text" id= "apellidoUsuario" value = {apellido} onChange={handleApellido}/>
            {
                    apellidoError ?
                    <p style={{color:'red'}}>{ apellidoError }</p> :
                    ''
                }
          </div>
          <div>
            <label htmlFor='correoUsuario' >
              Correo :
            </label>
            <input type="text" id= "correoUsuario" value = {correo} onChange={handleCorreo}/>
            {
                    correoError ?
                    <p style={{color:'red'}}>{ correoError }</p> :
                    ''
                }
          </div>
          <div>
            <label htmlFor='passwordUsuario'>
              Password :
            </label>
            <input type="password" id= "passwordUsuario" value = {password} onChange={handlePassword}/>
            {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
          </div>
          <div>
            <label htmlFor='confpasswordUsuario'>
              Confirmar password :
            </label>
            <input type="password" id= "confpasswordUsuario" value = {confpassword} onChange={handleConfpassword}/>
            {
                    confpasswordError ?
                    <p style={{color:'red'}}>{ confpasswordError}</p> :
                    ''
                }
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
