import Home from './screens/Home'
import Test from './screens/Test'
import './App.css';
import {Routes, Route} from "react-router-dom";
import Header from './components/Header'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/test' element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
