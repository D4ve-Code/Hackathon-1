import CharactersList from './screens/CharactersList';
import React from 'react';

function App() {
 const [button, setButton] = React.useState();
console.log(button)
  return (
    <div className="App">
    <CharactersList
    setButton={setButton}/>
    </div>
  );
}

export default App;
