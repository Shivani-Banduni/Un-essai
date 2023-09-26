import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Stopwatch from './components/Stopwatch';
import Navbar from './components/Navbar';
import Translator from './components/Translator';

function App() {
  return (
    <div className="App">
          <Navbar/>
{
     <Routes>
<Route  path='/stopwatch' element={<Stopwatch/>}/>
      </Routes> } 
      <Translator/>

    </div>
  );
}

export default App;
