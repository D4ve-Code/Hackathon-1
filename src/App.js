<<<<<<< HEAD
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

=======
import CharactersList from './screens/CharactersList';
import React from 'react';

function App() {
 const [button, setButton] = React.useState();
console.log(button)
  return (
    <div className="App">
    <CharactersList
    setButton={setButton}/>
>>>>>>> characters
    </div>
  );
}

export default App;
