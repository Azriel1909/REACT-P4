import React,{useState} from 'react';
import Formulario from './taskForm';
import '../stylesheets/taskList.css';
import Tarea from './task';

/**FRagmentos en react <> */
function ListaDeTareas () {
  
  // Utilizaremos un Hook
  const [tareas, setTareas] = useState([]);
  //Cada tarea se va a representar como un objeto en ele array, la tarea es un objeto.

  //Definir función Agregar Tarea
  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      //QUitar espacios del principio o final de una cadena de caracteres.
      const tareasActualizadas = [tarea,...tareas];
      //Agregar la tarea al principio del array; con el operador spread(...) las convertimos de un arreglo a atareas individuales(objetos individuales).
      setTareas(tareasActualizadas);
      //Tomamos tareas anteriores y agregamos la tarea nueva.
    }
  };

  // Definir función para eliminar una tarea
  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter( tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  // Definir función para completar una tarea
  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if(tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      // Para retornar ese necesario valor de map...
      return tarea;
      // Genera un nuevo arreglo de tareas que se les asignará a tarea actualizadas.
    })
    setTareas(tareasActualizadas);
  };

  return (
    <>
    <Formulario onSubmit = {agregarTarea} />
    <div className='TareaListaContenedor'>
      
      {
        tareas.map((tarea) =>
          <Tarea 
            //Para que react no cambie el orden en la actualización, debemos incluir tanto id como key para que funcione bien la app.
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada = {tarea.completada}
            eliminarTarea = {eliminarTarea}
            completarTarea = {completarTarea}
          />
        )
      }
    </div>
    </>
  );
}
export default ListaDeTareas;