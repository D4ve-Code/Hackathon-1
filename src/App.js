import './App.css';
import TourList from './screens/TourList';
import { Routes, Route } from 'react-router-dom';
import CharactersList from './screens/CharactersList';
import React from 'react';
import Home from './screens/Home';
import Header from './components/Header';


function App() {
 const [button, setButton] = React.useState();
console.log(button)
  return (
    <div className="App">

    <Routes> 
      <Route path='/' element={<Home />} /> 
      <Route  path='/characterslist' element={<CharactersList/>}/>
      <Route  path='/tourlist' element={<TourList/>}/>
      <Route exact path='/CharactersList' element={<CharactersList setButton={setButton}/>}/> 
      <Route path="/gameboard/:result" element={<CharactersList />} />
    </Routes>
    </div>
  );
}

export default App;
