import React from 'react';
import './App.css';

import NavBar from './Components/NavBar.js';
import About from './Components/About.js';
import SearchBar from './Components/SearchBar.js';
import Page404NotFound from './Components/Page404NotFound.js';

import Home from './Components/Home.js'

import { Routes, Route } from 'react-router-dom';

class App extends React.Component {
 constructor () { 
   super();
   this.state = {
     video: [],
   };
 } 

 fetchData = (inp)=> {
   fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=21&q=${inp}&type=video&key=${process.env.REACT_APP_API_KEY}`
  )
  .then((res) =>{
      return res.json();
    })
    .then((data) => {
      console.log(data);
      this.setState({
        video: data.items,
      });
    })
   
}




    render (){
    
  return (

    <div className='App'>

      <title>YouTube App</title>
      <h1>YouTube</h1>
      {this.fetchData(" ") }
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
