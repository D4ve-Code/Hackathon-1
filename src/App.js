import {useState} from "react"
import { Routes, Route } from 'react-router-dom';
import CharactersList from './screens/CharactersList';
import './App.css';
import Tournament from './screens/Tournament';
function App() {
  const [button, setButton] = useState();
  // const idChoise = 2
    return (
    <div className="App">

      <Routes> 
        <Route exact path='/CharactersList' element={<CharactersList setButton={setButton}/>}/> 
        <Route exact path="/gameboard" element={<Tournament playerchoice={button}/> } />
        <Route path="/gameboard/:result/:id" element={<Tournament playerchoice={button}/> } />
      </Routes>
    
    </div>
  );
}

export default App;
