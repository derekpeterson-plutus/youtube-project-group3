import React from 'react';
import './App.css';
import NavBar from './Components/NavBar.js';
import About from './Components/About.js';
import SearchBar from './Components/SearchBar.js';
import Page404NotFound from './Components/Page404NotFound.js';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <NavBar />
        <Routes>
          <Route path='/' element={<SearchBar />} />
          <Route path='/about' element={<About />} />
          {/* <Route
            path='*'
            element={
              <main style={{ padding: '1rem' }}>
                <p>404 PageThere's nothing here!</p>
              </main>
            }
          /> */}
          <Route path='*' element={<Page404NotFound />} />
        </Routes>
      </header>
    </div>
  );
}
export default App;
