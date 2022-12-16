import {useState} from "react"
import Tournament from './screens/Tournament';
import './App.css';
import TourList from './screens/TourList';
import { Routes, Route } from 'react-router-dom';
import CharactersList from './screens/CharactersList';
import React from 'react';
import Home from './screens/Home';
import Header from './components/Header';


function App() {
  const [button, setButton] = useState();
  // const idChoise = 2
    return (
    <div className="App">
    
    <Routes> 
      <Route path='/' element={<Home />} /> 
      <Route  path='/characterslist' element={<CharactersList/>}/>
      <Route  path='/tourlist' element={<TourList/>}/>
      <Route exact path='/CharactersList' element={<CharactersList setButton={setButton}/>}/> 
      <Route path="/gameboard/:result" element={<CharactersList />} />
      <Route exact path='/CharactersList' element={<CharactersList setButton={setButton}/>}/> 
      <Route exact path="/gameboard" element={<Tournament playerchoice={button}/> } />
      <Route path="/gameboard/:result/:id" element={<Tournament playerchoice={button}/> } />
    </Routes>
    </div>
  );
}

export default App;
