import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './components/home';
import Research from './components/research';
import Teaching from './components/teaching';
import Career from './components/career';
import Auth from './components/auth';
import Header from './layouts/header';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/research' element={<Research/>}/>
        <Route path='/teaching' element={<Teaching/>}/>
        <Route path='/career' element={<Career/>}/>
        <Route path='/auth' element={<Auth/>}/>
      </Routes>
    </div>
  );
}

export default App;
