import React,{useState} from 'react';
import '../stylesheets/taskform.css';
import {v4 as uuidv4} from 'uuid';

function Formulario(props) {

  const [input, setInput] = useState('');

  // Cambios del usuario
  // Evento que ocurre cuando cambiamos el texto en el campo de texto.
  const manejarCambio = e => {
    setInput(e.target.value);
  };

  // Agregar Tarea
  // Cuando se envie el formulario.
  const manejarEnvio = e => {
    e.preventDefault();
    //No se volverá a cargar toda la página al enviar el formulario.
    /* Pra generar id única utilizaremos el paquete uuid
    para instalar:
    ~$ npm install uuid
    ver dependencias en package.json*/
    console.log("Enviando formulario...");
    // Objeto de tarea
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    };
    props.onSubmit(tareaNueva);
  };

  return (
    <form className='forularioTarea'
      onSubmit={manejarEnvio}>
      <input className='tareaInput'
      type='text'
      placeholder='La tarea es...'
      name='texto' 
      onChange={manejarCambio}
      />
      <button className='tareaBoton'>Agregar</button>
    </form>
  );
} 
export default Formulario;