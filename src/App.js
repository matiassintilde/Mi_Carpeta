import React,{useState} from 'react';
import ListaDeTareas from './ListaDeTareas'


function App() {
  const [Tareas,AgregarTarea ]=useState(['Tarea 1','Tarea 2'])
  return (
    <>
    <ListaDeTareas Tareas={Tareas} />
    <input type ="text"/>
    <button>Agregar Tarea</button>
    <button>Borrar tareas completas</button>
    <div>0 tareas pendientes</div>  
    </>
    )
}

export default App;
