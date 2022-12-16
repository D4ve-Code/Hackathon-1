import CharactersList from './screens/CharactersList';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
 const [button, setButton] = React.useState();
console.log(button)
  return (
    <div className="App">
    <Routes> 
      
    <Route exact path='/CharactersList' element={<CharactersList setButton={setButton}/>}/> 
    <Route path="/gameboard/:result" element={<CharactersList />} />
    </Routes>
    </div>
  );
}

export default App;
