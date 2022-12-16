import CharactersList from './screens/CharactersList';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home'
import './App.css';
import Header from './components/Header'


function App() {
 const [button, setButton] = React.useState();
console.log(button)
  return (
    <div className="App">
    <Routes> 
    <Route path='/' element={<Home />} /> 
    <Route exact path='/CharactersList' element={<CharactersList setButton={setButton}/>}/> 
    <Route path="/gameboard/:result" element={<CharactersList />} />
    </Routes>
    </div>
  );
}

export default App;
