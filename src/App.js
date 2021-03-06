import React from 'react';
import './App.css';
import VideoDisplay from './Components/VideoDisplay.js';
import NavBar from './Components/NavBar.js';
import About from './Components/About.js';
import Page404NotFound from './Components/Page404NotFound.js';
import Home from './Components/Home.js';
import { Routes, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <title>YouTube App</title>

        <header className='App-header'>
          <NavBar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<Page404NotFound />} />
            <Route path='/videos/:id' element={<VideoDisplay />} />
          </Routes>
        </header>
      </div>
    );
  }
}

export default App;
