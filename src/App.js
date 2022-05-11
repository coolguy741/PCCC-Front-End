import { Leva } from 'leva';
import logo from './assets/images/logo.svg';
import Scene from './components/3D/3DElements/Scene';
import './style/App.css';

function App() {
  return (
    <div className="App">
      <Scene/>
      <Leva hidden={true}/>
    </div>
  );
}

export default App;
