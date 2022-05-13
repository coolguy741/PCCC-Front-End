import { Leva } from 'leva';
import Scene from './components/3D/3DElements/Scene';
import './style/App.css';

function App() {
  return (
    <div className="App">
      <Leva hidden={true}/>
      <Scene/>
    </div>
  );
}

export default App;
