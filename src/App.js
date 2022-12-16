import './App.css';
import TourList from './screens/TourList';
import { Routes, Route } from 'react-router-dom';
import CharactersList from './screens/CharactersList';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route  path='/characterslist' element={<CharactersList/>}/>
        <Route  path='/tourlist' element={<TourList/>}/>
      </Routes>

    </div>
  );
}

export default App;
