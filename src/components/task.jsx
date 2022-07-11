import React from 'react';
import '../stylesheets/task.css';
/**Paquete externo al proyecto
 * ~$ npm install react-icons --save
 * Verificarlo en package.json en dependencias
 * webpage -https://react-icons.github.io/react-icons/icons?name=ai
*/
import { AiOutlineClose } from "react-icons/ai";

function Tarea( { id, texto, completada, completarTarea, eliminarTarea } ) {
  return (
    <div className={completada ? 'tareaContenedor completada' : 'tareaContenedor '}>
      <div 
        className='tareaTexto'
        onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div
        className='tareaIconContenedor'
        onClick={() => eliminarTarea(id)}>
        <AiOutlineClose className='tareaIcon'/>
      </div>
    </div>
  );
}

export default Tarea;