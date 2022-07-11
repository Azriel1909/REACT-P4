
import './App.css';
import PinkHatLogo from './images/logo.png';
import Tarea from './components/task';
import ListaDeTareas from './components/taskList';

function App() {
  return (
    <div className="AppToDo">
      <div className='pinkHatLogoContenedor'>
        <img 
          src={PinkHatLogo}
          className='pinkHatLogoPicture' />
      </div>
      <div className='PrimaryToDoList'>
        <h1>Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
