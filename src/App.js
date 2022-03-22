import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Global from './components/Global';

import Search from './components/Search';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './components/Home';




function App() {
  return (
    <div className="App">
      <h1>COVID-19 TRACKER</h1>

    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/search' element={<Search/>}/>
         <Route path='/global' element={<Global/>} />

      </Routes>
    </Router>
    
    </div>
  );
}

export default App; 