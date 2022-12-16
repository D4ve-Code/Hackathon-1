import { Routes, Route } from 'react-router-dom';
import './App.css';
import Tournament from './screens/Tournament';
function App() {
  const idChoise = 2
    return (
    <div className="App">
      <Tournament
       playerchoice={idChoise}
      />

    </div>
  );
}

export default App;
