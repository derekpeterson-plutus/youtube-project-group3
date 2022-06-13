import React from 'react';
import './App.css';
import NavBar from './Component/NavBar.js'
import About from './Components/About.js'
import Home from './Components/Home.js'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route
            path="*"
              element={
              <main style={{ padding: "1rem" }}>
               <p>404 PageThere's nothing here!</p>
        </main>
      }
    />
        </Routes>
      </header>
    </div>
  );
}

export default App;
