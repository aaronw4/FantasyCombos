import { PlayersProvider } from './Context/playersContext'
import Header from './Components/Header';
import AddPlayer from './Components/AddPlayer';
import Players from './Components/Players';
import Combos from './Components/Combos';
import './App.css';

function App() {
  return (
    <PlayersProvider>
      <div className="App">
        <Header/>
        <AddPlayer/>
        <Players/>
        <Combos/>
      </div>
    </PlayersProvider>
  );
}

export default App;
